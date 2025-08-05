from pydantic import BaseModel

from datetime import date, datetime

class CreateAvailability(BaseModel):
    user_id: int
    date: date
    start_time: datetime
    end_time: datetime
    slot_duration_minutes: int
