import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// image
import logo from "../../assets/logos/1.png";

// Components
import NotLoggedInNavBar from "./components/notLoggedInNavBar";
import LoggedInNavBar from "./components/loggedInNavBar";
import InTheChatPage from "./components/inTheChatNavBar";

// redux
import type { RootState } from "../../store";

function NavBar() {
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [inTheChat, setInTheChat] = useState(false);

  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const logoClicked = () => navigate("/");

  // TODO: Add logic to direct the types of navbar
  useEffect(() => {
    if (isAuthenticated) {
      setNotLoggedIn(false);
      setLoggedIn(true);
      setInTheChat(false);
    } else {
      setNotLoggedIn(true);
      setLoggedIn(false);
      setInTheChat(false);
    }
  }, [isAuthenticated]);

  return (
    <div
      className="w-full h-17 flex flex-row justify-between items-center pl-5 xl:pl-10 pr-5 xl:pr-10 border-b-1 border-b-[#E5E8EB]"
      style={{
        position: inTheChat ? "fixed" : "static",
        backgroundColor: inTheChat ? "#FFFFFF" : "none",
      }}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          onClick={logoClicked}
          className="hover:opacity-80 cursor-pointer h-[1.8rem] sm:h-[1.9rem] xl:h-[1.8rem]"
        />
      </div>
      {notLoggedIn ? <NotLoggedInNavBar /> : <></>}
      {loggedIn ? <LoggedInNavBar /> : <></>}
      {inTheChat ? <InTheChatPage /> : <></>}
    </div>
  );
}

export default NavBar;
