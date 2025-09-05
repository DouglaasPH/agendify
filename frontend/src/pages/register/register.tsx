import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// redux slice
import { updateRegister } from "../../features/auth/registerSlice";
import { checkEmailApi } from "../../api/authApi";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profession, setProfession] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateEmail, setValidateEmail] = useState<null | boolean>(null);
  const [validatePhoneNumber, setValidatePhoneNumber] = useState<
    null | boolean
  >(null);
  const [validatePassword, setValidatePassword] = useState<null | boolean>(
    null
  );
  const [emailExists, SetEmailExists] = useState<null | boolean>(null);

  const handleInsertEmail = (inputValue: string) => {
    setEmail(inputValue);

    const regex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

    if (inputValue.length === 0) setValidateEmail(null);
    else if (regex.test(email)) setValidateEmail(true);
    else setValidateEmail(false);
  };

  const handleInsertConfirmPassword = (inputValue: string) => {
    setConfirmPassword(inputValue);
    if (inputValue.length === 0) setValidatePassword(null);
    else if (password == inputValue) setValidatePassword(true);
    else setValidatePassword(false);
  };

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

  const handleRegister = async () => {
    console.log(
      "response",
      validateEmail,
      validatePhoneNumber,
      validatePassword
    );
    if (
      fullName != "" &&
      profession != "" &&
      validateEmail &&
      validatePhoneNumber &&
      validatePassword
    ) {
      try {
        const response = await checkEmailApi(email);
        if (!response.data.exists) {
          dispatch(
            updateRegister({
              fullName,
              email,
              phoneNumber,
              profession,
              password,
            })
          );
          navigate("accept-terms-of-use");
        } else {
          SetEmailExists(true);
        }
      } catch (error) {
        return error;
      }
    } else return;
  };

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-20">
      <div className="w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-7">
        <h1 className="text-center font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[1.8rem] text-[#121417]">
          Create your account
        </h1>
        <section className="flex flex-col items-center gap-5 w-full xl:w-1/3">
          <input
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#F0F2F5] rounded-md p-3 w-full focus:outline-none"
          />
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => handleInsertEmail(e.target.value)}
            className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
              validateEmail == null || validateEmail
                ? "border-none"
                : "border-2 border-red-800 focus:border-red-800"
            } bg-[#F0F2F5] rounded-md p-3 w-full`}
          />
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onKeyDown={(e) => handleInsertPhoneNumber(e.key)}
            className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
              validatePhoneNumber == null || validatePhoneNumber
                ? "border-none"
                : "border-2 border-red-800 focus:border-red-800"
            } bg-[#F0F2F5] rounded-md p-3 w-full`}
          />
          <input
            type="text"
            placeholder="Profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#F0F2F5] rounded-md p-3 w-full focus:outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border-none bg-[#F0F2F5] rounded-md p-3 w-full focus:outline-none"
          />
          <input
            type="text"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => handleInsertConfirmPassword(e.target.value)}
            className={`font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] focus:outline-none ${
              validatePassword == null || validatePassword
                ? "border-none"
                : "border-2 border-red-800 focus:border-red-800"
            } bg-[#F0F2F5] rounded-md p-3 w-full`}
          />
        </section>
        <section className="w-full xl:w-1/3 flex flex-col justify-between items-center gap-3">
          <button
            className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 w-full bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.7rem] xl:text-[0.8rem] cursor-pointer"
            onClick={() => handleRegister()}
          >
            Register
          </button>
          <p className="text-end font-inter font-regular text-[0.6rem] sm:text-[0.5rem] xl:text-[0.7rem] text-[#61738A] cursor-pointer">
            Already have an account?{" "}
            <button
              className="underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
          </p>
        </section>
      </div>

      {emailExists !== null && emailExists ? (
        <div className="fixed inset-0 bg-black/50 flex flex-row justify-center items-center">
          <div className=" bg-[#f1f1f1] w-120 sm:w-150 xl:w-150 sm:h-60 h-50 xl:h-60 p-10 rounded-lg   flex flex-col items-center justify-between">
            <h1 className="text-center font-inter font-bold text-[1.6rem] sm:text-[2rem] xl:text-[1.8rem] text-[#121417]">
              The email already exists
            </h1>
            <button
              onClick={() => SetEmailExists(null)}
              className="p-2 sm:p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 w-45 bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.7rem] sm:text-[0.8rem] xl:text-[0.7rem] cursor-pointer"
            >
              Try again
            </button>
            <a
              className="font-inter font-regular text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#61738A] cursor-pointer underline"
              onClick={() => navigate("/forgot-your-password")}
            >
              I forgot my password
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default RegisterPage;
