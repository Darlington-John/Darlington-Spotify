import LikedPlaylistPageBody from './LikedPlaylistPageBody';
import React, { useState } from 'react';

const LikedPlaylistPage = () => {
  const [likedSongs] = useState([]);

  return (
    <div className="bg-deepBlack">
      <LikedPlaylistPageBody likedSongs={likedSongs} />
    </div>
  );
};

export default LikedPlaylistPage;
