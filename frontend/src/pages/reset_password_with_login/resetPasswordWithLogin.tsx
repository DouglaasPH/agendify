import { useState } from "react";
import { modifyUserPassword } from "../../api/authApi";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

function ResetPasswordWithLoginPage() {
  const navigate = useNavigate();
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [validateNewPassword, setValidateNewPassword] = useState<
    null | boolean
  >(null);
  const [validateConfirmNewPassword, setValidateConfirmNewPassword] = useState<
    null | boolean
  >(null);
  const [validatePassword, setValidatePassword] = useState<null | boolean>(
    null
  );
  const [errorApi, setErrorApi] = useState(false);
  const [typeErrorApi, setTypeErrorApi] = useState("");

  const handleCurrentPassword = (inputValue: string) => {
    setCurrentPassword(inputValue);
    if (inputValue != "") {
      setValidatePassword(true);
    } else {
      setValidatePassword(false);
    }
  };

  const handleNewPassword = (inputValue: string) => {
    setNewPassword(inputValue);
    if (inputValue != "" && inputValue != currentPassword) {
      setValidateNewPassword(true);
    } else {
      setValidateNewPassword(false);
    }
  };

  const handleConfirmNewPassword = (inputValue: string) => {
    setConfirmNewPassword(inputValue);
    if (inputValue != "" && inputValue == newPassword) {
      setValidateConfirmNewPassword(true);
    } else {
      setValidateConfirmNewPassword(false);
    }
  };

  const handleSave = async () => {
    if (validatePassword && validateNewPassword && validateConfirmNewPassword) {
      try {
        await modifyUserPassword(access_token, {
          currentPassword: currentPassword,
          newPassword: newPassword,
        });
        navigate("/user/profile");
      } catch (error: any) {
        setErrorApi(true);
        setTypeErrorApi(error.data.detail);
      }
    } else return;
  };

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 sm:w-140 xl:w-180 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-7">
        <h1 className=" w-full text-center font-inter font-bold text-[1.5rem] sm:text-[1.65rem] xl:text-[1.8rem] text-[#121417]">
          Reset Password
        </h1>
        <section className="flex flex-col justify-between gap-3 w-full">
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Current password
            </p>
            <input
              type="text"
              placeholder="Current password"
              value={currentPassword}
              onChange={(e) => handleCurrentPassword(e.target.value)}
              className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
                validatePassword == null || validatePassword
                  ? "border-none"
                  : "border-2 border-red-800 focus:border-red-800"
              } bg-[#F0F2F5] rounded-md p-3 w-full`}
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              New password
            </p>
            <input
              type="text"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => handleNewPassword(e.target.value)}
              className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
                validateNewPassword == null || validateNewPassword
                  ? "border-none"
                  : "border-2 border-red-800 focus:border-red-800"
              } bg-[#F0F2F5] rounded-md p-3 w-full`}
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Confirm new password
            </p>
            <input
              type="text"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => handleConfirmNewPassword(e.target.value)}
              className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
                validateConfirmNewPassword == null || validateConfirmNewPassword
                  ? "border-none"
                  : "border-2 border-red-800 focus:border-red-800"
              } bg-[#F0F2F5] rounded-md p-3 w-full`}
            />
          </div>
        </section>
        <section className="w-full flex flex-row justify-between">
          <button
            className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[10rem] sm:w-[10rem] xl:w-[12rem] bg-[#E8EDF5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer"
            onClick={() => navigate("/user/profile")}
          >
            Cancel
          </button>
          <button
            className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[10rem] sm:w-[10rem] xl:w-[12rem] bg-[#0D78F2] hover:opacity-90 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer"
            onClick={() => handleSave()}
          >
            Save
          </button>
        </section>
      </div>
      {errorApi ? (
        <div className="fixed inset-0 bg-black/50 flex flex-row justify-center items-center">
          <div className=" bg-[#f1f1f1] w-120 sm:w-150 xl:w-150 sm:h-60 h-50 xl:h-60 p-10 rounded-lg   flex flex-col items-center justify-between">
            <h1 className="text-center font-inter font-bold text-[1.6rem] sm:text-[2rem] xl:text-[1.8rem] text-[#121417]">
              {typeErrorApi}
            </h1>
            <button
              onClick={() => setErrorApi(false)}
              className="p-2 sm:p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 w-45 bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.7rem] sm:text-[0.8rem] xl:text-[0.7rem] cursor-pointer"
            >
              Try again
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ResetPasswordWithLoginPage;
