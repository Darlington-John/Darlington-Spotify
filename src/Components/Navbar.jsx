import React from 'react';
import ArrLeftIcon from './../Assets/Icons/ArrLeft.svg';
import ArrRightIcon from './../Assets/Icons/ArrRight.svg';
import DownloadIcon from './../Assets/Icons/Download.svg';
import DarlingtonIcon from './../Assets/Images/Blohsh.jpg';
import AlarmIcon from './../Assets/Icons/Alarm.svg';
import SettingsIcon from './../Assets/Icons/Settings.svg';
import XmarkIcon from './../Assets/Icons/Xmark.svg';
import { useState } from 'react';
import { getGreeting } from './Filters';
import { toggleNav } from './../JavaScript.js';
import { Link, useNavigate } from 'react-router-dom';
import Search from './Search.jsx';
const NavBar = (props) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleForwardClick = () => {
    navigate(1);
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
        <button className="py-2 px-4 bg-white text-base nav-btn rounded-full">
          Explore premium
        </button>
        <button className="py-2 px-4 bg-grey text-base nav-btn rounded-full flex gap-2 items-center text-white">
          <img src={DownloadIcon} className="w-4" alt="" />
          <span>Install app</span>
        </button>
        <div className="flex items-center gap-2">
          <button className="bg-deepBlack rounded-full p-2 nav-btn">
            <img src={AlarmIcon} className="w-4" alt="" />
          </button>

          <button className="bg-deepBlack rounded-full p-0  nav-btn">
            <img src={DarlingtonIcon} className="w-6 rounded-full" alt="" />
          </button>
        </div>
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
