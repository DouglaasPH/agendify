import "../../../css/font.css";
import img from "../../../assets/avatars/1.png";

function InTheDashboardPages() {
  const avatar = img;

  return (
    <div className="w-90 h-11 flex flex-row justify-between items-center">
      <button className="font-inter font-medium text-sm cursor-pointer hover:opacity-75">
        Overview
      </button>
      <button className="font-inter font-medium text-sm cursor-pointer hover:opacity-75">
        Availabilities
      </button>
      <button className="font-inter font-medium text-sm cursor-pointer hover:opacity-75">
        Apointments
      </button>
      <div className="w-10 flex flex-row  justify-between items-center">
        <img
          src={avatar}
          alt="avatar"
          className="cursor-pointer hover:opacity-75"
        />
      </div>
    </div>
  );
}

export default InTheDashboardPages;
