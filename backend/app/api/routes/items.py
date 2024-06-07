from typing import Any

from fastapi import APIRouter, HTTPException
from sqlmodel import func, select

from app.api.deps import CurrentUser, SessionDep
from app.models import (
    Dataset,
    DatasetCreate,
    DatasetPublic,
    DatasetsPublic,
    DatasetUpdate,
    Message,
)

router = APIRouter()


@router.get("/", response_model=DatasetsPublic)
def read_items(
    session: SessionDep, current_user: CurrentUser, skip: int = 0, limit: int = 100
) -> Any:
    """
    Retrieve items.
    """

    if current_user.is_superuser:
        count_statement = select(func.count()).select_from(Dataset)
        count = session.exec(count_statement).one()
        statement = select(Dataset).offset(skip).limit(limit)
        items = session.exec(statement).all()
    else:
        count_statement = (
            select(func.count())
            .select_from(Dataset)
            .where(Dataset.owner_id == current_user.id)
        )
        count = session.exec(count_statement).one()
        statement = (
            select(Dataset)
            .where(Dataset.owner_id == current_user.id)
            .offset(skip)
            .limit(limit)
        )
        items = session.exec(statement).all()

    return DatasetsPublic(data=items, count=count)


@router.get("/{id}", response_model=DatasetPublic)
def read_item(session: SessionDep, current_user: CurrentUser, id: int) -> Any:
    """
    Get item by ID.
    """
    item = session.get(Dataset, id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    if not current_user.is_superuser and (item.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    return item


@router.post("/", response_model=DatasetPublic)
def create_item(
    *, session: SessionDep, current_user: CurrentUser, item_in: DatasetCreate
) -> Any:
    """
    Create new item.
    """
    item = Dataset.model_validate(item_in, update={"owner_id": current_user.id})
    session.add(item)
    session.commit()
    session.refresh(item)
    return item


@router.put("/{id}", response_model=DatasetPublic)
def update_item(
    *, session: SessionDep, current_user: CurrentUser, id: int, item_in: DatasetUpdate
) -> Any:
    """
    Update an item.
    """
    item = session.get(Dataset, id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    if not current_user.is_superuser and (item.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    update_dict = item_in.model_dump(exclude_unset=True)
    item.sqlmodel_update(update_dict)
    session.add(item)
    session.commit()
    session.refresh(item)
    return item


@router.delete("/{id}")
def delete_item(session: SessionDep, current_user: CurrentUser, id: int) -> Message:
    """
    Delete an item.
    """
    item = session.get(Dataset, id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    if not current_user.is_superuser and (item.owner_id != current_user.id):
        raise HTTPException(status_code=400, detail="Not enough permissions")
    session.delete(item)
    session.commit()
    return Message(message="Item deleted successfully")
