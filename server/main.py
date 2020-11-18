from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from utils import create_connection, get_all_product, get_user_basket, add_to_basket, remove_from_basket

database = "db\\DatabaseName.db"
conn = create_connection(database)
origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000"
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Basket(BaseModel):
    id_user: int

class Action(BaseModel):
    id_user: int
    id_product: int
    action: str


@app.get("/")
async def main():
    return { 'mess': 'Good health!', 'status': 200}

@app.get("/product")
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
