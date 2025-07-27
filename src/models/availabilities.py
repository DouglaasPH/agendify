from sqlalchemy import Column, Integer, DateTime, ForeignKey
from database import Base

class Availabilities(Base):
    __tablename__ = "availabilities"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    week_day = Column(Integer, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)
    slot_duration_minutes = Column(Integer, nullable=False)