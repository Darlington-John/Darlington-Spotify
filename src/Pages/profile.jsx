import React from 'react';
import SideBar from '../Components/Sidebar';
import NavBar, { MobileNavbar } from '../Components/Navbar';
import OverLay from '../Components/Overlay';
import SideBarRight from '../Components/SidebarRight';
import Bottombar from '../Components/Bottombar';
import profileIcon from '../Assets/Icons/Profile.svg'
import { useAuth0 } from "@auth0/auth0-react";
import Layout from '../Components/PageLayout';
const Profile = () => {
    const { user } = useAuth0();

  return (

      <div className="app-frame ">
        <NavBar />
        <MobileNavbar   playlistBack=" "/>
        <OverLay/>
        <div className='flex  w-full gap-10 pt-4 pb-10 xs:flex-col'>
          <div  className='flex flex-col   shrink-0 self-start h-[800px] xs:h-auto mx-auto'>
            <div className='p-2 rounded-full  border border-2 border-spGreen sticky top-14'>
        <img src={user? user.picture:  profileIcon}  alt='' className='w-40 md:w-28  rounded-full ' />
        </div>
        </div>
        <div className='flex flex-col gap-10 w-full'>
        <div className='flex flex-col items-start gap-3 w-full  xs:items-center'>
          <div className='flex items-center gap-10 flex-wrap w-full md:gap-10 xs:gap-0  '>
          <h1 className='text-4xl text-white md:text-3xl  xs:mx-auto'>{user? user.name:  'No name'}</h1>
          <div className='bg-spGreen text-deepBlack py-1 px-2 rounded-md text-xs xs:hidden'>
Free
        </div>
          </div>
          
          <h1 className='text-xl text-spGrey md:text-base '>{user? user.email:  'No name'}</h1>
        
        </div>
        <div className='w-full'>
          <form className='flex flex-col w-full gap-8'>
        <div className='flex flex-col gap-2'>
        <label  htmlFor="authorName" className=' text-base xs:text-sm lg:text-sm text-spGrey'>Username</label>
        <input
          type="text"
          id="authorName"
        name="authorName"
     placeholder={user? user.name:  'No name'}
          className='classic-input text-spGrey'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label  htmlFor="authorName" className=' text-base xs:text-sm lg:text-sm text-spGrey'>Email</label>
        <input
          type="text"
          id="authorName"
        name="authorName"
     placeholder={user? user.name:  'No name'}
          className='classic-input text-spGrey'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label  htmlFor="authorName" className=' text-base xs:text-sm lg:text-sm text-spGrey'>Password</label>
        <input
          type="text"
          id="authorName"
        name="authorName"
     placeholder={user? user.name:  'No name'}
          className='classic-input text-spGrey'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label  htmlFor="authorName" className=' text-base xs:text-sm lg:text-sm text-spGrey'>Gender</label>
        <input
          type="text"
          id="authorName"
        name="authorName"
     placeholder={user? user.name:  'No name'}
          className='classic-input text-spGrey'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label  htmlFor="authorName" className=' text-base xs:text-sm lg:text-sm text-spGrey'>Country</label>
        <input
          type="text"
          id="authorName"
        name="authorName"
     placeholder={user? user.name:  'No name'}
          className='classic-input text-spGrey'
        />
      </div>
      </form>
        </div>
        </div>
    
            </div>
      </div>
  );
};

export default Profile;