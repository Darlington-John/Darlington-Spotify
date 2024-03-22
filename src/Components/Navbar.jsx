import React , {useState} from 'react';
import ArrLeftIcon from './../Assets/Icons/ArrLeft.svg';
import ArrRightIcon from './../Assets/Icons/ArrRight.svg';
import AlarmIcon from './../Assets/Icons/Alarm.svg';
import SettingsIcon from './../Assets/Icons/Settings.svg';
import XmarkIcon from './../Assets/Icons/Xmark.svg';

import { getGreeting } from './Filters';
import { toggleNav } from './../JavaScript.js';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import profileIcon from './../Assets/Icons/Profile.svg'
const NavBar = (props) => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleForwardClick = () => {
    navigate(1);
  };
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
    });
  };
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };
  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };
  return (
    <div
      className="flex flex-row items-center justify-between sticky top-0 xs:hidden bg-deepBlack py-2  z-50"
      id="Navbar"
    >
      <div className="flex flex-row gap-3 items-center">
        <button
          className="bg-deepBlack rounded-full p-2 nav-btn"
          onClick={handleBackClick}
        >
          <img src={ArrRightIcon} className="w-4" alt="" />
        </button>
        <button
          className="bg-deepBlack rounded-full p-2 nav-btn"
          onClick={handleForwardClick}
        >
          {' '}
          <img src={ArrLeftIcon} className="w-4" alt="" />
        </button>
        <div className="md:hidden ">{props.Search && <Search />}</div>
      </div>
      <div className="flex flex-row gap-4 items-center">
 


        {!isAuthenticated && (
        <>
             <button className="py-2 px-4 bg-grey text-base nav-btn rounded-full flex gap-2 items-center text-white" onClick={handleSignUp}>
Sign Up
        </button>
        <button className="py-2 px-4 bg-white text-base nav-btn rounded-full" onClick={handleLogin}>
          Log in
        </button>
        </>
      )}
      {isAuthenticated && (
             <button className="py-2 px-4 bg-grey text-base nav-btn rounded-full flex gap-2 items-center text-white" onClick={handleLogout}>
             Log out
                     </button>
      )}
         {isAuthenticated && (
        <div className="flex items-center gap-2">
          <button className="bg-deepBlack rounded-full p-2 nav-btn">
            <img src={AlarmIcon} className="w-4" alt="" />
          </button>
       
            <button className="bg-deepBlack rounded-full p-0  nav-btn"><Link to="/profile">

            <img src={user? user.picture:  profileIcon}  className="w-6 rounded-full" alt="" />
            
            </Link>
          </button>
     
        </div>
         )}
      </div>
    </div>
  );
};

export const MobileNavbar = (props) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [icon, setIcon] = useState(SettingsIcon);
  const handleToggleNav = () => {
    toggleNav();
    setIsOverlayOpen(!isOverlayOpen);
    setIcon(isOverlayOpen ? SettingsIcon : XmarkIcon);
  };
  const greeting = getGreeting();
  return (
    <div className="flex flex-row items-center justify-between hidden xs:flex py-3 sticky top-0 bg-deepBlack z-40">
      {props.greeting && (
        <h1 className="text-white text-2xl font-bold">{greeting}</h1>
      )}
      {props.playlistBack && (
        <div className="flex ">
          <button
            className="bg-deepBlack rounded-full p-2 nav-btn pl-4"
            onClick={handleBackClick}
          >
            <img src={ArrRightIcon} className="w-4" alt="" />
          </button>

          <h1 className="text-white text-2xl font-bold pl-4">
            {props.plalistName}
          </h1>
        </div>
      )}

      <Link to="#" onClick={handleToggleNav}>
        <img
          id="barsIcon"
          src={icon}
          className="w-6 z-10 absolute right-0 top-1/4 "
          alt=""
        />
      </Link>
    </div>
  );
};

export default NavBar;