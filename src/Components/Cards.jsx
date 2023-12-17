import React from 'react';
import { Link } from 'react-router-dom';

import BillieEilishImg from './../Assets/Images/BillieEilish.jpg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import LikeIcon from './../Assets/Icons/Like.svg';
import LikeActiveIcon from './../Assets/Icons/LikeActive.svg';
import BillieForestImg from './../Assets/Images/BillieForest.jpg';
import BillieRedImg from './../Assets/Images/BillieRed.jpg';
import BillieEilishGreenImg from './../Assets/Images/BillieEilishGreen.jpg';
import BillieAnacondaImg from './../Assets/Images/BillieAnaconda.jpg';
import LikedSongsImg from './../Assets/Images/LikedSongs.png';
import ArrLeftIcon from './../Assets/Icons/ArrLeft.svg';
import PlusCircleIcon from './../Assets/Icons/PlusCircle.svg';
import PlusIcon from './../Assets/Icons/Plus.svg';
import XmarkIcon from './../Assets/Icons/Xmark.svg';
import PlayWhiteIcon from './../Assets/Icons/PlayWhite.svg';
import PlayIcon from './../Assets/Icons/Play.svg';
import MusicIcon from './../Assets/Icons/Music.svg';
import EpisodeIcon from './../Assets/Icons/Episode.svg';

import VerEllipsisIcon from './../Assets/Icons/VerEllipsis.svg';
import PauseWhiteIcon from './../Assets/Icons/PauseWhite.svg';

