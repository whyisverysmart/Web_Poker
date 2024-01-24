from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routes import poker

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(poker.router)


@app.get("/")
def home():
    return "Hello, World_test!"