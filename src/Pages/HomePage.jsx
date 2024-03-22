import React from 'react';
import './../Styles/Styles.css';
import SideBar from '../Components/Sidebar';
import Bottombar from '../Components/Bottombar';

import NavBar, { MobileNavbar } from '../Components/Navbar';
import SideBarRight from '../Components/SidebarRight';

import Filters from '../Components/Filters';
import OverLay from '../Components/Overlay';
import Features from '../Components/Features';
import { useAuth0 } from "@auth0/auth0-react";
import Layout from '../Components/PageLayout';
const HomePage = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  return (
    
      <Layout>
      <div className="app-frame">
        <NavBar />
        <MobileNavbar greeting=" " />
        <OverLay />
        <Filters />
        {isAuthenticated ? (<><Features FeaturesTitle="Your top mixes" topMixes=" " />
        <Features FeaturesTitle={`Made for ${user ? user.given_name : ('you')}`} madeForUser=" " />
        <Features FeaturesTitle="Popular radios" Radio=" " />
        <Features FeaturesTitle="Best of Artists" thisIs=" " /></>) : (<>
          <Features FeaturesTitle="Popular Artists" thisIs=" " />
          <Features FeaturesTitle="By Spotify" madeForUser=" " />
          <Features FeaturesTitle="Top mixes" topMixes=" " />
          <Features FeaturesTitle="Popular radios" Radio=" " />
 
          </>)}
        
      </div>
   </Layout>
  );
};

export default HomePage;
