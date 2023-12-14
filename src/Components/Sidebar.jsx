import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const sidebar1Ref = useRef(null);
  const sidebar2Ref = useRef(null);
  const [sidebar1Width, setSidebar1Width] = useState(300);
  const [setSidebar2Width] = useState(400);
  const [isResizing1, setIsResizing1] = useState(false);
  const [isResizing2, setIsResizing2] = useState(false);

  const startResizing1 = useCallback(() => {
    setIsResizing1(true);
  }, []);

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
    [isResizing1],
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
  const [playlistName, setPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [songs, setSongs] = useState([]);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/createPlaylist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: playlistName,
          songs: songs.map((song) => song.name), // Send only song names to the server
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create playlist');
      }

      const data = await response.json();
      console.log('Playlist created:', data);

      setPlaylists((prevPlaylists) => [...prevPlaylists, data]);

      // Reset the playlistName and songs states after creating a playlist
      setPlaylistName('');
      setSongs([]);
    } catch (error) {
      console.error('Error creating playlist:', error);
    }
  };

  // const handleAddSong = () => {
  //   setSongs((prevSongs) => [...prevSongs, { name: songName }]);
  //   setSongName('');
  // };

  return (
    <div
      ref={sidebar1Ref}
      className="app-sidebar bg-deepBlack"
      id="sidebar-container"
      style={{ width: sidebar1Width }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="app-sidebar-content ">
        <Cards
          navbarCards=" "
          navbarLibrary=" "
          navbarCardsAlbum=" "
          navbarCardsLike=" "
          createdPlaylist=" "
        />
      </div>
      <div className="app-sidebar-resizer" onMouseDown={startResizing1}></div>
    </div>
  );
};

export default SideBar;
