import { useNavigate } from "react-router-dom";

function NotLoggedInNavBar() {
  const navigate = useNavigate();

  const homeButtonClicked = () => navigate("/");

  const aboutUsButtonClicked = () => navigate("/about-us");

  const faqButtonClicked = () => navigate("/help-center");

  const createAccountButtonClicked = () => navigate("/register");

  const loginButtonClicked = () => navigate("/login");

  return (
    <div className="w-65 xl:w-110 h-11 flex flex-row justify-between items-center">
      <button
        className="font-inter font-medium text-[0.55rem] xl:text-sm cursor-pointer hover:opacity-75"
        onClick={homeButtonClicked}
      >
        Home
      </button>
      <button
        className="font-inter font-medium text-[0.55rem] xl:text-sm cursor-pointer hover:opacity-75"
        onClick={aboutUsButtonClicked}
      >
        About us
      </button>
      <button
        className="font-inter font-medium text-[0.55rem] xl:text-sm cursor-pointer hover:opacity-75"
        onClick={faqButtonClicked}
      >
        FAQ
      </button>
      <div className="w-33 xl:w-52 flex flex-row  justify-between items-center">
        <button
          className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 bg-[#0D78F2] hover:opacity-95 rounded-lg text-[#FFFFFF] font-inter font-bold text-[0.55rem] xl:text-sm cursor-pointer"
          onClick={createAccountButtonClicked}
        >
          Create Account
        </button>
        <button
          className="p-2 pl-2 xl:pl-3 pr-2 xl:pr-3 bg-[#F0F2F5] hover:opacity-80 rounded-lg text-[#121417] font-inter font-bold text-[0.55rem] xl:text-sm cursor-pointer"
          onClick={loginButtonClicked}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default NotLoggedInNavBar;
