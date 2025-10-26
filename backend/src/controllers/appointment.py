from datetime import date, datetime
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query

from sqlalchemy.orm import Session, joinedload

from database import get_db
from models.users import Users
from models.availabilities import Availabilities
from services.auth import get_current_user
from views.appointment import ToSchedule, ListAppointments
from models.appointments import Appointments


router = APIRouter(prefix="/appointment")


# TODO: Choice of services for customers
@router.post("/")
def toSchedule(data: ToSchedule, db: Session = Depends(get_db)):
    current_availability = db.query(Availabilities).filter(Availabilities.id == data.availability_id).first()
    
    if not current_availability:
        raise HTTPException(status_code=404, detail="Availability not found.")

    current_availability.status = "occupied"
    
    new_appointment = Appointments(
        user_id=data.user_id,
        availability_id=data.availability_id,
        customer_id=data.customer_id,
    )
    
    db.add(new_appointment)
    db.commit()
    db.refresh(new_appointment)
    
    return { "msg": "Appointment created successfully" }


@router.get("/")
def listAppointments(
    availabilities_id: Optional[int] = Query(None),
    status: Optional[str] = Query(None),
    customer: Optional[str] = Query(None),
    customer_email: Optional[str] = Query(None),
    date: Optional[date] = Query(None),
    start_time: Optional[datetime] = Query(None),
    end_time: Optional[datetime] = Query(None),
    slot_duration_minutes: Optional[datetime] = Query(None),
    current_user: Users = Depends(get_current_user), 
    db: Session = Depends(get_db)
):
    query = db.query(Appointments).filter(Appointments.user_id == current_user.id).join(Appointments.availabilities).options(joinedload(Appointments.availabilities))
    query = query.filter(Appointments.user_id == current_user.id)
    
    if availabilities_id:
        query = query.filter(Appointments.availabilities_id == availabilities_id)
    if status:
        query = query.filter(Appointments.status == status)
    if customer:
        query = query.filter(Appointments.customers.name == customer)
    if customer_email:
        query = query.filter(Appointments.customers.email == customer_email)
    if date:
        query = query.filter(Availabilities.date == date)
    if start_time:
        query = query.filter(Availabilities.start_time <= start_time)
    if end_time:
        query = query.filter(Availabilities.end_time >= end_time)
    if slot_duration_minutes:
        query = query.filter(Availabilities.slot_duration_minutes == slot_duration_minutes)

    
    return query.all()


@router.get("/{id}")
def getAApointment(id: int, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    query = db.query(Appointments).filter(
        (Appointments.user_id == current_user.id) & (Appointments.id == id)
    ).options(joinedload(Appointments.availabilities))
    
    if not query.first():
        raise HTTPException(status_code=404, detail="Apointment not found.")
    
    return query.first()


@router.delete("/{appointment_id}")
def cancelAppointment(appointment_id: int, current_user: Users = Depends(get_current_user), db: Session = Depends(get_db)):
    current_appointment = db.query(Appointments).filter_by(id=appointment_id, user_id= current_user.id).first()
    
    if current_appointment.user_id != current_user.id:
        raise HTTPException(status_code=404, detail="Appointment not found.")
    

    current_availability = db.query(Availabilities).filter_by(id=current_appointment.availability_id).first()
    
    if current_availability.status == "occupied":
        current_availability.status = "available"
    db.delete(current_appointment)
    db.commit()
    db.refresh(current_availability)
    
    return { "msg": "Appointment successfully canceled." }



# TODO: Implementar confirmação de identidade e agendamento por e-mail para usuários não autenticados
# - Coletar e-mail do cliente no início do processo de agendamento
# - Enviar um código de verificação para o e-mail informado
# - Criar endpoint para o cliente informar o código recebido e validar
# - Confirmar agendamentos apenas após verificação do e-mail
# - Armazenar verificações em cache ou tabela temporária com expiração (ex: 10 min)
# - Impedir múltiplos códigos enviados em pouco tempo (limite por hora)