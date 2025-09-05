import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import type { RootState } from "../../store";

// vectors
import emailVector from "../../assets/vectors/email.svg";
import phoneVector from "../../assets/vectors/phone.svg";
import professionVector from "../../assets/vectors/profession.svg";
import blockedVector from "../../assets/vectors/blocked.svg";
import deleteVector from "../../assets/vectors/delete.svg";
import logoutVector from "../../assets/vectors/logout.svg";
import chainVector from "../../assets/vectors/chain.svg";
import { deleteApi, logoutApi } from "../../api/authApi";
import { resetUserData } from "../../features/auth/userDataSlice";
import { logout } from "../../features/auth/authSlice";

function UserProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data_user = useSelector((state: RootState) => state.userData);
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );
  const user_avatar_path = `../../../public/avatars/${data_user.profileAvatarId}.png`;

  const handleDeleteAccount = async () => {
    try {
      await deleteApi(access_token);
      dispatch(resetUserData());
      dispatch(logout());
    } catch (error) {
      return error;
    }
  };

  const handleLogout = async () => {
    try {
      await logoutApi(access_token);
      dispatch(resetUserData());
      dispatch(logout());
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-10">
        <h1 className=" w-full font-inter font-bold text-[1.5rem] sm:text-[1.65rem] xl:text-[1.8rem] text-[#121417]">
          Profile
        </h1>
        <section className="flex flex-col items-center gap-3">
          <img
            src={user_avatar_path}
            alt="user avatar"
            className="w-30 sm:w-35 xl:w-45"
          />
          <div className="flex flex-col justify-between items-center">
            <h4 className="font-inter font-bold text-[1.1rem] sm:text-[1.2rem] xl:text-[1.3rem] text-[#121417]">
              {data_user.name}
            </h4>
            <p className="font-inter font-normal text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#61738A]">
              {data_user.profession}
            </p>
          </div>
        </section>
        <section className="w-full xl:w-1/2 flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <h5 className="w-full font-inter font-bold text-[1rem] xl:text-[1.2rem] text-[#121417]">
              Details
            </h5>
            <div className="flex flex-col gap-2 items-center">
              <div className="w-53 flex flex-row gap-2 items-center">
                <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                  <img src={emailVector} alt="email vector" />
                </div>
                <div className="flex flex-col justify-between items-start">
                  <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                    E-mail
                  </h6>
                  <p className="font-inter font-normal text-[0.5rem] sm:text-[0.6rem] xl:text-[0.9rem] text-[#61738A]">
                    {data_user.email}
                  </p>
                </div>
              </div>
              <div className="w-53 flex flex-row gap-2 items-center">
                <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                  <img src={phoneVector} alt="phone number vector" />
                </div>
                <div className="flex flex-col justify-between items-start">
                  <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                    Phone Number
                  </h6>
                  <p className="font-inter font-normal text-[0.5rem] sm:text-[0.6rem] xl:text-[0.9rem] text-[#61738A]">
                    {data_user.phoneNumber}
                  </p>
                </div>
              </div>
              <div className="w-53 flex flex-row gap-2 items-center">
                <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                  <img src={professionVector} alt="profession vector" />
                </div>
                <div className="flex flex-col justify-between items-start">
                  <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                    Profession
                  </h6>
                  <p className="font-inter font-normal text-[0.5rem] sm:text-[0.6rem] xl:text-[0.9rem] text-[#61738A]">
                    {data_user.profession}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="w-full font-inter font-bold text-[1rem] xl:text-[1.2rem] text-[#121417]">
              Security
            </h5>
            <div className="flex flex-col gap-2 items-center">
              <div
                className="w-53 flex flex-row gap-2 items-center cursor-pointer hover:opacity-60"
                onClick={() => navigate("edit/user-data")}
              >
                <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                  <img src={blockedVector} alt="blocked vector" />
                </div>
                <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Edit Data
                </h6>
              </div>
              <div
                className="w-53 flex flex-row gap-2 items-center cursor-pointer hover:opacity-60"
                onClick={() => navigate("edit/email")}
              >
                <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                  <img src={emailVector} alt="email vector" />
                </div>
                <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Change E-mail
                </h6>
              </div>
              <div
                className="w-53 flex flex-row gap-2 items-center cursor-pointer hover:opacity-60"
                onClick={() => navigate("edit/password")}
              >
                <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                  <img src={chainVector} alt="chain vector" />
                </div>
                <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Change Password
                </h6>
              </div>
              <div
                className="w-53 flex flex-row gap-2 items-center cursor-pointer hover:opacity-60"
                onClick={() => handleDeleteAccount()}
              >
                <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                  <img src={deleteVector} alt="delete vector" />
                </div>
                <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Delete account
                </h6>
              </div>
              <div
                className="w-53 flex flex-row gap-2 items-center cursor-pointer hover:opacity-60"
                onClick={() => handleLogout()}
              >
                <div className="bg-[#F0F2F5] rounded-xl p-3 flex justify-center items-center">
                  <img src={logoutVector} alt="logout vector" />
                </div>
                <h6 className="font-inter font-md text-[0.7rem] sm:text-[0.8rem] xl:text-[0.9rem] text-[#121417]">
                  Logout
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserProfilePage;
