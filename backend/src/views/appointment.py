from datetime import date, datetime
from pydantic import BaseModel
from typing import Literal

class ToSchedule(BaseModel):
    user_id: int
    availability_id: int
    customer_id: str


class ListAppointments(BaseModel):
    user_id: int
    availability_id: int
    status: str
    customer: str
    customer_email: str
    date: date
    start_time: datetime
    end_time: datetime
    slot_duration_minutes: int