import { useMusic } from './MusicContext';
import ArtistsBio from './ArtistsBio';
import CreatedPlaylistPageBody from '../Pages/CreatedPlaylist/CreatedPlaylistPageBody';
import PlaylistDropdown from './Dropdown';
const Cards = (props) => {
  const {
    selectedSong,
    toggleLike,
    likedSongs,
    likedSongsCount,
    createPlaylist,
    toggleAdded,
    addedSongs,
    addedSongsTwo,

    toggleAddedTwo,
    toggleAddedThree,
    addedSongsThree,
    toggleAddedFour,
    addedSongsFour,
    toggleAddedFive,
    addedSongsFive,
  } = useMusic();
  const [showMessage, setShowMessage] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [showAddedMessageTwo, setShowAddedMessageTwo] = useState(false);
  const [showAddedMessageThree, setShowAddedMessageThree] = useState(false);
  const [showAddedMessageFour, setShowAddedMessageFour] = useState(false);
  const [showAddedMessageFive, setShowAddedMessageFive] = useState(false);
  // const {
  //   isLike,

  //   toggleLike,
  // } = useMusic();
  const onPlaylistSelect = props;
  const handlePlaylistSelect = (e) => {
    const selectedPlaylistId = e.target.value;
    onPlaylistSelect(selectedPlaylistId);
  };
  const isLiked = likedSongs.some(
    (likedSong) => likedSong.songDuration === props.songDuration,
  );
  const isAdded = addedSongs.some(
    (addedSong) => addedSong.songDuration === props.songDuration,
  );
  const isAddedTwo = addedSongsTwo.some(
    (addedSongTwo) => addedSongTwo.songDuration === props.songDuration,
  );
  const isAddedThree = addedSongsThree.some(
    (addedSongThree) => addedSongThree.songDuration === props.songDuration,
  );
  const isAddedFour = addedSongsFour.some(
    (addedSongFour) => addedSongFour.songDuration === props.songDuration,
  );
  const isAddedFive = addedSongsFive.some(
    (addedSongFive) => addedSongFive.songDuration === props.songDuration,
  );
  const handleToggleLike = () => {
    toggleLike(props);
    setShowMessage(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };
  const handleToggleAddedTwo = () => {
    toggleAddedTwo(props);
    setShowAddedMessageTwo(true);

    // Hide the messageTwo after 3 seconds
    setTimeout(() => {
      setShowAddedMessageTwo(false);
    }, 1000);
  };
  const handleToggleAddedThree = () => {
    toggleAddedThree(props);
    setShowAddedMessageThree(true);

    // Hide the messageThree after 3 seconds
    setTimeout(() => {
      setShowAddedMessageThree(false);
    }, 1000);
  };
  const handleToggleAddedFour = () => {
    toggleAddedFour(props);
    setShowAddedMessageFour(true);

    // Hide the messageFour after 3 seconds
    setTimeout(() => {
      setShowAddedMessageFour(false);
    }, 1000);
  };
  const handleToggleAddedFive = () => {
    toggleAddedFive(props);
    setShowAddedMessageFive(true);

    // Hide the messageFive after 3 seconds
    setTimeout(() => {
      setShowAddedMessageFive(false);
    }, 1000);
  };

  const handleToggleAdded = () => {
    toggleAdded(props);
    setShowAddedMessage(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 1000);
  };

  const location = useLocation();
  const handleResize = () => {
    const navbarCardsContainer = document.querySelectorAll(
      '.navbar-cards-container',
    );

    navbarCardsContainer.forEach((container) => {
      const card1 = container.querySelector('.card1');
      const card2 = container.querySelector('.card2');

      const containerWidth = container.clientWidth;
      if (containerWidth <= 250) {
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
  const [createdPlaylists, setCreatedPlaylists] = useState(
    JSON.parse(localStorage.getItem('createdPlaylists')) || [],
  );

  // Save playlists to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('createdPlaylists', JSON.stringify(createdPlaylists));
  }, [createdPlaylists]);

  const handleCreatePlaylist = () => {
    const newPlaylist = {
      id: createdPlaylists.length + 1,
      name: `My Playlist #${createdPlaylists.length + 1}`, // Default name
      imgSrc: LikedSongsImg, // Default image
    };

    setCreatedPlaylists([...createdPlaylists, newPlaylist]);
  };

  const updatePlaylist = (playlistId, newName) => {
    setCreatedPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        playlist.id === Number(playlistId)
          ? { ...playlist, name: newName }
          : playlist,
      ),
    );
  };
  const { playlistDetails, playlists } = useMusic();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.getElementById('playlistPopup');

      if (popup && !popup.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  const togglePopup = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const dropdownRef = useRef(null);
  const handleBtnClick = () => {
    if (dropdownRef.current) {
      dropdownRef.current.click();
    }
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
    togglePopup();
    handleBtnClick();
  };

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
              <Link
                to="/"
                id={location.pathname === '/' ? 'active' : ''}
                className="text-silver"
              >
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
                  className={
                    location.pathname === '/SearchPage' ? 'active' : ''
                  }
                />
              </svg>
              <Link
                to="/SearchPage"
                id={location.pathname === '/SearchPage' ? 'active' : ''}
                className="text-silver"
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
        <div
          className="w-full flex flex-col gap-8 rounded-lg navbar-cards-container cursor-pointer"
          onClick={createPlaylist}
        >
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
              <h1>Create Playlist</h1>
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

      {props.ArtistCard && (
        <div className="gradient-container  flex flex-col ">
          <div
            className="flex flex-col gap-3 items-start relative rounded-t-lg"
            onClick={openPopUp}
          >
            {selectedSong ? (
              <>
                <img
                  src={selectedSong.artistImg}
                  className=" w-full rounded-t-xl max-h-80 object-cover"
                />
              </>
            ) : (
              <>
                <img
                  src={BillieEilishImg}
                  className=" w-full rounded-t-xl max-h-80 object-cover"
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
          <div className="bg-lightBlack flex flex-col  w-full py-4 px-2 rounded-b-xl">
            <h1
              className="text-xl song-name-link hover:underline"
              style={{ color: 'white' }}
            >
              {selectedSong ? selectedSong.songArtistMain : 'Billie Eilish'}
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
                className="py-2 my-2 px-4 bg-grey follow-button rounded-full text-sm z-10"
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
        <div
          className={`grid grid-cols-3  w-full hover:bg-lightBlack   py-2 rounded-md px-4 items-center song-card xl:justify-between xl:grid-cols-2 md:px-2 ${
            isOpen ? 'spGreen bg-grey hover:bg-grey' : ''
          }`}
          onDoubleClick={() => {
            togglePlay(props.audioUrl);
          }}
        >
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
          <div className="w-full text-white flex  justify-end items-center md:text-sm gap-12">
            <button onClick={handleToggleLike} className="like-btn">
              {isLiked ? (
                <img src={LikeActiveIcon} className="w-4 " alt="" />
              ) : (
                <img src={LikeIcon} className="w-4 like-img" alt="" />
              )}
            </button>
            <div className="flex item-center justify-end gap-1">
              <h1>{props.songDuration}</h1>
              <div className="dropdown relative flex item-center justify-end w-4 ">
                <img
                  src={VerEllipsisIcon}
                  className="w-4"
                  onClick={handleButtonClick}
                />
                {isOpen && (
                  // <select
                  //   onChange={handlePlaylistSelect}
                  //   id="playlistPopup"
                  //   ref={dropdownRef}
                  // >
                  //   <option value="" disabled>
                  //     Select Playlist
                  //   </option>
                  //   {playlists.map((playlist) => (
                  //     <option key={playlist.id} value={playlist.id}>
                  //       {playlist.name}
                  //     </option>
                  //   ))}
                  // </select>
                  <div
                    className="add-dropdown w-56  rounded-lg p-1 bg-grey absolute right-0 bottom-0 flex flex-col   bg-grey z-40 "
                    id="playlistPopup"
                    ref={dropdownRef}
                  >
                    <div className="flex items-center justify-center  w-full   p-2 rounded-lg">
                      <h1 className="text-base ">Add to Playlist</h1>
                    </div>

                    <div
                      className="flex items-center justify-between  w-full bg-grey  z-40 p-2 hover:bg-lightBlack rounded-lg cursor-pointer"
                      onClick={createPlaylist}
                    >
                      <h1 className="text-sm ">Create Playlist</h1>
                      <img src={PlusCircleIcon} className="w-4 " alt="" />
                    </div>
                    {playlists.map((playlist, index) => (
                      //  <option key={playlist.id} value={playlist.id}>
                      //    {playlist.name}
                      //         </option>

                      <div
                        // className="flex items-center justify-between  w-full bg-grey  z-40 p-2 hover:bg-lightBlack rounded-lg cursor-pointer"
                        className={`flex items-center gap-3  w-full bg-grey  z-40 p-2 hover:bg-lightBlack rounded-lg cursor-pointer  ${
                          location.pathname ===
                          `/CreatedPlaylist/${playlist.id}`
                            ? 'bg-lightBlack hidden'
                            : ''
                        }`}
                        key={playlist.id}
                        onClick={() => {
                          if (index === 1) {
                            handleToggleAddedTwo();
                          } else if (index === 2) {
                            handleToggleAddedThree();
                          } else if (index === 3) {
                            handleToggleAddedFour();
                          } else if (index === 4) {
                            handleToggleAddedFive();
                          } else {
                            handleToggleAdded();
                          }
                        }}
                      >
                        <img
                          src={playlist.imgSrc}
                          alt={`Playlist ${playlist.id}`}
                          className=" w-8 rounded-md object-cover h-8"
                        />
                        <h1 className="text-sm ">{playlist.name}</h1>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {props.FeaturesCard && (
        <Link to={`/mixData/${props.CardTitle}`}>
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
        </Link>
      )}

      {props.likedPlaylist && (
        <div className="w-full flex items-center justify-center gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 ">
          <div className="flex items-center justify-center w-auto p-5 rounded-md bg-silver">
            <img src={MusicIcon} className="w-4" />
          </div>
          <div className="flex flex-col items-start justify-between">
            <h1>{props.playlistName}</h1>
            <div className="flex flex-row gap-3 items-center">
              <h1>playlist</h1>
              <h1>.</h1>
              <h1>Darlington</h1>
            </div>
          </div>
        </div>
      )}

      <>
        {' '}
        {props.navbarCardsLike && (
          <Link to="/likedSongs">
            <div
              className={`w-full flex flex-col gap-8 rounded-lg navbar-cards-container hover:bg-lightBlack ${
                location.pathname === '/likedSongs' ? 'bg-lightBlack' : ''
              }`}
            >
              <div className="w-full flex flex-col gap-8 px-5 py-1  rounded-lg card1">
                <div className="w-full flex items-center justify-start gap-3 text-sm font-sans hover:text-white nav-link duration-300 flex-wrap ">
                  <div className="flex items-center justify-center bg-silver  rounded-md ">
                    <img src={LikedSongsImg} className="  w-12 rounded-md" />
                  </div>

                  <div className="flex flex flex-col gap-1 text-base">
                    <Link
                      to="/likedSongs"
                      id={location.pathname === '/likedSongs' ? 'active' : ''}
                    >
                      Liked songs
                    </Link>
                    <div className="flex flex-row gap-1 text-sm text-silver">
                      <h1>Playlist</h1>
                      <h1>.</h1>
                      <h1>{likedSongsCount} songs</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-8 px-5 py-1  rounded-lg card2">
                <div className="w-full flex items-center justify-center gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 flex-wrap text-ellipsis overflow-hidden ...">
                  <img src={LikedSongsImg} className="w-12 rounded-md" />
                </div>
              </div>
            </div>
          </Link>
        )}
      </>

      {showMessage && (
        <div className="liked-message">
          {isLiked ? (
            <p className="add-message">
              <img src={LikedSongsImg} className="hover-img  w-8 rounded-md" />
              Added to liked songs
            </p>
          ) : (
            <p className="remv-message">Removed from liked songs</p>
          )}
        </div>
      )}

      {showAddedMessage && (
        <div className="liked-message">
          {isAdded ? (
            <p className="add-message items-center flex gap-3">
              <img src={PlusIcon} className="hover-img  w-4 rounded-md" />
              Added to Playlist
            </p>
          ) : (
            <p className="remv-message">Removed from Playlist</p>
          )}
        </div>
      )}
      {showAddedMessageTwo && (
        <div className="liked-message">
          {isAddedTwo ? (
            <p className="add-message items-center flex gap-3">
              <img src={PlusIcon} className="hover-img  w-4 rounded-md" />
              Added to Playlist
            </p>
          ) : (
            <p className="remv-message">Removed from playlist</p>
          )}
        </div>
      )}
      {showAddedMessageThree && (
        <div className="liked-message">
          {isAddedThree ? (
            <p className="add-message items-center flex gap-3">
              <img src={PlusIcon} className="hover-img  w-4 rounded-md" />
              Added to Playlist
            </p>
          ) : (
            <p className="remv-message">Removed from playlist</p>
          )}
        </div>
      )}
      {showAddedMessageFour && (
        <div className="liked-message">
          {isAddedFour ? (
            <p className="add-message items-center flex gap-3">
              <img src={PlusIcon} className="hover-img  w-4 rounded-md" />
              Added to Playlist
            </p>
          ) : (
            <p className="remv-message">Removed from playlist</p>
          )}
        </div>
      )}
      {showAddedMessageFive && (
        <div className="liked-message">
          {isAddedFive ? (
            <p className="add-message items-center flex gap-3">
              <img src={PlusIcon} className="hover-img  w-4 rounded-md" />
              Added to Playlist
            </p>
          ) : (
            <p className="remv-message">Removed from playlist</p>
          )}
        </div>
      )}
      {props.createdPlaylist && (
        <>
          {playlists.map((playlist) => (
            <Link
              to={`/CreatedPlaylist/${playlist.id}?imgSrc=${encodeURIComponent(
                playlist.imgSrc,
              )}`}
              key={playlist.id}
            >
              <div
                className={`w-full flex flex-col gap-8 rounded-lg navbar-cards-container hover:bg-lightBlack ${
                  location.pathname === `/CreatedPlaylist/${playlist.id}`
                    ? 'bg-lightBlack'
                    : ''
                }`}
              >
                <div className="w-full flex flex-col gap-8 px-5 py-1  rounded-lg card1">
                  <div className="w-full flex items-center justify-start gap-3 text-sm font-sans hover:text-white nav-link duration-300 flex-wrap ">
                    <div className="flex items-center justify-center bg-silver  rounded-md ">
                      {/* <img src={LikedSongsImg} className="  w-12 rounded-md" /> */}
                      <img
                        src={playlist.imgSrc}
                        alt={`Playlist ${playlist.id}`}
                        className=" w-12 rounded-md object-cover h-12"
                      />
                    </div>

                    <div className="flex flex flex-col gap-1 text-base ">
                      <Link
                        to={`/CreatedPlaylist/${
                          playlist.id
                        }?imgSrc=${encodeURIComponent(playlist.imgSrc)}`}
                      >
                        {playlist.name}
                      </Link>

                      <div className="flex flex-row gap-1 text-sm text-silver">
                        <h1>Playlist</h1>
                        <h1>.</h1>
                        <h1>Jxt Darlington</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-8 px-5 py-1  rounded-lg card2">
                  <div className="w-full flex items-center justify-center gap-5 text-base font-bold font-sans hover:text-white nav-link duration-300 flex-wrap text-ellipsis overflow-hidden ...">
                    <img
                      src={playlist.imgSrc}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default Cards;
