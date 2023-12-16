import React from 'react';
import { useMusic } from './MusicContext';
import ellipsisIcon from './../Assets/Icons/ellipsis.svg';
const PlaylistDropdown = ({ song, playlists, onPlaylistSelect }) => {
  const { addSongToPlaylist } = useMusic();

  const handlePlaylistSelect = (e) => {
    const selectedPlaylistId = e.target.value;
    onPlaylistSelect(selectedPlaylistId);
  };

  return (
    <div className="dropdown">
      <span>Add to Playlist:</span>
      <img src={ellipsisIcon} className="w-4" />
      {/* <select onChange={handlePlaylistSelect}>
        <option value="" disabled>
          Select Playlist
        </option>
        {playlists.map((playlist) => (
          <option key={playlist.id} value={playlist.id}>
            {playlist.name}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default PlaylistDropdown;
