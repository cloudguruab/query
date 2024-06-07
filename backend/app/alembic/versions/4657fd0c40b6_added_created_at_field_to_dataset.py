"""Added created_at field to Dataset

Revision ID: 4657fd0c40b6
Revises: a480dc8d8ccc
Create Date: 2024-06-07 17:05:25.933106

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes


# revision identifiers, used by Alembic.
revision = '4657fd0c40b6'
down_revision = 'a480dc8d8ccc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('dataset', sa.Column('created_at', sa.DateTime(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('dataset', 'created_at')
    # ### end Alembic commands ###
