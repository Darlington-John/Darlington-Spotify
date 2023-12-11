import LikedPlaylistPageBody from './LikedPlaylistPageBody';
import React, { useState, useEffect } from 'react';

const LikedPlaylistPage = () => {
  const [likedSongs, setLikedSongs] = useState([]);

  return (
    <div className="bg-deepBlack">
      <LikedPlaylistPageBody likedSongs={likedSongs} />
    </div>
  );
};

export default LikedPlaylistPage;
