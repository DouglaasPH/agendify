import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Banner
import mainBanner from "../../assets/banners/banner-2.jpg";

// API
import { getUserDataApi, loginApi } from "../../api/authApi";

// Redux
import { setAccessToken } from "../../features/auth/authSlice";
import { updateUserData } from "../../features/auth/userDataSlice";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorApi, setErrorApi] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const loginResponse = await loginApi({ username, password });
      const userDataResponse = await getUserDataApi(
        loginResponse.data.access_token
      );
      dispatch(setAccessToken(loginResponse.data.access_token));
      dispatch(updateUserData(userDataResponse.data));
    } catch (error: any) {
      if (
        error.response.status == 400 &&
        error.response.data.detail === "Invalid username or password."
      ) {
        setErrorApi(true);
      }
    }
  };

  const [currentSizeOfScreen, setCurrentSizeOfScreen] = useState(
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setCurrentSizeOfScreen(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center items-center p-[0.4rem] xl:p-0 mb-15">
      <div className="w-120 sm:w-180 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-20">
        {currentSizeOfScreen > 768 ? (
          <section className="w-full flex flex-col gap-7">
            <img src={mainBanner} alt="main banner" className="w-full" />
            <h1 className="text-center font-inter font-bold text-[1.5rem] sm:text-[2rem] xl:text-[2.5rem] text-[#121417]">
              Welcome back
            </h1>
          </section>
        ) : null}
        <section className="flex flex-col justify-between gap-3 w-1/2">
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              E-mail
            </p>
            <input
              type="email"
              placeholder="youremail@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 w-full">
            <p className="font-inter font-medium text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] text-[#121417]">
              Password
            </p>
            <input
              type="text"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
            <a
              className="font-inter font-regular text-[0.4rem] sm:text-[0.5rem] xl:text-[0.6rem] text-[#61738A] cursor-pointer underline"
              onClick={() => navigate("/forgot-your-password")}
            >
              Forgot your password?
            </a>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <button
              onClick={handleLogin}
              className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 w-full bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] xl:text-[0.9rem] cursor-pointer"
            >
              To enter
            </button>
            <a
              className="text-end font-inter font-regular text-[0.4rem] sm:text-[0.5rem] xl:text-[0.6rem] text-[#61738A] cursor-pointer underline"
              onClick={() => navigate("/register")}
            >
              Don't have an account? Register.
            </a>
          </div>
        </section>
      </div>

      {errorApi ? (
        <div className="fixed inset-0 bg-black/50 flex flex-row justify-center items-center">
          <div className=" bg-[#f1f1f1] w-120 sm:w-150 xl:w-150 sm:h-60 h-50 xl:h-60 p-10 rounded-lg   flex flex-col items-center justify-between">
            <h1 className="text-center font-inter font-bold text-[1.6rem] sm:text-[2rem] xl:text-[1.8rem] text-[#121417]">
              Username or password invalid
            </h1>
            <button
              onClick={() => setErrorApi(false)}
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

export default LoginPage;
