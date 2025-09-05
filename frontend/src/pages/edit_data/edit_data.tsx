import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { modifyUserData } from "../../api/authApi";
import { updateUserData } from "../../features/auth/userDataSlice";

function EditDataPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const access_token = useSelector(
    (state: RootState) => state.auth.accessToken
  );
  const data_user = useSelector((state: RootState) => state.userData);
  const user_avatar_path = `../../../public/avatars/${data_user.profileAvatarId}.png`;

  const [name, setName] = useState(data_user.name);
  const [phoneNumber, setPhoneNumber] = useState(data_user.phoneNumber);
  const [profession, setProfession] = useState(data_user.profession);
  const [validatePhoneNumber, setValidatePhoneNumber] = useState<
    null | boolean
  >(true);

  const handleInsertPhoneNumber = (caracter: string) => {
    let newValue = "";
    const typeCaracter = Number(caracter);

    if (caracter === "Backspace") {
      if (phoneNumber.length == 2) {
        newValue = "";
      } else if (phoneNumber.length === 5 || phoneNumber.length === 9) {
        newValue = phoneNumber.slice(0, -3);
      } else if (phoneNumber.length === 14) {
        newValue = phoneNumber.slice(0, -2);
      } else {
        newValue = phoneNumber.slice(0, -1);
      }
    } else if (typeof typeCaracter === "number" && !isNaN(typeCaracter)) {
      if (phoneNumber.length == 0) {
        newValue = "+" + typeCaracter;
      } else if (phoneNumber.length === 2) {
        newValue = phoneNumber + typeCaracter + " (";
      } else if (phoneNumber.length === 6) {
        newValue = phoneNumber + typeCaracter + ") ";
      } else if (phoneNumber.length === 12) {
        newValue = phoneNumber + typeCaracter + "-";
      } else if (phoneNumber.length === 18) {
        newValue = phoneNumber.slice(0, -1) + typeCaracter;
      } else {
        newValue = phoneNumber + typeCaracter;
      }
    } else return;

    setPhoneNumber(newValue);

    if (newValue.length === 0) setValidatePhoneNumber(null);
    else if (newValue.length === 18) setValidatePhoneNumber(true);
    else setValidatePhoneNumber(false);
  };

  const handleSaveChanges = async () => {
    if (name !== "" && validatePhoneNumber && profession !== "") {
      try {
        const response = await modifyUserData(access_token, {
          name,
          phoneNumber,
          profession,
        });
        dispatch(updateUserData(response.data));
        navigate("/user/profile/");
      } catch (error) {
        return error;
      }
    } else return;
  };

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 sm:w-140 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-10">
        <h1 className=" w-full font-inter font-bold text-[1.5rem] sm:text-[1.65rem] xl:text-[1.8rem] text-[#121417]">
          Edit Profile Data
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
        <section className="w-full flex flex-col justify-between gap-3">
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Name
            </p>
            <input
              type="text"
              value={name}
              onChange={(input) => setName(input.target.value)}
              className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
                name != ""
                  ? "border-none"
                  : "border-2 border-red-800 focus:border-red-800"
              } bg-[#F0F2F5] rounded-md p-3 w-full`}
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Phone Number
            </p>
            <input
              type="text"
              value={phoneNumber}
              onKeyDown={(e) => handleInsertPhoneNumber(e.key)}
              className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
                validatePhoneNumber == null || validatePhoneNumber
                  ? "border-none"
                  : "border-2 border-red-800 focus:border-red-800"
              } bg-[#F0F2F5] rounded-md p-3 w-full`}
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Profession
            </p>
            <input
              type="text"
              value={profession}
              onChange={(input) => setProfession(input.target.value)}
              className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
                profession != ""
                  ? "border-none"
                  : "border-2 border-red-800 focus:border-red-800"
              } bg-[#F0F2F5] rounded-md p-3 w-full`}
            />
          </div>
        </section>
        <section className="w-full flex flex-row justify-between">
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
        </section>
      </div>
    </div>
  );
}

export default EditDataPage;
