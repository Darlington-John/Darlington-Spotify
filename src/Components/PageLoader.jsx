import React from "react";
import SpotifyImg  from './../Assets/Images/Spotify.png';
export const PageLoader = () => {

  return (
    <div className="fixed  w-full h-full flex items-center justify-center bg-transparentBlack">
      <img src={SpotifyImg}className="w-16   animate-bounce"  alt="Loading..." />
    </div>
  );
};
