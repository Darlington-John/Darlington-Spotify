import React, { useState, useEffect, useRef } from 'react';
import { useMusic } from './MusicContext';
import spotLImg from './../Assets/Images/spotL.png';
import ColorThief from 'colorthief';
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
const Popup = () => {
  const ref = useRef(null);

  const { isOpen, closePopup } = useMusic();
  const [bgColor, setBgColor] = useState('#b6a7c5');
  useEffect(() => {
    const getColor = async () => {
      const colorThief = new ColorThief();
      const img = document.createElement('img');
      img.src =  spotLImg;
      img.crossOrigin = 'Anonymous'; // Enable CORS
 img.onload = () => {
  const lightVibrantColor = colorThief.getPalette(img, 5)[3];

      const rgbColor = `rgb(${lightVibrantColor.join(', ')})`;
      setBgColor(rgbColor);
    };
    };
    getColor();
  }, [spotLImg]);
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>

      {isOpen && (
        <motion.div className={`fixed h-screen w-screen flex items-center justify-center z-[400] bg-transBlack text-white flex-col gap-4 ease-out duration-300 px-4 `} ref={ref}  initial={{ opacity: 0,  }}
        animate={{ opacity: 1,  }}>
          <div className="p-10 flex gap-16 items-end rounded-3xl md:gap-4 md:items-center xs:flex-col  2xs:p-3"  style={{ backgroundColor: bgColor }} ref={popupRef}>
        
       

                    <div className='shrink-0'>
                      <img
                        src={spotLImg}
                        className="rounded-xl w-72 h-72 md:w-40 md:h-40 "
                        alt=""
                      />
                    </div>
                
                  <div className='flex flex-col gap-6 w-[300px] md:gap-3 2xs:w-full'>
<h1 className='text-[32px] font-bold md:text-lg md:text-center'>
Start listening with a free Spotify account
</h1>
<div className='flex flex-col gap-4 items-center md:gap-3'>
<button className='py-3 px-5  text-base text-deepBlack bg-spGreen rounded-full font-semibold md:px-3 md:py-2 md:text-sm' onClick={handleSignUp}>
    Sign up for free
</button>
<button className='py-3 px-5  text-base text-white border border-spGreen  rounded-full font-semibold md:px-3 md:py-2 md:text-sm'>
Download app
</button>
</div>
<h1 className='text-base text-[#d3d3d3] mx-auto md:text-sm md:text-center'>Already have an account? <span className='text-white cursor-pointer md:text-sm' onClick={handleLogin}>Log in</span></h1>
                  </div>
          </div>
          <button className="text-white text-base" onClick={closePopup}>Close</button>
        </motion.div>
      )}
    </>
  );
};

export default Popup;
