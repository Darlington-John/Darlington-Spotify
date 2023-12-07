import React from 'react';
import { Link } from 'react-router-dom';

import BillieEilishImg from './../Assets/Images/BillieEilish.jpg';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import BillieForestImg from './../Assets/Images/BillieForest.jpg';
import BillieRedImg from './../Assets/Images/BillieRed.jpg';
import BillieEilishGreenImg from './../Assets/Images/BillieEilishGreen.jpg';
import BillieAnacondaImg from './../Assets/Images/BillieAnaconda.jpg';
import LikedSongsImg from './../Assets/Images/LikedSongs.png';
import ArrLeftIcon from './../Assets/Icons/ArrLeft.svg';
import XmarkIcon from './../Assets/Icons/Xmark.svg';
import PlayWhiteIcon from './../Assets/Icons/PlayWhite.svg';
import PlayIcon from './../Assets/Icons/Play.svg';

import PauseWhiteIcon from './../Assets/Icons/PauseWhite.svg';

import { useMusic } from './MusicContext';
import ArtistsBio from './ArtistsBio';
const Cards = (props) => {
  const { selectedSong } = useMusic();
  const location = useLocation();
  const handleResize = () => {
    const navbarCardsContainer = document.querySelectorAll(
      '.navbar-cards-container',
    );

    navbarCardsContainer.forEach((container) => {
      const card1 = container.querySelector('.card1');
      const card2 = container.querySelector('.card2');

      const containerWidth = container.clientWidth;
      if (containerWidth <= 200) {
        card1.style.display = 'none';
        card2.style.display = 'flex';
      } else {
        card1.style.display = 'flex';
        card2.style.display = 'none';
      }
    });
  };
  const [isFollowed, setIsFollowed] = useState(false);
  const toggleFollowed = () => {
    // Toggle the isPlaying state when the button is clicked
    setIsFollowed(!isFollowed);
  };
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const openPopUp = () => {
    setIsPopUpOpen(true);
  };
  const closePopUp = () => {
    setIsPopUpOpen(false);
  };
  useEffect(() => {
    // Call the resize handler when the component is mounted and whenever the window is resized
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const imageUrls = [
    selectedSong ? selectedSong.artistsFirst : BillieEilishImg,

    selectedSong ? selectedSong.artistsSec : BillieForestImg,
    selectedSong ? selectedSong.artistsThird : BillieAnacondaImg,
    selectedSong ? selectedSong.artistsFourth : BillieRedImg,
    selectedSong ? selectedSong.artistsFifth : BillieEilishGreenImg,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const { isPlaying, togglePlay } = props;

  return (
    <>
      {props.navbarCards && (
        <div className="w-full flex flex-col gap-8 bg-greyBlack rounded-lg navbar-cards-container">
          <div className="w-full flex flex-col gap-8 bg-greyBlack p-5 rounded-lg card1">
            <div className="w-full flex items-center justify-start gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 flex-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 iYxpxA home-active-icon"
                viewBox="0 0 24 24"
                id="homeIcon"
              >
                <path
                  d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
                  id="homePath"
                  className={location.pathname === '/' ? 'active' : ''}
                  fill="#b3b3b3"
                />
              </svg>
              <Link to="/" id={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </div>
            <div className="w-full flex items-center justify-start gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 flex-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 iYxpxA search-active-icon"
                viewBox="0 0 24 24"
                id="homeIcon"
              >
                <path
                  d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"
                  fill="transparent"
                />
                <path
                  d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
                  id="searchPath"
                  fill="#b3b3b3"
                />
              </svg>
              <Link
                to="/SearchPage"
                id={location.pathname === '/SearchPage' ? 'active' : ''}
              >
                Search
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 bg-greyBlack p-1 rounded-lg card2 ">
            <div className="w-full flex items-center justify-center gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 iYxpxA home-active-icon"
                viewBox="0 0 24 24"
                id="homeIcon"
              >
                <path
                  d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
                  id="homePath"
                  className={location.pathname === '/' ? 'active' : ''}
                  fill="#b3b3b3"
                />
              </svg>
            </div>
            <div className="w-full flex items-center justify-center gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                class="Svg-sc-ytk21e-0 iYxpxA search-active-icon"
                viewBox="0 0 24 24"
                id="homeIcon"
              >
                <path
                  d="M15.356 10.558c0 2.623-2.16 4.75-4.823 4.75-2.664 0-4.824-2.127-4.824-4.75s2.16-4.75 4.824-4.75c2.664 0 4.823 2.127 4.823 4.75z"
                  fill="transparent"
                />
                <path
                  d="M1.126 10.558c0-5.14 4.226-9.28 9.407-9.28 5.18 0 9.407 4.14 9.407 9.28a9.157 9.157 0 0 1-2.077 5.816l4.344 4.344a1 1 0 0 1-1.414 1.414l-4.353-4.353a9.454 9.454 0 0 1-5.907 2.058c-5.18 0-9.407-4.14-9.407-9.28zm9.407-7.28c-4.105 0-7.407 3.274-7.407 7.28s3.302 7.279 7.407 7.279 7.407-3.273 7.407-7.28c0-4.005-3.302-7.278-7.407-7.278z"
                  id="searchPath"
                  fill="#b3b3b3"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      {props.navbarLibrary && (
        <div className="w-full flex flex-col gap-8 bg-greyBlack p-5 rounded-lg navbar-cards-container">
          <div className="w-full flex items-center justify-between gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 flex-wrap card1">
            <div className="flex gap-5  bg-deepBlack ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="Svg-sc-ytk21e-0 iYxpxA"
                id="homeIcon"
              >
                <path
                  d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                  fill="white"
                />
              </svg>
              <Link to="/" id="active">
                Library
              </Link>
            </div>
            <div className="flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                class="Svg-sc-ytk21e-0 kPpCsU"
                id="PlusIcon"
              >
                <path
                  d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"
                  id="PlusPath"
                  fill="#b3b3b3"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
                class="Svg-sc-ytk21e-0 kgVuXA"
                id="ArrIcon"
              >
                <path
                  d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"
                  id="arrPath"
                  fill="#b3b3b3"
                />
              </svg>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 bg-greyBlack p-1 rounded-lg card2 ">
            <div className="w-full flex items-center justify-center gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="Svg-sc-ytk21e-0 iYxpxA"
                id="homeIcon"
              >
                <path
                  d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      {props.navbarCardsAlbum && (
        <div className="w-full flex flex-col gap-8 rounded-lg navbar-cards-container">
          <div className="w-full flex flex-col gap-8 px-5 py-1 rounded-lg card1">
            <div className="w-full flex items-center justify-start gap-5 text-sm font-sans hover:text-white nav-link duration-300 flex-wrap ">
              <div className="plus-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  x="0px"
                  y="0px"
                  viewBox="0 0 32 32"
                  enable-background="new 0 0 32 32"
                  xml="preserve"
                  id="homeIcon"
                >
                  <path
                    d="M28,16c0,1.105-0.895,2-2,2h-8v8c0,1.105-0.895,2-2,2s-2-0.895-2-2v-8H6c-1.105,0-2-0.895-2-2s0.895-2,2-2h8V6  c0-1.104,0.895-2,2-2s2,0.896,2,2v8h8C27.105,14,28,14.895,28,16z"
                    id="homePath"
                    fill="black"
                    // className={location.pathname === '/' ? 'active' : ''}
                  />
                </svg>
              </div>
              <Link to="/" id={location.pathname === '/' ? 'active' : ''}>
                Create Playlist
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 px-5 py-1 rounded-lg card2">
            <div className="w-full flex items-center justify-center gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 flex-wrap">
              <div className="plus-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  x="0px"
                  y="0px"
                  viewBox="0 0 32 32"
                  enable-background="new 0 0 32 32"
                  xml="preserve"
                  id="homeIcon"
                >
                  <path
                    d="M28,16c0,1.105-0.895,2-2,2h-8v8c0,1.105-0.895,2-2,2s-2-0.895-2-2v-8H6c-1.105,0-2-0.895-2-2s0.895-2,2-2h8V6  c0-1.104,0.895-2,2-2s2,0.896,2,2v8h8C27.105,14,28,14.895,28,16z"
                    id="homePath"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.navbarCardsLike && (
        <div className="w-full flex flex-col gap-8 rounded-lg navbar-cards-container">
          <div className="w-full flex flex-col gap-8 px-5 py-1  rounded-lg card1">
            <div className="w-full flex items-center justify-start gap-5 text-sm font-sans hover:text-white nav-link duration-300 flex-wrap ">
              <div className="plus-container">
                <img src={LikedSongsImg} id="homeIcon" className="hover-img" />
              </div>
              <Link to="/" id={location.pathname === '/' ? 'active' : ''}>
                Liked songs
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 px-5 py-1  rounded-lg card2">
            <div className="w-full flex items-center justify-center gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 flex-wrap text-ellipsis overflow-hidden ...">
              <img src={LikedSongsImg} id="homeIcon" />
            </div>
          </div>
        </div>
      )}
      {props.navbarCardsEpisodes && (
        <div className="w-full flex flex-col gap-8 rounded-lg navbar-cards-container">
          <div className="w-full flex flex-col gap-8 px-5 py-1  rounded-lg card1">
            <div className="w-full flex items-center justify-start gap-5 text-sm font-sans hover:text-white nav-link duration-300 flex-wrap ">
              <div className="episodes-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  x="0px"
                  y="0px"
                  id="homeIcon"
                  fill="#1DB954"
                >
                  <circle cx="12" cy="11" r="2.75" />
                  <path d="m12,5.25c-3.17,0-5.75,2.58-5.75,5.75,0,1.12.33,2.21.94,3.15.23.34.69.44,1.04.21.35-.23.44-.69.21-1.04-.45-.69-.69-1.49-.69-2.33,0-2.34,1.91-4.25,4.25-4.25s4.25,1.91,4.25,4.25c0,.83-.24,1.64-.69,2.33-.23.35-.13.81.21,1.04.13.08.27.12.41.12.24,0,.48-.12.63-.34.61-.94.94-2.02.94-3.15,0-3.17-2.58-5.75-5.75-5.75Z" />
                  <path d="m12,2.25C7.17,2.25,3.25,6.17,3.25,11c0,1.95.63,3.8,1.82,5.35.25.33.72.39,1.05.13.33-.25.39-.72.13-1.05-.99-1.28-1.51-2.81-1.51-4.43,0-4,3.25-7.25,7.25-7.25s7.25,3.25,7.25,7.25c0,1.62-.52,3.15-1.51,4.43-.25.33-.19.8.13,1.05.14.11.3.16.46.16.22,0,.45-.1.59-.29,1.19-1.54,1.82-3.39,1.82-5.35,0-4.83-3.92-8.75-8.75-8.75Z" />
                  <path d="m15.52,18.03l-.41-1.11c-.4-1.07-1.44-1.78-2.58-1.78h-1.06c-1.14,0-2.18.71-2.58,1.78l-.41,1.11c-.32.85-.2,1.79.31,2.54.51.74,1.36,1.18,2.26,1.18h1.9c.9,0,1.75-.44,2.26-1.18.51-.74.63-1.69.31-2.53h0Z" />
                </svg>
              </div>
              <Link to="/" id={location.pathname === '/' ? 'active' : ''}>
                Your Episodes
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 px-5 py-1  rounded-lg card2">
            <div className="w-full flex items-center justify-center gap-5 text-sm font-sans hover:text-white nav-link duration-300 flex-wrap text-ellipsis overflow-hidden ...">
              <div className="episodes-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  x="0px"
                  y="0px"
                  id="homeIcon"
                  fill="#1DB954"
                >
                  <circle cx="12" cy="11" r="2.75" />
                  <path d="m12,5.25c-3.17,0-5.75,2.58-5.75,5.75,0,1.12.33,2.21.94,3.15.23.34.69.44,1.04.21.35-.23.44-.69.21-1.04-.45-.69-.69-1.49-.69-2.33,0-2.34,1.91-4.25,4.25-4.25s4.25,1.91,4.25,4.25c0,.83-.24,1.64-.69,2.33-.23.35-.13.81.21,1.04.13.08.27.12.41.12.24,0,.48-.12.63-.34.61-.94.94-2.02.94-3.15,0-3.17-2.58-5.75-5.75-5.75Z" />
                  <path d="m12,2.25C7.17,2.25,3.25,6.17,3.25,11c0,1.95.63,3.8,1.82,5.35.25.33.72.39,1.05.13.33-.25.39-.72.13-1.05-.99-1.28-1.51-2.81-1.51-4.43,0-4,3.25-7.25,7.25-7.25s7.25,3.25,7.25,7.25c0,1.62-.52,3.15-1.51,4.43-.25.33-.19.8.13,1.05.14.11.3.16.46.16.22,0,.45-.1.59-.29,1.19-1.54,1.82-3.39,1.82-5.35,0-4.83-3.92-8.75-8.75-8.75Z" />
                  <path d="m15.52,18.03l-.41-1.11c-.4-1.07-1.44-1.78-2.58-1.78h-1.06c-1.14,0-2.18.71-2.58,1.78l-.41,1.11c-.32.85-.2,1.79.31,2.54.51.74,1.36,1.18,2.26,1.18h1.9c.9,0,1.75-.44,2.26-1.18.51-.74.63-1.69.31-2.53h0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.ArtistCard && (
        <div className="gradient-container relative " onClick={openPopUp}>
          <div className="flex flex-col gap-3 items-start relative">
            {selectedSong ? (
              <>
                <img
                  src={selectedSong.artistImg}
                  className="rounded-xl absolute top-0 w-full"
                />
              </>
            ) : (
              <>
                <img
                  src={BillieEilishImg}
                  className="rounded-xl absolute top-0 w-full"
                />
              </>
            )}
            <div className="gradient-overlay"></div>
            <h1
              className="text-white absolute top-3 left-5 text-base"
              style={{ color: 'white' }}
            >
              {' '}
              About the artist
            </h1>
          </div>
          <div className="bg-lightBlack flex flex-col absolute bottom-0 w-full py-4 px-2">
            <h1
              className="text-xl song-name-link hover:underline"
              style={{ color: 'white' }}
            >
              {selectedSong ? selectedSong.songArtists : 'Billie Eilish'}
            </h1>
            <div className="flex justify-between items-center py-2 flex-wrap">
              <h2 className="flex gap-2 items-baseline flex-wrap">
                <span className="text-lg">
                  {' '}
                  {selectedSong ? selectedSong.songStream : '67,767,338'}
                </span>
                <span className="text-sm">Monthly Listeners</span>
              </h2>
              <button
                onClick={toggleFollowed}
                className="py-2 my-2 px-4 bg-grey follow-button rounded-full text-sm"
              >
                {isFollowed ? <span>Follow</span> : <span>Unfollow</span>}
              </button>
            </div>
            <div className="Artist-Bio">
              <h3 className="text-sm">
                {selectedSong ? (
                  selectedSong.aboutArtists
                ) : (
                  <span>
                    With the release of her highly anticipated sophomore album
                    ‘Happier Than Ever,’ the 21-year-old Los Angeles native
                    remains one of the biggest stars to emerge i...
                  </span>
                )}
              </h3>
            </div>
          </div>
        </div>
      )}
      {isPopUpOpen && (
        <div>
          <div className="Popup-container">
            <div className="Popup-content flex flex-col gap-10 relative items-end">
              <div className="bg-grey p-1  close-btn " onClick={closePopUp}>
                <img className="w-4 " src={XmarkIcon} onClick={closePopUp} />
              </div>
              <div className="flex justify-between items-center slideshow">
                <img
                  src={imageUrls[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="Billie-Slideshow"
                />

                <button
                  onClick={nextSlide}
                  className=" p-2 bg-grey follow-button rounded-full text-sm"
                >
                  <img src={ArrLeftIcon} />
                </button>
              </div>
              <div className="flex flex-row gap-8">
                <div className="flex flex-col items-start gap-10">
                  <div className="flex flex-col position px-2 py-4 rounded-full items-center">
                    <span className="text-2xl font-bold">
                      {' '}
                      {selectedSong ? selectedSong.artistsNo : '#7'}
                    </span>
                    <span className="text-xs">In the world</span>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">
                      {' '}
                      {selectedSong ? selectedSong.artistFollow : '88,054,272'}
                    </h1>
                    <h3 className="text-sm ">Followers</h3>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">
                      {' '}
                      {selectedSong ? selectedSong.songStream : '69,767,338'}
                    </h1>
                    <h3 className="text-sm ">Monthly Listeners</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <h1 className="text-base font-bold">
                        {' '}
                        {selectedSong ? selectedSong.listLocOne : 'Jakarta, ID'}
                      </h1>
                      <h3 className="text-sm ">
                        {' '}
                        {selectedSong ? selectedSong.listOne : '1,048,590'}{' '}
                        listeners
                      </h3>
                    </div>
                    <div>
                      <h1 className="text-base font-bold">
                        {' '}
                        {selectedSong
                          ? selectedSong.listLocTwo
                          : 'Mexico City, MX'}
                      </h1>
                      <h3 className="text-sm ">
                        {' '}
                        {selectedSong ? selectedSong.listTwo : '911,781'}{' '}
                        listeners
                      </h3>
                    </div>
                    <div>
                      <h1 className="text-base font-bold">
                        {' '}
                        {selectedSong
                          ? selectedSong.listLocThree
                          : 'London, GB'}
                      </h1>
                      <h3 className="text-sm ">
                        {' '}
                        {selectedSong ? selectedSong.listThree : '894,229'}
                        listeners
                      </h3>
                    </div>
                    <div>
                      <h1 className="text-base font-bold">
                        {' '}
                        {selectedSong ? selectedSong.listLocFour : 'Sydney, AU'}
                      </h1>
                      <h3 className="text-sm ">
                        {' '}
                        {selectedSong
                          ? selectedSong.listFour
                          : '782,856 listeners'}
                      </h3>
                    </div>

                    <div>
                      <h1 className="text-base font-bold">
                        {' '}
                        {selectedSong
                          ? selectedSong.listLocFive
                          : 'São Paulo, BR'}
                      </h1>
                      <h3 className="text-sm ">
                        {' '}
                        {selectedSong
                          ? selectedSong.listFive
                          : '744,634 listeners'}
                      </h3>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base">
                    {selectedSong ? (
                      selectedSong.artistsBio
                    ) : (
                      <ArtistsBio BillieEilish=" " />
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {props.PlaylistCard && (
        <Link to={`/FiltersData/${props.PlaylistTitle}`}>
          <div className="flex flex-row items-center justify-between bg-lightBlack hover:bg-grey rounded-lg pr-3 playlist-container">
            <div className="flex flex-row items-center gap-2">
              <img
                src={props.PlaylistImg}
                className="w-14  rounded-lg xs:w-10"
              />
              <span className="text-white text-base xs:text-sm">
                {props.PlaylistTitle}
              </span>
            </div>
            <div>
              <button className="bg-spGreen rounded-full p-4 playlist-play xs:hidden">
                <img src={PlayIcon} className="w-4" />
              </button>
            </div>
          </div>
        </Link>
      )}
      {props.songCard && (
        <div className="grid grid-cols-3  w-full hover:bg-lightBlack   py-2 rounded-md px-4 items-center song-card xl:justify-between xl:grid-cols-2 md:px-2">
          <div className="flex flex-row items-center gap-2 w-full">
            <div className="song-card-play">
              <h1
                className={`text-white text-base md:text-sm ${
                  isPlaying ? 'spGreen' : ''
                }`}
              >
                {props.songNumber}
              </h1>

              <img
                src={isPlaying ? PauseWhiteIcon : PlayWhiteIcon}
                className="w-3 PlayWhiteIcon"
                onClick={() => {
                  togglePlay(props.audioUrl);
                }}
              />
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={props.songImg} className="w-10 rounded-sm" />
              <div className="flex flex-col">
                <h1
                  className={`text-white text-base md:text-sm ${
                    isPlaying ? 'spGreen' : ''
                  }`}
                >
                  {props.songName}
                </h1>

                <h1 className="text-sm  text-silver md:text-xs">
                  {props.song?.songArtists}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end text-silver text-sm album-test xl:hidden">
            <h1>{props.song?.songAlbum}</h1>
          </div>
          <div className="w-full text-white flex  justify-end md:text-sm">
            <h1>{props.songDuration}</h1>
          </div>
        </div>
      )}
      {props.FeaturesCard && (
        <div className="flex flex-col gap-2 p-4 bg-lightBlack hover:bg-grey rounded-lg w-52  features-card">
          <div className="relative">
            <img src={props.FeatureImg} className="w-full rounded-lg " />
            <button className="bg-spGreen rounded-full p-4 playlist-play bottom-2 right-2 absolute">
              <img src={PlayIcon} className="w-4" />
            </button>
          </div>
          <div className="flex flex-col gap-0">
            <h1 className="text-white">{props.CardTitle}</h1>
            <p className="leading-5 text-sm text-spGrey">{props.Featuring}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
