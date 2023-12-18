import React from 'react';

import ellipsisIcon from './../Assets/Icons/ellipsis.svg';
const PlaylistDropdown = () => {
  return (
    <div className="dropdown">
      <span>Add to Playlist:</span>
      <img src={ellipsisIcon} className="w-4" />
    </div>
  );
};

export default PlaylistDropdown;
