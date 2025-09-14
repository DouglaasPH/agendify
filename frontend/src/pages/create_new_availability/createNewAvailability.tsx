//import { useState } from "react";

// Vectors
//import selectedVector from "../../assets/vectors/selected.svg";
//import unselectedVector from "../../assets/vectors/unselected.svg";

function CreateNewAvailabilityPage() {
  //const [repetition, setRepetition] = useState("doesNotRepeat");

  return (
    <div>
      <input type="date" />
    </div>
  );
}

export default CreateNewAvailabilityPage;

/*
  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-15">
      <div className="w-92 sm:w-140 md:w-170 lg:w-220 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-20">
        <section className="w-full flex justify-start items-center">
          <h1 className="font-inter font-bold text-[1.8rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
            Create New Availability
          </h1>
        </section>
        <section className="w-full flex flex-col items-start gap-5">
          <h1 className="font-inter font-bold text-[1.2rem] sm:text-[1.5rem] xl:text-[1.8rem] text-[#121417]">
            Basic Data
          </h1>

          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]">
              Date
            </p>
            <input
              type="date"
              className="select-none font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] placeholder-[#61738A] text-[#121417] focus:outline-none border-2 border-[#DBE0E5] rounded-md p-3 w-full"
            />
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col justify-between gap-1 w-[10rem] sm:w-[16rem] md:w-[20rem] lg:w-[25rem] xl:w-[32rem] ">
              <p className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]">
                Start time
              </p>
              <input
                type="time"
                className="select-none font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] placeholder-[#61738A] text-[#121417] focus:outline-none border-2 border-[#DBE0E5] rounded-md p-3 w-full"
              />
            </div>
            <div className="flex flex-col justify-between gap-1 w-[10rem] sm:w-[16rem] md:w-[20rem] lg:w-[25rem] xl:w-[32rem] ">
              <p className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]">
                End time
              </p>
              <input
                type="time"
                className="select-none font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] placeholder-[#61738A] text-[#121417] focus:outline-none border-2 border-[#DBE0E5] rounded-md p-3 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]">
              Interval duration (Slot)
            </p>
            <select
              name=""
              id=""
              className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417] focus:outline-none border-2 border-[#DBE0E5] rounded-md p-3 w-full"
            >
              <option
                value="No interval duration"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                no interval duration
              </option>
              <option
                value="5"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                5 minutes
              </option>
              <option
                value="10"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                10 minutes
              </option>
              <option
                value="15"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                15 minutes
              </option>
              <option
                value="20"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                20 minutes
              </option>
              <option
                value="25"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                25 minutes
              </option>
              <option
                value="30"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                30 minutes
              </option>
              <option
                value="35"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                35 minutes
              </option>
              <option
                value="40"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                40 minutes
              </option>
              <option
                value="45"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                45 minutes
              </option>
              <option
                value="50"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                50 minutes
              </option>
              <option
                value="55"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                55 minutes
              </option>
              <option
                value="60"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                60 minutes
              </option>
              <option
                value="65"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                65 minutes
              </option>
              <option
                value="70"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                70 minutes
              </option>
              <option
                value="75"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                75 minutes
              </option>
              <option
                value="80"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                80 minutes
              </option>
              <option
                value="85"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                85 minutes
              </option>
              <option
                value="90"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                90 minutes
              </option>
              <option
                value="95"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                95 minutes
              </option>
              <option
                value="100"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                100 minutes
              </option>
              <option
                value="105"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                105 minutes
              </option>
              <option
                value="110"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                110 minutes
              </option>
              <option
                value="115"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                115 minutes
              </option>
              <option
                value="120"
                className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]"
              >
                120 minutes
              </option>
            </select>
          </div>
        </section>
        <section className="w-full flex flex-col items-start gap-20">
          <h1 className="font-inter font-bold text-[1.2rem] sm:text-[1.5rem] xl:text-[1.8rem] text-[#121417]">
            Repetition (Optional)
          </h1>
          <div className="w-full flex flex-col gap-7">
            <div
              className="cursor-pointer select-none pl-3 flex items-center gap-5 w-full h-[4rem] border-1 border-[#DBE0E5] rounded-lg"
              onClick={() => setRepetition("doesNotRepeat")}
            >
              <img
                className="w-[1.7rem]"
                src={
                  repetition === "doesNotRepeat"
                    ? selectedVector
                    : unselectedVector
                }
              />
              <p className="font-inter font-medium text-[1.1rem] sm:text-[1.1rem] xl:text-[1.2rem] text-[#121417]">
                Does not repeat
              </p>
            </div>

            <div
              className="cursor-pointer select-none pl-3 flex items-center gap-5 w-full h-[4rem] border-1 border-[#DBE0E5] rounded-lg"
              onClick={() => setRepetition("daily")}
            >
              <img
                src={repetition === "daily" ? selectedVector : unselectedVector}
              />
              <p className="font-inter font-medium text-[1.1rem] sm:text-[1.1rem] xl:text-[1.2rem] text-[#121417]">
                Daily
              </p>
            </div>
            <div
              className="cursor-pointer select-none pl-3 flex items-center gap-5 w-full h-[4rem] border-1 border-[#DBE0E5] rounded-lg"
              onClick={() => setRepetition("weekly")}
            >
              <img
                src={
                  repetition === "weekly" ? selectedVector : unselectedVector
                }
              />
              <p className="font-inter font-medium text-[1.1rem] sm:text-[1.1rem] xl:text-[1.2rem] text-[#121417]">
                Weekly
              </p>
            </div>
            <div
              className="cursor-pointer select-none pl-3 flex items-center w-full h-[4rem] border-1 border-[#DBE0E5] rounded-lg"
              onClick={() => setRepetition("monthly")}
            >
              <img
                src={
                  repetition === "monthly" ? selectedVector : unselectedVector
                }
              />
              <p className="font-inter font-medium text-[1rem] sm:text-[1rem] xl:text-[1.2rem] text-[#121417]">
                Monthly
              </p>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-start gap-20">
          <h1 className="font-inter font-bold text-[1.2rem] sm:text-[1.5rem] xl:text-[1.8rem] text-[#121417]">
            Exceptions
          </h1>
          <div>
            <p className="font-inter font-medium text-[0.9rem] sm:text-[0.9rem] xl:text-[0.9rem] text-[#121417]">
              Block Times/Dates
            </p>
            <input type="time" placeholder="60 minutes" />
          </div>
        </section>
        <section className="w-full flex flex-row justify-between xl:justify-end xl:gap-10 gap-0">
          <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[7rem] bg-[#E8EDF5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.9rem] sm:text-[0.9rem] xl:text-[0.8rem] cursor-pointer">
            Cancel
          </button>
          <button className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[7rem] bg-[#0D78F2] hover:opacity-90 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.9rem] sm:text-[0.9rem] xl:text-[0.8rem] cursor-pointer">
            Save
          </button>
        </section>
      </div>
    </div>
  );
*/
