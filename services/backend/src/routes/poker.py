from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse

from pydantic import BaseModel

router = APIRouter()


class Item(BaseModel):
    keyword: str
    data_type: str
    method: str


@router.post("/search/", response_class=JSONResponse)
async def test():
    return 'TODO'
