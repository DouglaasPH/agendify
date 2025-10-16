import { Button } from "@/components/ui/button";
import Cards from "./components/Cards";
import TimeSlotsAndSelectDateCard from "./components/TimeSlotsAndSelectDateCard";
import TitleAndDescriptionComponent from "./components/TitleAndDescriptionComponent";
import { Save } from "lucide-react";
import Overview from "./components/Overview";

function CreateNewAvailabilityPage() {
  return (
    <main className="flex flex-col gap-10 pb-50">
      <TitleAndDescriptionComponent />

      {/* main section */}
      <section className="flex flex-col justify-center items-center gap-10 px-5 lg:px-20 w-full">
        <Cards />

        {/* main div */}
        <div className="w-full grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-[64%_34%] justify-between">
          <div className="grid grid-cols-1 gap-10">
            <TimeSlotsAndSelectDateCard />
            <div className="w-full grid grid-cols-[77%_20%] justify-between">
              <Button className="bg-green-600/40 hover:bg-green-600/40 py-6 cursor-pointer">
                <Save />
                <span>Create Availability</span>
              </Button>
              <Button variant={"outline"} className="py-6 cursor-pointer">
                Cancel
              </Button>
            </div>
          </div>
          <Overview />
        </div>
      </section>
    </main>
  );
}

export default CreateNewAvailabilityPage;
