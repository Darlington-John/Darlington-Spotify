import React from 'react';
import NavBar, { MobileNavbar } from './Navbar';
import OverLay from './Overlay';
import SideBarRight from './SidebarRight';
import Bottombar from './Bottombar';
import SideBar from './Sidebar';
import { useAuth0 } from "@auth0/auth0-react";
import Popup from './authPopup';
const Layout = ({children}) => {
    const { isAuthenticated } = useAuth0();
    return (     <div className="app-container ">
    <SideBar />
    <Popup/>
{children}
<SideBarRight />
    <Bottombar />
  </div> );
}
 
export default Layout;