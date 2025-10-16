// react
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// API
import { modifyUserPassword } from "../../api/authApi";

// Redux
import type { RootState } from "../../store";

// motion
import { motion } from "motion/react";

// lucide
import { ArrowLeft, Lock, LockOpen, Save, Shield } from "lucide-react";

// shadcn/ui
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <main className="py-30 flex flex-col gap-25 items-center">
      <section className="flex flex-col gap-3">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent text-5xl md:text-6xl text-center font-semibold leading-tight"
        >
          Change Email
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="px-10 md:px-0 text-center text-md md:text-xl text-gray-500 leading-relaxed"
        >
          Update your password securely. Enter your current password to confirm
          the change.
        </motion.p>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        className="w-8/9 md:w-2/5 bg-white rounded-xl shadow-2xl flex flex-col gap-15 justify-center"
      >
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 flex flex-col items-center justify-center gap-5 py-10 rounded-t-3xl">
          <div className="text-white p-4 bg-white/20 rounded-full">
            <Shield className="size-8" />
          </div>
          <h4 className="bg-gradient-to-r text-white text-2xl md:text-3xl text-center font-semibold leading-tight">
            Change Password
          </h4>
          <p className="px-10 md:px-0 text-center text-md md:text-md text-white/70 leading-relaxed">
            Secure verification required
          </p>
        </div>
        <form>
          <div className="flex flex-col gap-8 px-5 md:px-15">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid gap-2"
            >
              <Label htmlFor="currentPassword" className="font-medium text-lg">
                <Lock className="text-blue-600 size-5" /> Current password
              </Label>
              <Input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => handleCurrentPassword(e.target.value)}
                className={`bg-[#F0F2F5] rounded-xl p-3 w-full py-4 md:py-0 ${
                  validatePassword == null || validatePassword
                    ? "border-none"
                    : "border-2 border-red-800 focus:border-red-800"
                }`}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid gap-2"
            >
              <Label htmlFor="newPassword" className="font-medium text-lg">
                <Lock className="text-blue-600 size-5" /> New password
              </Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => handleNewPassword(e.target.value)}
                className={`bg-[#F0F2F5] rounded-xl p-3 w-full py-4 md:py-0 ${
                  validateNewPassword == null || validateNewPassword
                    ? "border-none"
                    : "border-2 border-red-800 focus:border-red-800"
                }`}
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="grid gap-2"
            >
              <Label
                htmlFor="confirmNewPassword"
                className="font-medium text-lg"
              >
                <Lock className="text-blue-600 size-5" /> Confirm new password
              </Label>
              <Input
                id="confirmNewPassword"
                type="password"
                value={confirmNewPassword}
                onChange={(e) => handleConfirmNewPassword(e.target.value)}
                className={`bg-[#F0F2F5] rounded-xl p-3 w-full py-4 md:py-0 ${
                  validateConfirmNewPassword == null ||
                  validateConfirmNewPassword
                    ? "border-none"
                    : "border-2 border-red-800 focus:border-red-800"
                }`}
                required
              />
            </motion.div>
          </div>
        </form>
        <div className="px-5 md:px-15 pb-5 flex flex-col gap-5">
          <Button
            className="w-full py-6 md:py-5 rounded-xl text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700"
            onClick={() => handleSave()}
          >
            <Save /> Save Changes
          </Button>
          <Button
            className="w-full py-6 md:py-5 rounded-xl text-xl"
            variant="outline"
            onClick={() => navigate("/user/profile")}
          >
            <ArrowLeft className="size-4" /> Back to Profile
          </Button>
          <div className="flex flex-col gap-3 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-5 rounded-xl">
            <div className="flex flex-row items-center gap-3">
              <LockOpen className="size-6 text-blue-600" />
              <h4 className="bg-clip-text text-start text-sm md:text-lg font-semibold leading-tight">
                Security Notice
              </h4>
            </div>
            <p className="pl-9 text-start text-sm md:text-md text-gray-500 leading-relaxed">
              For your security, we require your current password to verify this
              change.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default ResetPasswordWithLoginPage;
/*
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
*/
