import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';
import PlaylistPage from '../Pages/Playlist/PlaylistPage';
import NowPlaying from '../Components/NowPlaying';
import LikedPlaylistPage from '../Pages/LikedPlaylist/LikedPlaylistPage';
import CreatedPlaylist from '../Pages/CreatedPlaylist/CreatedPlaylistPage';
import SearchPage from '../Pages/Search/SearchPage';
require('events').EventEmitter.defaultMaxListeners = 40;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
        <Route path="FiltersData/:PlaylistTitle" element={<PlaylistPage />} />{' '}
        <Route path="mixData/:CardTitle" element={<PlaylistPage />} />{' '}
        <Route path="/likedSongs" element={<LikedPlaylistPage />} />{' '}
        <Route
          path="/CreatedPlaylist/:playlistId"
          element={<CreatedPlaylist />}
        />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>{' '}
      <NowPlaying nowPlayingMobile=" " />
    </BrowserRouter>
  );
}

export default App;

