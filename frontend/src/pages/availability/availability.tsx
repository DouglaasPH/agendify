import { useState } from "react";

type ComponentType = "all" | "free" | "busy";

function AvailabilityPage() {
  const availability = [
    {
      date: "15 de Julho, 2024",
      start_time: "10:00",
      end_time: "11:00",
      status: "free",
    },
    {
      date: "15 de Dezembro, 2024",
      start_time: "10:00",
      end_time: "11:00",
      status: "busy",
    },
    {
      date: "15 de Março, 2024",
      start_time: "10:00",
      end_time: "11:00",
      status: "free",
    },
  ];

  const [currentComponent, SetCurrentComponent] = useState({
    all: true,
    free: false,
    busy: false,
  });

  const handleComponent = (componentClicked: ComponentType) => {
    const newState: {
      all: boolean;
      free: boolean;
      busy: boolean;
    } = {
      all: false,
      free: false,
      busy: false,
    };
    newState[componentClicked] = true;
    SetCurrentComponent(newState);
  };

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-15">
      <div className="w-120 sm:w-150 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-10">
        <section className="w-full flex justify-between items-center">
          <h1 className="font-inter font-bold text-[1.8rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
            Overview
          </h1>
          <button className="p-2 pl-1 xl:pl-2 pr-1 xl:pr-2 w-[7rem] sm:w-[8rem] xl:w-[9rem] bg-[#E8EDF5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.7rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer">
            New availability
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
            onClick={() => handleComponent("free")}
            style={{
              color: currentComponent.free ? "#121417" : "#61738A",
              borderBottom: currentComponent.free
                ? "3px solid #121417"
                : "3px solid #61738A",
            }}
          >
            Free
          </p>
          <p
            className="h-full text-center font-inter font-bold text-[0.8rem] sm:text-[0.8rem] xl:text-[0.9rem] transition duration-300 ease-in-out cursor-pointer hover:opacity-80"
            onClick={() => handleComponent("busy")}
            style={{
              color: currentComponent.busy ? "#121417" : "#61738A",
              borderBottom: currentComponent.busy
                ? "3px solid #121417"
                : "3px solid #61738A",
            }}
          >
            Busy
          </p>
        </section>
        <section className="w-full rounded-lg border border-[#E5E8EB] flex flex-col">
          <div className="w-full flex flex-row items-center justify-between p-3 pl-5 pr-20">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417]">
              Date
            </p>
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417]">
              Time
            </p>
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417]">
              Status
            </p>
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#61738A]">
              Actions
            </p>
          </div>
          <div>
            {availability
              .filter((item) => {
                if (currentComponent.all) return true;
                if (currentComponent.free) return item.status === "free";
                if (currentComponent.busy) return item.status === "busy";
                return false;
              })
              .map((item, index) => (
                <div
                  key={index}
                  className="mb-4 p-2 pl-5 pr-20 border-t border-[#E5E8EB] flex flex-row justify-between"
                >
                  <p className="font-inter font-regular text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#61738A]">
                    {item.date}
                  </p>
                  <p className="font-inter font-regular text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#61738A]">
                    {item.start_time} - {item.end_time}
                  </p>
                  <p className="capitalize text-center font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[1rem] text-[#121417] p-2 pl-1 xl:pl-2 pr-1 xl:pr-2 w-[7rem] sm:w-[8rem] xl:w-[9rem] bg-[#E8EDF5] rounded-lg">
                    {item.status}
                  </p>
                  <div className="flex items-center gap-1">
                    <button className="font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.95rem] text-[#61738A] cursor-pointer hover:opacity-80">
                      Edit
                    </button>
                    <p className="font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.95rem] text-[#61738A]">
                      |
                    </p>
                    <button className="font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.95rem] text-[#61738A] cursor-pointer hover:opacity-80">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AvailabilityPage;
