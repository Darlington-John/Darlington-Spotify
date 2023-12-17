import React from 'react';
import SideBar from './../../Components/Sidebar';
import Bottombar from '../../Components/Bottombar';

import NavBar, { MobileNavbar } from '../../Components/Navbar';
import SideBarRight from '../../Components/SidebarRight';

import Filters from '../../Components/Filters';
import OverLay from '../../Components/Overlay';
import Features from '../../Components/Features';
import Search from '../../Components/Search';

const HomePageBody = () => {
  return (
    <div className="app-container ">
      <SideBar />
      <div className="app-frame">
        <NavBar />
        <MobileNavbar greeting=" " />
        <OverLay />
        <Filters />
        <Features FeaturesTitle="Your top mixes" topMixes=" " />
        <Features FeaturesTitle="Made for Jxt Darlington" madeForUser=" " />
        <Features FeaturesTitle="Popular radios" Radio=" " />
        <Features FeaturesTitle="Best of Artists" thisIs=" " />
        <Search />
      </div>
      <SideBarRight />
      <Bottombar />
    </div>
  );
};

export default HomePageBody;
