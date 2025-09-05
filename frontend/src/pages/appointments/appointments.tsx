import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { appointmentListApi, type Appointment } from "../../api/appointmentApi";

type ComponentType = "all" | "confirmed" | "pending" | "canceled";

function AppointmentsPage() {
  const [currentComponent, SetCurrentComponent] = useState({
    all: true,
    confirmed: false,
    pending: false,
    canceled: false,
  });

  const handleComponent = (componentClicked: ComponentType) => {
    const newState: {
      all: boolean;
      confirmed: boolean;
      pending: boolean;
      canceled: boolean;
    } = {
      all: false,
      confirmed: false,
      pending: false,
      canceled: false,
    };
    newState[componentClicked] = true;
    SetCurrentComponent(newState);
  };

  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const allAppointments = await appointmentListApi(access_token, {});
      setAppointments(allAppointments.data);
    };

    fetchAppointments();
  }, []);

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-15">
      <div className="w-120 sm:w-150 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-10">
        <section className="w-full flex justify-between items-center">
          <h1 className="font-inter font-bold text-[1.8rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
            Appointment
          </h1>
          <button className="p-2 pl-1 xl:pl-2 pr-1 xl:pr-2 w-[7rem] sm:w-[8rem] xl:w-[9rem] bg-[#E8EDF5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.7rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
            New appointment
          </button>
        </section>
        <section className="h-12 w-full flex items-center gap-9 border-b-1 border-b-[#E5E8EB]">
          <p
            className="h-full text-center font-inter font-bold text-[0.8rem] sm:text-[0.8rem] xl:text-[0.9rem] transition duration-300 ease-in-out cursor-pointer hover:opacity-80"
            onClick={() => handleComponent("all")}
            style={{
              color: currentComponent.all ? "#121417" : "#61738A",
              borderBottom: currentComponent.all
                ? "3px solid #121417"
                : "3px solid #61738A",
            }}
          >
            All
          </p>
          <p
            className="h-full text-center font-inter font-bold text-[0.8rem] sm:text-[0.8rem] xl:text-[0.9rem] transition duration-300 ease-in-out cursor-pointer hover:opacity-80"
            onClick={() => handleComponent("confirmed")}
            style={{
              color: currentComponent.confirmed ? "#121417" : "#61738A",
              borderBottom: currentComponent.confirmed
                ? "3px solid #121417"
                : "3px solid #61738A",
            }}
          >
            Confirmed
          </p>
          <p
            className="h-full text-center font-inter font-bold text-[0.8rem] sm:text-[0.8rem] xl:text-[0.9rem] transition duration-300 ease-in-out cursor-pointer hover:opacity-80"
            onClick={() => handleComponent("pending")}
            style={{
              color: currentComponent.pending ? "#121417" : "#61738A",
              borderBottom: currentComponent.pending
                ? "3px solid #121417"
                : "3px solid #61738A",
            }}
          >
            Pending
          </p>
          <p
            className="h-full text-center font-inter font-bold text-[0.8rem] sm:text-[0.8rem] xl:text-[0.9rem] transition duration-300 ease-in-out cursor-pointer hover:opacity-80"
            onClick={() => handleComponent("canceled")}
            style={{
              color: currentComponent.canceled ? "#121417" : "#61738A",
              borderBottom: currentComponent.canceled
                ? "3px solid #121417"
                : "3px solid #61738A",
            }}
          >
            Canceled
          </p>
        </section>
        <section className="w-full rounded-lg border border-[#E5E8EB] flex flex-col">
          <div className="w-full flex flex-row items-center justify-between p-3 pl-5 gap-10 border-b border-[#E5E8EB]">
            <p className="w-1/5 font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417]">
              Customer
            </p>
            <p className="w-1/5 font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417]">
              Date
            </p>
            <p className="w-1/5 font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417]">
              Time
            </p>
            <p className="w-1/5 font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417]">
              Status
            </p>
            <p className="w-1/5 font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#61738A]">
              Actions
            </p>
          </div>
          <div>
            {appointments.length !== 0 ? (
              appointments
                .filter((item) => {
                  if (currentComponent.all) return true;
                  if (currentComponent.confirmed)
                    return item.status === "confirmed";
                  if (currentComponent.pending)
                    return item.status === "pending";
                  if (currentComponent.canceled)
                    return item.status === "canceled";
                  return false;
                })
                .map((item, index) => (
                  <div
                    key={index}
                    className="mb-4 p-2 pl-5 pr-10 flex flex-row justify-between"
                  >
                    <p className="w-1/5 font-inter font-regular text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417]">
                      {item.customer}
                    </p>
                    <p className="w-1/5 font-inter font-regular text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#61738A]">
                      {item.availabilities.date}
                    </p>
                    <p className="w-1/5 font-inter font-regular text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#61738A]">
                      {item.availabilities.start_time} -{" "}
                      {item.availabilities.end_time}
                    </p>
                    <p className="w-1/5 capitalize text-center font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417] p-2 pl-1 xl:pl-2 pr-1 xl:pr-2 bg-[#E8EDF5] rounded-lg">
                      {item.status}
                    </p>
                    <div className="w-1/5 flex items-center gap-1">
                      <button className="font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.95rem] text-[#61738A] cursor-pointer hover:opacity-80">
                        Mark as completed
                      </button>
                      <p className="font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.95rem] text-[#61738A]">
                        |
                      </p>
                      <button className="font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.95rem] text-[#61738A] cursor-pointer hover:opacity-80">
                        Cancel
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <div className="h-40 w-full flex justify-center items-center">
                <p className="font-inter font-bold text-[0.8rem] sm:text-[0.9rem] xl:text-[1.2rem] text-[#61738A] cursor-pointer hover:opacity-80">
                  No Appointment.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AppointmentsPage;
