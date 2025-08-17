import logo from "../../assets/logos/1.png";

import "../../css/font.css";

// Components
import InTheHomePage from "./components/inTheHome";
import InTheDashboardPages from "./components/inTheDashboardPages";
import InTheChatPage from "./components/inTheChat";

function NavBar() {
  const inTheHome = false;
  const inTheDashboard = false;
  const inTheChat = true;

  // TODO: Add logic to direct the types of navbar

  return (
    <div
      className="w-full h-17 flex flex-row justify-between items-center pl-1 xl:pl-10 pr-1 xl:pr-10 border-b-1 border-b-[#E5E8EB]"
      style={{
        position: inTheChat ? "fixed" : "static",
        backgroundColor: inTheChat ? "#FFFFFF" : "none",
      }}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          className="hover:opacity-80 cursor-pointer h-[1.3rem] xl:h-[1.8rem]"
        />
      </div>
      {inTheHome ? <InTheHomePage /> : <></>}
      {inTheDashboard ? <InTheDashboardPages /> : <></>}
      {inTheChat ? <InTheChatPage /> : <></>}
    </div>
  );
}

export default NavBar;
