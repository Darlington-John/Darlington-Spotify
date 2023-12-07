import React, { useState } from 'react';

import Cards from './Cards';

import { useMusic } from './MusicContext';

import { myHitsMix, ambientSongs } from './PlaylistData';

const Playlists = (props) => {
  const { selectedSong, setSelectedSong } = useMusic();

  const [setIsPlaying] = useState(false);

  const handleTogglePlay = (audioUrl) => {
    const ambientSong = ambientSongs.find((song) => song.audioUrl === audioUrl);

    const myHitsSong = myHitsMix.find((song) => song.audioUrl === audioUrl);

    const selectedSong = ambientSong || myHitsSong;

    setSelectedSong(selectedSong);
  };
  return (
    <>
      {props.Ambients && (
        <div>
          {ambientSongs.map((song) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                ambientSongs={props.ambientSongs}
              />
            </div>
          ))}
        </div>
      )}
      {/* {props.Eilish && (
        <div>
          {eilishMix.map((song) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                eilishMix={props.eilishMix}
              />
            </div>
          ))}
        </div>
      )} */}
      {/* {props.lifeSucks && (
        <div>
          {lifeSucksMix.map((song) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                lifeSucksMix={props.lifeSucksMix}
              />
            </div>
          ))}
        </div>
      )} */}
      {props.myHits && (
        <div>
          {myHitsMix.map((song) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                myHitsMix={props.myHitsMix}
              />
            </div>
          ))}
        </div>
      )}
      {/* {props.myGospel && (
        <div>
          {myGospel.map((song) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                myGospelMix={props.myGospelMix}
              />
            </div>
          ))}
        </div>
      )} */}
    </>
  );
};
export default Playlists;
