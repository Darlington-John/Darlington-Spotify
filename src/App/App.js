import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import HomePage from '../Pages/HomePage';
import PlaylistPage from '../Pages/PlaylistPage';
import NowPlaying from '../Components/NowPlaying';
import LikedPlaylistPage from '../Pages/LikedPlaylistPage';
import CreatedPlaylist from '../Pages/CreatedPlaylistPage';
import SearchPage from '../Pages/SearchPage';
import { CallbackPage } from '../Pages/callback-page';
import Profile from '../Pages/profile';
import { PageLoader } from '../Components/PageLoader';
import Layout from '../Components/PageLayout';


function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return (

      <PageLoader/>

    );
  }
  return (
<>
<Layout>
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
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>

      </Layout>
      <NowPlaying nowPlayingMobile=" " />
      </>
  );
}

export default App;