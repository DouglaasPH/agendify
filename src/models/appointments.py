from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from database import Base

class Appointments(Base):
    __tablename__ = "appointments"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    week_day = Column(Integer, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    slot_duration_minutes = Column(Integer, nullable=False)
    status = Column(String, nullable=False) # confirmed, canceled or completed