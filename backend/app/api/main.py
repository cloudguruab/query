from fastapi import APIRouter

from app.api.routes import items, login, users, utils

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(users.router, prefix="/platform/users", tags=["users"])
api_router.include_router(utils.router, prefix="/platform/utils", tags=["utils"])
api_router.include_router(items.router, prefix="/platform/items", tags=["items"])
