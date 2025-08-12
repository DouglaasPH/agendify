import { useEffect, useState } from "react";

// banner
import mainBanner from "../../assets/banners/banner-2.jpg";

// font
import "../../css/font.css";

function LoginPage() {
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
      <div className="w-92 xl:w-270 xl:mt-12 mt-8 flex flex-col justify-center items-center gap-20">
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
              className="font-inter font-normal text-[0.6rem] sm:text-[0.7rem] xl:text-[0.8rem] placeholder-[#61738A] text-[#121417] border border-[#DBE0E5] rounded-md p-2 w-full"
            />
            <a className="font-inter font-regular text-[0.4rem] sm:text-[0.5rem] xl:text-[0.6rem] text-[#61738A] cursor-pointer">
              Forgot your password?
            </a>
          </div>
          <div className="flex flex-col justify-between gap-3">
            <button className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 w-full bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.6rem] xl:text-[0.7rem] cursor-pointer">
              To enter
            </button>
            <a className="text-end font-inter font-regular text-[0.4rem] sm:text-[0.5rem] xl:text-[0.6rem] text-[#61738A] cursor-pointer">
              Don't have an account? Register.
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginPage;
