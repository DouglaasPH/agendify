from pydantic import BaseModel

from datetime import date, datetime

class CreateAvailability(BaseModel):
    date: date
    start_time: datetime
    end_time: datetime
    slot_duration_minutes: int
