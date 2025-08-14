function DashboardPage() {
  const user_data = {
    appointments_today: 5,
    free_slots: 3,
    next_appointments_quantity: 2,
    next_appointments_data: [
      {
        customer: "Sofia",
        availability: {
          start_time: "10:00 AM",
          end_time: "11:00 AM",
        },
      },
      {
        customer: "Lucas",
        availability: {
          start_time: "11:30 AM",
          end_time: "12:30 AM",
        },
      },
      {
        customer: "Isabela",
        availability: {
          start_time: "02:00 PM",
          end_time: "03:00 PM",
        },
      },
    ],
  };

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
              {user_data.appointments_today}
            </h2>
          </div>
          <div className="xl:h-full w-85 flex flex-col justify-center bg-[#F0F2F5] rounded-lg p-8">
            <p className="font-inter font-medium text-[0.8rem] sm:text-[0.9rem] xl:text-[1rem] text-[#121417]">
              Free Slots
            </p>
            <h2 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2rem] text-[#121417]">
              {user_data.free_slots}
            </h2>
          </div>
          <div className="xl:h-full w-85 flex flex-col justify-center bg-[#F0F2F5] rounded-lg p-8">
            <p className="font-inter font-medium text-[0.8rem] sm:text-[0.9rem] xl:text-[1rem] text-[#121417]">
              Next Appointments
            </p>
            <h2 className="font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2rem] text-[#121417]">
              {user_data.next_appointments_quantity}
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
            {user_data.next_appointments_data.map((data) => (
              <div>
                <p className="font-inter font-medium text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Appointment with {data.customer}
                </p>
                <p className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#61738A]">
                  {data.availability.start_time} - {data.availability.end_time}
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
