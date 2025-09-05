import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../store";
import { modifyUserEmail } from "../../api/authApi";
import { updateUserData } from "../../features/auth/userDataSlice";

function EditEmailPage() {
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );
  const user_email = useSelector((state: RootState) => state.userData.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validateCurrentEmail, setValidateCurrentEmail] = useState<
    null | boolean
  >(null);
  const [validateNewEmail, setValidateNewEmail] = useState<null | boolean>(
    null
  );

  const [errorApi, setErrorApi] = useState(false);
  const [typeErrorApi, setTypeErrorApi] = useState("");

  const handleInsertCurrentEmail = (inputValue: string) => {
    setCurrentEmail(inputValue);

    if (inputValue.length === 0) setValidateCurrentEmail(null);
    else if (inputValue == user_email) setValidateCurrentEmail(true);
    else setValidateCurrentEmail(false);
  };

  const handleInsertNewEmail = (inputValue: string) => {
    setNewEmail(inputValue);

    const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

    if (inputValue.length === 0) setValidateNewEmail(null);
    else if (regex.test(newEmail) && inputValue != currentEmail)
      setValidateNewEmail(true);
    else setValidateNewEmail(false);
  };

  const handleSaveChanges = async () => {
    if (validateCurrentEmail && validateNewEmail && password != "") {
      try {
        const response = await modifyUserEmail(access_token, {
          email: newEmail,
          password,
        });
        dispatch(updateUserData({ email: response.data.email }));

        navigate("/user/profile");
      } catch (error: any) {
        setErrorApi(true);
        setTypeErrorApi(error.data.detail);
      }
    }
  };

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 sm:w-140 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-10">
        <h1 className=" w-full font-inter font-bold text-[1.5rem] sm:text-[1.65rem] xl:text-[1.8rem] text-[#121417]">
          Edit e-mail
        </h1>
        <section className="w-full flex flex-col justify-between gap-3">
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Current e-mail
            </p>
            <input
              type="email"
              value={currentEmail}
              onChange={(e) => handleInsertCurrentEmail(e.target.value)}
              className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
                validateCurrentEmail == null || validateCurrentEmail
                  ? "border-none"
                  : "border-2 border-red-800 focus:border-red-800"
              } bg-[#F0F2F5] rounded-md p-3 w-full`}
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              New e-mail
            </p>
            <input
              type="text"
              value={newEmail}
              onChange={(e) => handleInsertNewEmail(e.target.value)}
              className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
                validateNewEmail == null || validateNewEmail
                  ? "border-none"
                  : "border-2 border-red-800 focus:border-red-800"
              } bg-[#F0F2F5] rounded-md p-3 w-full`}
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Your password for identity confirmation
            </p>
            <input
              type="text"
              placeholder="Your password"
              value={password}
              onChange={(input) => setPassword(input.target.value)}
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-row justify-between">
            <button
              className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[10rem] bg-[#E8EDF5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer"
              onClick={() => navigate("/user/profile")}
            >
              Cancel
            </button>
            <button
              className="p-3 pl-2 xl:pl-3 pr-2 xl:pr-3 w-[8rem] sm:w-[8rem] xl:w-[10rem] bg-[#0D78F2] hover:opacity-90 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] cursor-pointer"
              onClick={() => handleSaveChanges()}
            >
              Save Changes
            </button>
          </div>
        </section>
        <section>
          <p className="text-end font-inter font-regular text-[0.5rem] sm:text-[0.6rem] xl:text-[0.7rem] text-[#61738A] cursor-pointer">
            After the change, you will need to confirm the new email.
          </p>
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

export default EditEmailPage;
