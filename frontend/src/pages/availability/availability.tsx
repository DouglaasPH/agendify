// React
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Redux
import type { RootState } from "../../store";

// utils
import { formatDate, formatHours } from "@/lib/utils";

// motion
import { motion } from "motion/react";

// API
import { availabilityListApi } from "@/api/availability";

// Components
import UserSectionComponent from "@/components/user_section/UserSectionComponent";
import Cards from "./components/cards";
import Search from "./components/search";
import AvailabilitySchedule from "./components/availabilitySchedule";
import NoAvailabilitiesFound from "./components/noAvailabilitiesFound";
import PaginationComponent from "./components/pagination";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import TitleAndDescriptionComponent from "./components/titleAndDescriptionComponent";
import { Card } from "@/components/ui/card";

export interface AvailabilitiesData {
  id: number;
  firstColumn: { weekday: string; dateFormatted: string };
  secondColumn: { start_time: string; end_time: string };
  thirdColumn: { slot_duration: number };
  fourthColumn: { status: string };
  fifthColumn: { customer: string | undefined };
}

export type Filter = [string, string, [string, string]];

function AvailabilityPage() {
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  const [filters, setFilters] = useState<Filter>([
    "All Status",
    "All Dates",
    ["Date", "down"],
  ]);
  const [amountOfSections, setAmountOfSections] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [availabilitiesData, setAvailabilitiesData] = useState<
    AvailabilitiesData[]
  >([]);
  const [tableDataToView, setTableDataToView] = useState<AvailabilitiesData[]>(
    []
  );

  const maxVisible = 3;
  const start_pagination_item = Math.max(
    0,
    Math.min(currentPage - 2, amountOfSections - maxVisible)
  );
  const end_pagination_item = start_pagination_item + maxVisible;

  const handleSetFilters = (
    index: number,
    typeOrder: string,
    direction: string
  ) => {
    let newFilters: Filter = ["", "", ["", ""]];
    if (index === 0) {
      newFilters = [typeOrder, filters[1], filters[2]];
    } else if (index === 1) {
      newFilters = [filters[0], typeOrder, filters[2]];
    } else if (index === 2) {
      newFilters = [filters[0], filters[1], [typeOrder, direction]];
    } else {
      newFilters = filters;
    }
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters(["All Status", "All Dates", ["Date", "down"]]);
    setTableDataToView(availabilitiesData);
  };

  const handleSortRows = (
    selectionIndex: number,
    typeOrder: string,
    direction: string
  ) => {
    handleSetFilters(selectionIndex, typeOrder, direction);

    const precedence: Record<string, number> = {
      Available: 1,
      Occupied: 2,
      Past: 3,
    };

    let dataToView: AvailabilitiesData[] = [];

    if (selectionIndex === 0) {
      switch (typeOrder) {
        case "All Status":
          dataToView = availabilitiesData;
          break;
        case "Available":
          dataToView = tableDataToView.filter(
            (data) => data.fourthColumn.status === "Available"
          );
          break;
        case "Occupied":
          dataToView = tableDataToView.filter(
            (data) => data.fourthColumn.status === "Occupied"
          );
          break;
        case "Past":
          dataToView = tableDataToView.filter(
            (data) => data.fourthColumn.status === "Past"
          );
          break;
      }
    } else if (selectionIndex === 1) {
      const now = new Date();
      const startOfWeek = new Date(now);
      const endOfWeek = new Date(now);
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      switch (typeOrder) {
        case "All Dates":
          dataToView = availabilitiesData;
          break;
        case "This Week":
          startOfWeek.setDate(now.getDate() - now.getDay());
          endOfWeek.setDate(startOfWeek.getDate() + 6);

          dataToView = tableDataToView.filter((availabilityData) => {
            const date = new Date(availabilityData.firstColumn.dateFormatted);
            return date >= startOfWeek && date <= endOfWeek;
          });
          break;
        case "This Month":
          dataToView = tableDataToView.filter((availabilityData) => {
            const date = new Date(availabilityData.firstColumn.dateFormatted);
            return (
              date.getMonth() === currentMonth &&
              date.getFullYear() === currentYear
            );
          });
          break;
        case "Past":
          dataToView = tableDataToView.filter((availabilityData) => {
            const date = new Date(availabilityData.firstColumn.dateFormatted);

            return (
              date.getFullYear() < currentYear ||
              (date.getFullYear() === currentYear &&
                date.getMonth() < currentMonth)
            );
          });
          break;
      }
    } else if (selectionIndex === 2) {
      switch (typeOrder) {
        case "Date":
          if (direction === "up") {
            dataToView = tableDataToView.sort(
              (a, b) =>
                new Date(a.firstColumn.dateFormatted).getTime() -
                new Date(b.firstColumn.dateFormatted).getTime()
            );
          } else {
            dataToView = tableDataToView.sort(
              (a, b) =>
                new Date(b.firstColumn.dateFormatted).getTime() -
                new Date(a.firstColumn.dateFormatted).getTime()
            );
          }
          break;
        case "Time":
          if (direction === "up") {
            dataToView = tableDataToView.sort(
              (a, b) =>
                new Date(a.secondColumn.start_time).getTime() -
                new Date(b.secondColumn.start_time).getTime()
            );
          } else {
            dataToView = tableDataToView.sort(
              (a, b) =>
                new Date(b.secondColumn.start_time).getTime() -
                new Date(a.secondColumn.start_time).getTime()
            );
          }
          break;
        case "Duration":
          if (direction === "up") {
            dataToView = tableDataToView.sort(
              (a, b) =>
                a.thirdColumn.slot_duration - b.thirdColumn.slot_duration
            );
          } else {
            dataToView = tableDataToView.sort(
              (a, b) =>
                b.thirdColumn.slot_duration - a.thirdColumn.slot_duration
            );
          }
          break;
        case "Status":
          if (direction === "up") {
            dataToView = tableDataToView.sort(
              (a, b) =>
                precedence[a.fourthColumn.status] -
                precedence[b.fourthColumn.status]
            );
          } else {
            dataToView = tableDataToView.sort(
              (a, b) =>
                precedence[b.fourthColumn.status] -
                precedence[a.fourthColumn.status]
            );
          }
          break;
      }
    }

    setTableDataToView(dataToView);
  };

  useEffect(() => {
    const fetchAvailabilities = async () => {
      const allAvailabilities = await availabilityListApi(access_token, {});

      allAvailabilities.data.sort(
        (a, b) =>
          new Date(b.start_time).getTime() - new Date(a.start_time).getTime()
      );

      const data: AvailabilitiesData[] = [];

      allAvailabilities.data.forEach((availability) => {
        const transformDate = formatDate(availability.start_time);
        const transformStartTime = formatHours(availability.start_time);
        const transformEndTime = formatHours(availability.end_time);
        const customer = availability.appointments?.customer;

        data.push({
          id: availability.id,
          firstColumn: transformDate,
          secondColumn: {
            start_time: transformStartTime,
            end_time: transformEndTime,
          },
          thirdColumn: {
            slot_duration: availability.slot_duration_minutes,
          },
          fourthColumn: {
            status:
              availability.status.charAt(0).toUpperCase() +
              availability.status.slice(1),
          },
          fifthColumn: {
            customer: customer,
          },
        });
      });

      setAvailabilitiesData(data);
      setTableDataToView(data);
    };
    fetchAvailabilities();
  }, [access_token]);

  useEffect(() => {
    setAmountOfSections(Math.ceil(tableDataToView.length / 6));
  }, [tableDataToView]);

  return (
    <main className="flex flex-col gap-10 pb-50">
      {/* header section */}
      {/* Title, description and button of add new availability */}
      <TitleAndDescriptionComponent />

      {/* main section */}
      <section className="flex flex-col justify-center items-center gap-10 px-10 lg:px-20 w-full">
        {/* Cards */}
        <Cards availabilitiesData={availabilitiesData} />

        {/* search section */}
        <Search
          filters={filters}
          handleSortRows={handleSortRows}
          availabilitiesData={availabilitiesData}
          tableDataToView={tableDataToView}
          setTableDataToView={setTableDataToView}
        />

        {/* Availability Schedule OR No Availabilities Found */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.4 }}
          className="w-full"
        >
          <Card className="w-full">
            {amountOfSections > 0 ? (
              <AvailabilitySchedule
                availabilitiesData={availabilitiesData}
                tableDataToView={tableDataToView}
                setTableDataToView={setTableDataToView}
                setAvailabilitiesData={setAvailabilitiesData}
                currentPage={currentPage}
                amountOfSections={amountOfSections}
                filters={filters}
                handleSortRows={handleSortRows}
                start_pagination_item={start_pagination_item}
                end_pagination_item={end_pagination_item}
                access_token={access_token}
              />
            ) : (
              <NoAvailabilitiesFound handleClearFilters={handleClearFilters} />
            )}
          </Card>
        </motion.div>

        {/* Pagination Section */}
        {amountOfSections > 0 ? (
          <PaginationComponent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            amountOfSections={amountOfSections}
            start_pagination_item={start_pagination_item}
            end_pagination_item={end_pagination_item}
          />
        ) : null}
      </section>
    </main>
  );
}

export default AvailabilityPage;
