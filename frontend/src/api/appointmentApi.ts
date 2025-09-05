import api from "./api";
import { ROUTES } from "./routes";

interface Succesfully {
  msg: string;
}

interface AppointmentListData {
  availabilities_id?: number;
  status?: string;
  customer?: string;
  customer_email?: string;
  date?: string;
  start_time?: string;
  end_time?: string;
  slot_duration_minutes?: number;
}

interface Availability {
  date?: string;
  end_time?: string;
  status?: string;
  id?: number;
  start_time?: string;
  user_id?: number;
  slot_duration_minutes?: number;
}

export interface Appointment {
  user_id?: number;
  availabilities_id?: number;
  customer?: string;
  id?: number;
  status?: string;
  customer_email?: string;
  availabilities: Availability;
}

export interface AppointmentListResponse {
  data: Appointment[];
}

export const appointmentListApi = async (
  access_token: string | null,
  appointment_data?: Partial<AppointmentListData>
): Promise<AppointmentListResponse> => {
  return await api.get(ROUTES.appointment.list, {
    params: { ...appointment_data },
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const appointmentGetApi = async (
  appointment_id: number
): Promise<Appointment[]> => {
  return await api.get(ROUTES.appointment.get(appointment_id), {
    withCredentials: true,
  });
};

interface appointmentCreateData {
  user_id: number;
  availability_id: number;
  customer: string;
  customer_email: string;
}

export const appointmentCreateApi = async (
  access_token: string | null,
  appointment_data: appointmentCreateData
): Promise<Succesfully> => {
  return await api.post(ROUTES.appointment.create, appointment_data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};

export const appointmentCancelApi = async (
  access_token: string | null,
  appointment_id: number
): Promise<Succesfully> => {
  return await api.get(ROUTES.appointment.cancel(appointment_id), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    withCredentials: true,
  });
};
