import React, { useState, useRef } from 'react';

import Cards from './Cards';

import { useMusic } from './MusicContext';
import {
  eilishMix,
  lifeSucksMix,
  ambientSongs,
  myHitsMix,
  myGospel,
} from './ArrayData';

export const PlayListGroup = (props) => {
  return (
    <div>
      <div className="grid-table grid grid-cols-3 text-white md:hidden px-4  border-b border-grey xl:justify-between xl:grid-cols-2">
        <div className="grid-cell heading flex gap-2 py-3">
          <h1>{props.number}</h1>
          <h1>{props.title}</h1>
        </div>
        <div className="grid-cell heading py-3 flex justify-end xl:hidden">
          <h1> {props.album}</h1>
        </div>

        <div className="grid-cell flex  justify-end py-3">
          <img src={props.duration} className="w-4" />
        </div>
      </div>
    </div>
  );
};

export const Playlists = (props) => {
  const { selectedSong, setSelectedSong } = useMusic();

  const [setIsPlaying] = useState(false);

  const handleTogglePlay = (audioUrl) => {
    const ambientSong = ambientSongs.find((song) => song.audioUrl === audioUrl);
    const eilishSong = eilishMix.find((song) => song.audioUrl === audioUrl);
    const lifeSucksSong = lifeSucksMix.find(
      (song) => song.audioUrl === audioUrl,
    );
    const myHitsSong = myHitsMix.find((song) => song.audioUrl === audioUrl);
    const myGospelSong = myGospel.find((song) => song.audioUrl === audioUrl);
    const selectedSong =
      ambientSong || eilishSong || lifeSucksSong || myHitsSong || myGospelSong;

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
      {props.Eilish && (
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
      )}
      {props.lifeSucks && (
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
      )}
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
      {props.myGospel && (
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
      )}
    </>
  );
};

export default PlayListGroup;
