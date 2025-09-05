import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Redux
import type { RootState } from "../../store";

// API
import { appointmentListApi, type Appointment } from "../../api/appointmentApi";
import { availabilityListApi, type Availability } from "../../api/availability";

interface UserData {
  appointments_today: number;
  free_slots: number;
  next_appointments_quantity: number;
  next_appointments_data: Appointment[] | null;
}

function DashboardPage() {
  const [userData, setUserData] = useState<Partial<UserData>>({
    appointments_today: 0,
    free_slots: 0,
    next_appointments_quantity: 0,
    next_appointments_data: [],
  });

  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  useEffect(() => {
    const fetchAppointments = async () => {
      let todayAppointments: Appointment[] = [];
      let nextAppointment: Appointment[] = [];
      let freeSlotsAvailabilities: Availability[] = [];

      const today = new Date().toISOString().split("T")[0];
      const todayDate = new Date(today);

      const allAppointmentsResponse = await appointmentListApi(
        access_token,
        {}
      );

      if (allAppointmentsResponse.data.length !== 0) {
        todayAppointments = allAppointmentsResponse.data.filter(
          (appointment: Appointment) =>
            appointment.availabilities?.date === today
        );
        nextAppointment = allAppointmentsResponse.data.filter(
          (appointment: Appointment) => {
            if (!appointment.availabilities?.date) return false;
            return new Date(appointment.availabilities.date) > todayDate;
          }
        );
      }

      const allAvailabilitiesResponse = await availabilityListApi(
        access_token,
        {}
      );
      if (allAvailabilitiesResponse.data.length !== 0) {
        freeSlotsAvailabilities = allAvailabilitiesResponse.data.filter(
          (availability: Availability) => {
            if (
              availability.status === "uncoupled" &&
              new Date(availability.date) >= todayDate
            )
              return availability;
          }
        );
      }

      setUserData({
        appointments_today: todayAppointments.length,
        next_appointments_quantity: nextAppointment.length,
        next_appointments_data: nextAppointment,
        free_slots: freeSlotsAvailabilities.length,
      });
    };

    fetchAppointments();
  }, []);

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-15">
      <div className="w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-20">
        <section className="w-full">
          <h1 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
            Overview
          </h1>
          <p className="font-inter font-normal text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#61738A]">
            Here's a summary of your day and upcoming appointments.
          </p>
        </section>
        <section className=" xl:h-40 w-full flex flex-col xl:flex-row justify-between items-center xl:gap-0 gap-10">
          <div className="xl:h-full w-85 flex flex-col justify-center bg-[#F0F2F5] rounded-lg p-8">
            <p className="font-inter font-medium text-[0.8rem] sm:text-[0.9rem] xl:text-[1rem] text-[#121417]">
              Appointments Today
            </p>
            <h2 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2rem] text-[#121417]">
              {userData.appointments_today}
            </h2>
          </div>
          <div className="xl:h-full w-85 flex flex-col justify-center bg-[#F0F2F5] rounded-lg p-8">
            <p className="font-inter font-medium text-[0.8rem] sm:text-[0.9rem] xl:text-[1rem] text-[#121417]">
              Free Slots
            </p>
            <h2 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2rem] text-[#121417]">
              {userData.free_slots}
            </h2>
          </div>
          <div className="xl:h-full w-85 flex flex-col justify-center bg-[#F0F2F5] rounded-lg p-8">
            <p className="font-inter font-medium text-[0.8rem] sm:text-[0.9rem] xl:text-[1rem] text-[#121417]">
              Next Appointments
            </p>
            <h2 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2rem] text-[#121417]">
              {userData.next_appointments_quantity}
            </h2>
          </div>
        </section>
        <section className="w-full flex flex-col justify-between gap-10">
          <h1 className="font-inter font-bold text-[1.2rem] sm:text-[1.5rem] xl:text-[1.8rem] text-[#121417]">
            Quick Actions
          </h1>
          <div className="w-full flex flex-row justify-between">
            <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[10rem] bg-[#0D78F2] hover:opacity-90 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
              Manage availability
            </button>
            <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[10rem] bg-[#E8EDF5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
              Manage customers
            </button>
          </div>
        </section>
        <section className="w-full flex flex-col justify-between gap-10">
          <h1 className="font-inter font-bold text-[1.2rem] sm:text-[1.5rem] xl:text-[1.8rem] text-[#121417]">
            Next Appointments
          </h1>
          <div className="flex flex-col justify-between gap-5">
            {userData.next_appointments_data?.map((data) => (
              <div>
                <p className="font-inter font-medium text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Appointment with {data.customer}
                </p>
                <p className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#61738A]">
                  {data.availabilities?.start_time} -{" "}
                  {data.availabilities?.end_time}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
