from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse

#from pydantic import BaseModel

router = APIRouter()





@router.post("/game/", response_class=JSONResponse)
async def test():
    return 'TODO'
