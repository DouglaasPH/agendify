from datetime import date, datetime
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query

from sqlalchemy.orm import Session

from database import get_db
from models.users import Users
from models.availabilities import Availabilities
from services.auth import get_current_user
from views.availabilities import CreateAvailability


router = APIRouter(prefix="/availability")


@router.post("/")
def createAvailability(data: CreateAvailability, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    if data.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="invalid user_id. The user has a different id.")

    new_availability = Availabilities(
        user_id=data.user_id,
        date=data.date,
        start_time=data.start_time,
        end_time=data.end_time,
        slot_duration_minutes=data.slot_duration_minutes,
    )

    db.add(new_availability)
    db.commit()
    db.refresh(new_availability)
    
    return { "msg": "Availability created successfully" }


@router.get("/")
def listAvailability(
    availability_id: Optional[int] = Query(None),
    date: Optional[date] = Query(None),
    start_time: Optional[datetime] = Query(None),
    end_time: Optional[datetime] = Query(None),
    slot_duration_minutes: Optional[int] = Query(None),
    status: Optional[bool] = Query(None),
    current_user: Users = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    query = db.query(Availabilities).filter(Availabilities.user_id == current_user.id)
    
    
    if availability_id:
        query = query.filter(Availabilities.id == availability_id)
    if date:
        query = query.filter(Availabilities.date == date)
    if start_time:
        query = query.filter(Availabilities.start_time == start_time)
    if end_time:
        query = query.filter(Availabilities.end_time == end_time)
    if slot_duration_minutes:
        query = query.filter(Availabilities.slot_duration_minutes == slot_duration_minutes)
    if status:
        query = query.filter(Availabilities.status == status)
        
    return query.all()


@router.get("/{id}")
def getAAvailability(id: int, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    query = db.query(Availabilities).filter(
        (Availabilities.user_id == current_user.id) & (Availabilities.id == id)
    )
    
    if not query.first():
        raise HTTPException(status_code=404, detail="Availability not found.")
    
    return query.first()


@router.delete("/{id}")
def deleteAvailability(id: int, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    query = db.query(Availabilities).filter_by(id=id).first()
    
    if query.user_id != current_user.id:
        raise HTTPException(status_code=403, detail=f"You do not have permission to access this availability.")
    
    
    db.delete(query)
    db.commit()
    
    return { "msg": "Deleted succesfully."}