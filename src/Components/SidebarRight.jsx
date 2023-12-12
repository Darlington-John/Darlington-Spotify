import React from 'react';
import Cards from './Cards';
import HappierThanEverImg from './../Assets/Images/HappierThanEver.jpg';

import ellipsisIcon from './../Assets/Icons/ellipsis.svg';

import XmarkIcon from './../Assets/Icons/Xmark.svg';
import LikeIcon from './../Assets/Icons/Like.svg';
import LikeActiveIcon from './../Assets/Icons/LikeActive.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useMusic } from './MusicContext';

const SideBarRight = (props) => {
  const sidebar1Ref = useRef(null);
  const sidebar2Ref = useRef(null);
  const [setSidebar1Width] = useState(300);
  const [sidebar2Width, setSidebar2Width] = useState(400);
  const [isResizing1, setIsResizing1] = useState(false);
  const [isResizing2, setIsResizing2] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    setSidebar2Width((prevState) => (prevState === 0 ? 400 : 0));
  };

  const stopResizing = useCallback(() => {
    setIsResizing1(false);
    setIsResizing2(false);
  }, []);

  const resize1 = useCallback(
    (mouseMoveEvent) => {
      if (isResizing1) {
        const newWidth =
          mouseMoveEvent.clientX -
          sidebar1Ref.current.getBoundingClientRect().left;
        setSidebar1Width(newWidth);
      }
    },
    [isResizing1, setSidebar1Width],
  );

  const resize2 = useCallback(
    (mouseMoveEvent) => {
      if (isResizing2) {
        const newWidth =
          sidebar2Ref.current.getBoundingClientRect().right -
          mouseMoveEvent.clientX;
        setSidebar2Width(newWidth);
      }
    },
    [isResizing2],
  );
  const [isMore, setIsMore] = useState(false);
  const toggleMore = () => {
    setIsMore(!isMore);
    toggleSidebar();
  };
  // const [isLiked, setIsLiked] = useState(false);
  // const toggleLiked = () => {
  //   setIsLiked(!isLiked);
  // };

  useEffect(() => {
    window.addEventListener('mousemove', resize1);
    window.addEventListener('mousemove', resize2);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize1);
      window.removeEventListener('mousemove', resize2);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize1, resize2, stopResizing]);
  const { selectedSong } = useMusic();

  return (
    <div>
      <div
        ref={sidebar2Ref}
        className={`app-sidebar bg-deepBlack overflow-auto   h-full SideBarRight ${
          isSidebarOpen ? 'open' : 'closed'
        }`}
        id="sidebar-container"
        style={{ width: sidebar2Width, maxWidth: '100%' }}
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="app-sidebar-content">
          <div className="flex items-center justify-center w-full flex-col p-2 pb-40 ">
            {isMore ? (
              <div className="flex flex-row items-center justify-between  w-full p-4">
                <img
                  src={ellipsisIcon}
                  className="w-6"
                  onClick={toggleMore}
                  alt=""
                />
              </div>
            ) : (
              <div className="flex flex-col animate-pulse w-full">
                <div className="flex flex-row items-center justify-between  w-full p-4">
                  <h1 className="song-header hover:underline">
                    {selectedSong
                      ? selectedSong.songName
                      : "I Didn't Change My Number"}
                  </h1>
                  <img
                    src={XmarkIcon}
                    className="w-4"
                    onClick={toggleMore}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-4 pb-6">
                  {selectedSong ? (
                    <>
                      <img
                        src={selectedSong.songImg}
                        className="rounded-xl"
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={HappierThanEverImg}
                        className="rounded-xl"
                        alt=""
                      />
                    </>
                  )}
                  <div className="flex flex-row justify-between ">
                    <div className="flex flex-col ">
                      <Link
                        to="#"
                        className="text-xl song-name-link hover:underline lg:text-base"
                      >
                        {selectedSong
                          ? selectedSong.songName
                          : "I Did'nt Change My Number"}
                      </Link>
                      <Link className="hover:underline">
                        {selectedSong
                          ? selectedSong.songArtists
                          : 'Billie Eilish'}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 pb-6">
                  <Cards ArtistCard=" " />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarRight;
