import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { setDates } from "@/features/createAvailability/createAvailability";
import { formatDateShort } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";

function SelectDates() {
  const dispatch = useDispatch();
  const availableDatesTS = useSelector(
    (rootState: RootState) => rootState.createAvailability.dates
  ).map((date: string) => new Date(date));
  const [selectedDates, setSelectedDates] = useState<Date[]>(availableDatesTS);

  useEffect(() => {
    const availableDatesISO = selectedDates.map((date: Date) =>
      date.toISOString()
    );
    dispatch(setDates(availableDatesISO));
  }, [selectedDates]);

  const onQuickApply = (numberOfDays: number) => {
    let lastDate = new Date();

    if (selectedDates.length !== 0) {
      lastDate = new Date(selectedDates[selectedDates.length - 1]);
    }

    for (let i = 0; i < numberOfDays; i++) {
      const newDate = new Date();
      newDate.setDate(lastDate.getDate() + i);
      setSelectedDates((prevDates) => [...prevDates, newDate]);
    }
  };

  return (
    <section className="flex flex-col items-center gap-5 px-10">
      {/* Title and description */}
      <div className="w-full flex flex-col gap-1">
        <h4 className="font-semibold">Choose your Dates</h4>
        <p className="text-sm text-gray-500">
          Select which days to apply your time intervals
        </p>
      </div>

      {/* quick apply */}
      <Card className="py-4 px-5 gap-3 w-full bg-gradient-to-r from-blue-50 to-purple-50">
        <p className="font-semibold text-gray-700 text-md">Quick Apply:</p>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => onQuickApply(7)}>
            Next 7 Days
          </Button>
          <Button variant="outline" onClick={() => onQuickApply(30)}>
            Next 30 Days
          </Button>
        </div>
      </Card>

      {/* calendar and overview of selected days */}
      <div className="flex justify-between w-full">
        <Calendar
          mode="multiple"
          required={false}
          selected={selectedDates}
          onSelect={(dates) => {
            if (dates) setSelectedDates(dates);
          }}
          className="rounded-lg border w-1/3"
          disabled={{ before: new Date() }}
        />
        <Card className="w-1/2 bg-gradient-to-r from-green-50 to-green-50 border-green-200 border-2 pl-5">
          <p className="font-medium text-green-700">
            Selected: {selectedDates.length} days
          </p>
          <div className="grid grid-cols-[22%_22%_22%_22%] gap-3">
            {selectedDates.map((date, index) => {
              if (index < 27) {
                return (
                  <Card className="py-1 rounded-lg pl-2 bg-green-600">
                    <span className="text-sm font-medium text-white">
                      {formatDateShort(date)}
                    </span>
                  </Card>
                );
              } else if (index === 27) {
                return (
                  <Card className="py-1 rounded-lg pl-2 border-2 border-green-300 bg-green-50">
                    <span className="text-sm font-medium text-green-500 text-center">
                      +{selectedDates.length - 27} more
                    </span>
                  </Card>
                );
              }
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}

export default SelectDates;
