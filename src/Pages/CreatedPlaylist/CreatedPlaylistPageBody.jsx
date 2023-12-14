import React, { useState, useEffect, useRef } from 'react';

import { useParams, useLocation } from 'react-router-dom';
import SideBar from '../../Components/Sidebar';
import NavBar, { MobileNavbar } from '../../Components/Navbar';
import OverLay from '../../Components/Overlay';
import SideBarRight from '../../Components/SidebarRight';
import Bottombar from '../../Components/Bottombar';
import { useMusic } from '../../Components/MusicContext';
import EditIcon from './../../Assets/Icons/Edit.svg';
const CreatedPlaylistPageBody = () => {
  const { playlistId } = useParams();
  const { playlists, updatePlaylistName } = useMusic();
  const [playlistName, setPlaylistName] = useState('');
  const [playlistImage, setPlaylistImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Load the playlist image from localStorage when the component mounts
    const storedImage = localStorage.getItem(`playlistImage-${playlistId}`);
    setPlaylistImage(storedImage || null);
  }, [playlistId]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.getElementById('popup');

      if (popup && !popup.contains(event.target)) {
        // Click outside the popup, close it
        setIsOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []); // The empty dependency array ensures that the effect runs only once

  const togglePopup = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const handleButtonClick = (event) => {
    // Prevent the click event from propagating to the document
    event.stopPropagation();
    togglePopup();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target.result;
        setPlaylistImage(imageUrl);
        localStorage.setItem('playlistImage', imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const currentPlaylist = playlists.find(
    (playlist) => playlist.id === Number(playlistId),
  );

  useEffect(() => {
    if (currentPlaylist) {
      setPlaylistName(currentPlaylist.name);
    }
  }, [currentPlaylist]);

  const handleNameChange = (newName) => {
    setPlaylistName(newName);
  };
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleSaveClick = () => {
    updatePlaylistName(playlistId, playlistName, playlistImage);
    setIsOpen(false);
  };
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const imgSrcFromCard = queryParams.get('imgSrc');

  return (
    // <div>
    //   <h1>Playlist Details for #{playlistId}</h1>

    // </div>
    <div className="app-container md:p-0">
      <SideBar />
      <div className="app-frame md:p-0">
        <NavBar />

        <MobileNavbar plalistName="Liked Songs" playlistBack=" " />
        <OverLay />
        <div className="created-playlist-Gradient flex flex-col  ">
          <div
            className="flex flex-row items-end gap-3 text-white px-5  pt-16 md:pt-10 md:pb-0 pb-5 flex-wrap "
            onClick={handleButtonClick}
          >
            {imgSrcFromCard && (
              <div className="edit-image-container w-60 h-60 relative bg-transparent ">
                {playlistImage ? (
                  <img
                    src={playlistImage}
                    alt="Selected Playlist Image"
                    className="w-60 h-60 object-cover"
                  />
                ) : (
                  <img
                    src={imgSrcFromCard}
                    alt="Default Playlist Image"
                    className="w-60 h-60 object-cover"
                  />
                )}

                {/* <img
                  src={imgSrcFromCard}
                  alt={`Playlist ${playlistId}`}
                  className="w-full edit-image"
                /> */}
                <div className=" edit-image flex flex-col gap-3 items-center justify-center">
                  <img src={EditIcon} className="w-14" />
                  <h1>Choose Photo</h1>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-2 ">
              <h1 className="text-base">Playlist </h1>
              <h1 className=" text-8xl    font-bold md:text-6xl xs:text-4xl">
                {playlistName.length > 0 ? (
                  <h1>{playlistName}</h1>
                ) : (
                  <h1>My Playlist #{playlistId}</h1>
                )}
              </h1>

              {/* <h1 className=" text-sm ">
                Jxt Darlington {likedSongsCount} songs
              </h1> */}
            </div>
          </div>
          <div className="flex flex-col transBlackLight  p-5 md:px-2 md:pt-0 gap-5">
            {/* {likedSongs.length > 0 ? (
              <PlayListGroup
                duration={ClockIcon}
                album="Album"
                title="Title"
                number="#"
              />
            ) : (
              ' '
            )} */}
            {/* <div className="text-white">
              {likedSongs.length > 0 ? (
                likedSongs.map((song, index) => (
                  <div key={song.id}>
                    <Cards
                      {...song}
                      songNumber={index + 1}
                      isPlaying={song.audioUrl === selectedSong?.audioUrl}
                      togglePlay={() => handleTogglePlay(song.audioUrl)}
                      setIsPlaying={setIsPlaying}
                      isLiked
                    />
                  </div>
                ))
              ) : (
                <div className="text-center py-12 flex flex-col items-center gap-2">
                  <img className="w-20 mx-auto" src={AltoIcon} />
                  <h1 className="font-bold text-3xl">
                    Songs you like will appear here
                  </h1>
                  <h1 className="text-base">
                    Save songs by tapping the heart icon
                  </h1>
                </div>
              )}
            </div> */}
            <div className="text-white">
              <h1>Playlist Details for #{playlistId}</h1>
            </div>
          </div>
        </div>
      </div>
      <SideBarRight />
      <Bottombar />
      {isOpen && (
        <div className="w-screen h-screen fixed  flex items-center justify-center bg-transBlack z-50">
          <div
            id="popup"
            className="popup text-white p-10 bg-lightBlack text-xl rounded-lg flex gap-4"
          >
            <div>
              {imgSrcFromCard && (
                <div className="edit-image-container w-60 h-60 relative bg-transparent ">
                  {playlistImage ? (
                    <img
                      src={playlistImage}
                      alt="Selected Playlist Image"
                      className="w-60 h-60 object-cover"
                    />
                  ) : (
                    <img
                      src={imgSrcFromCard}
                      alt="Default Playlist Image"
                      className="w-60 h-60 object-cover"
                    />
                  )}
                  {/* <img
                  src={imgSrcFromCard}
                  alt={`Playlist ${playlistId}`}
                  className="w-full edit-image"
                /> */}{' '}
                  <div
                    className=" edit-image flex flex-col gap-3 items-center justify-center "
                    onClick={handleDivClick}
                  >
                    <img src={EditIcon} className="w-14" />
                    <h1>Choose Photo</h1>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-between items-end">
              <div>
                <p className="text-xs font-bold">Name:</p>
                <input
                  type="text"
                  className="text-white p-2 rounded-md bg-grey text-base"
                  value={playlistName}
                  onChange={(e) => handleNameChange(e.target.value)}
                />
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <button
                onClick={handleSaveClick}
                className="bg-spGrey rounded-full text-deepBlack p-2 px-5 text-base"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatedPlaylistPageBody;
