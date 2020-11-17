from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel
from utils import create_connection, get_all_product, get_user_basket, add_to_basket, remove_from_basket


database = "db\\DatabaseName.db"
conn = create_connection(database)


class Basket(BaseModel):
    id_user: int


class Action(BaseModel):
    id_user: int
    id_product: int
    action: str

app = FastAPI()

@app.get("/")
async def main():
    return { 'mess': 'Good health!', 'status': 200}

@app.get("/items")
async def get_item():
    with conn:
        return get_all_product(conn)
    return {}

@app.post("/basket")
async def get_basket(bk: Basket):
    with conn:
        return get_user_basket(conn, bk.id_user)
    return {}

@app.post("/action")
async def user_action(act: Action):
    with conn:
        if act.action == "add":
            return add_to_basket(conn, act.id_user, act.id_product)
        else:
            return remove_from_basket(conn, act.id_user, act.id_product)
    return []