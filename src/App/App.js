import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';
import PlaylistPage from '../Pages/Playlist/PlaylistPage';
import NowPlaying from '../Components/NowPlaying';
require('events').EventEmitter.defaultMaxListeners = 40;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />{' '}
        <Route path="FiltersData/:PlaylistTitle" element={<PlaylistPage />} />{' '}
        <Route path="mixData/:CardTitle" element={<PlaylistPage />} />{' '}
      </Routes>{' '}
      <NowPlaying nowPlayingMobile=" " />
    </BrowserRouter>
  );
}

export default App;
