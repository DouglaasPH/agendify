import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Redux
import type { RootState } from "../../../store";

function LoggedInNavBar() {
  const profileAvatarId = useSelector(
    (state: RootState) => state.userData.profileAvatarId
  );
  const path_avatar = `../../../public/avatars/${profileAvatarId}.png`;

  const navigate = useNavigate();

  const overviewClicked = () => navigate("/user/dashboard");

  const availabilitiesClicked = () => navigate("/user/availability");

  const appointmentsClicked = () => navigate("/user/appointment");

  const userProfileClicked = () => navigate("/user/profile");

  return (
    <div className="w-90 h-11 flex flex-row justify-between items-center">
      <button
        className="font-inter font-medium text-sm cursor-pointer hover:opacity-75"
        onClick={overviewClicked}
      >
        Overview
      </button>
      <button
        className="font-inter font-medium text-sm cursor-pointer hover:opacity-75"
        onClick={availabilitiesClicked}
      >
        Availabilities
      </button>
      <button
        className="font-inter font-medium text-sm cursor-pointer hover:opacity-75"
        onClick={appointmentsClicked}
      >
        Appointments
      </button>
      <div className="w-10 flex flex-row  justify-between items-center">
        <img
          src={path_avatar}
          alt="avatar"
          className="cursor-pointer hover:opacity-75"
          onClick={userProfileClicked}
        />
      </div>
    </div>
  );
}

export default LoggedInNavBar;
