import { Card } from "@/components/ui/card";
import type { RootState } from "@/store";
import { Calendar, Eye } from "lucide-react";
import { motion } from "motion/react";
import { useSelector } from "react-redux";

function Overview() {
  const dailySchedules = useSelector(
    (rootState: RootState) => rootState.createAvailability.timeIntervals
  );

  const convertToAMPM = (time: string) => {
    console.log(time);
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.6 }}
    >
      <Card className="py-0 gap-15 pb-10">
        {/* title and description */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-xl  border-b-1 border-gray-300 py-6 pl-5 flex flex-col gap-2">
          <h4 className="flex gap-2 items-center text-lg font-medium">
            <Eye className="size-6 text-purple-600" />
            <span>Overview</span>
          </h4>
          <p className="text-gray-500 text-md">
            Live preview of your availability
          </p>
        </div>

        {/* total availability slots */}
        <div className="px-5">
          <Card className="flex flex-col gap-2 text-center bg-gradient-to-r from-blue-100 to-blue-50 border-2 border-blue-100 shadow-md">
            {/* quantity */}
            <h4 className="font-bold text-blue-600 text-5xl">0</h4>
            <p className="text-sm text-gray-500">Total Availability Slots</p>
          </Card>
        </div>

        {/* daily schedule */}
        <div className="px-5 flex flex-col gap-2">
          <p className="font-medium text-sm text-gray-600">DAILY SCHEDULE</p>
          {/* all intervals */}
          <div className="flex flex-col gap-2">
            {dailySchedules.map((timeInterval, index) => (
              <Card className="py-3 pl-5 flex flex-row items-center gap-2 bg-blue-50 border-1 border-blue-100">
                <p className="bg-blue-500 py-1 px-2.5 rounded-md text-white font-bold text-sm">
                  {index + 1}
                </p>
                <p className="font-semibold text-md text-gray-800">
                  {convertToAMPM(timeInterval.start_time)} -{" "}
                  {convertToAMPM(timeInterval.end_time)}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="px-5 flex flex-col gap-8">
          <p className="font-medium text-sm text-gray-600">SELECT DATES</p>
          <div className="w-full flex flex-col text-center gap-2">
            <Calendar className="size-15 text-gray-300 w-full" />
            <p className="text-gray-300 text-sm italic">No dates selected</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default Overview;
