import React, { useState } from 'react';

import Cards from './Cards';

import { useMusic } from './MusicContext';

import { myHitsMix, ambientSongs } from './PlaylistData';
import { eilishMix } from './EilishMix';

const Playlists = (props) => {
  const { selectedSong, setSelectedSong } = useMusic();

  const [setIsPlaying] = useState(false);

  const handleTogglePlay = (audioUrl) => {
    const ambientSong = ambientSongs.find((song) => song.audioUrl === audioUrl);
    const eilishSong = eilishMix.find((song) => song.audioUrl === audioUrl);
    const myHitsSong = myHitsMix.find((song) => song.audioUrl === audioUrl);

    const selectedSong = ambientSong || myHitsSong || eilishSong;

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
                artistsBio={song.artistsBio}
                aboutArtists={song.aboutArtists}
              />
            </div>
          ))}
        </div>
      )}

      {props.myHits && (
        <div>
          {myHitsMix.map((song, index) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                myHitsMix={props.myHitsMix}
                artistsBio={song.artistsBio}
                aboutArtists={song.aboutArtists}
                songNumber={index + 1}
              />
            </div>
          ))}
        </div>
      )}
            {props.eilish && (
        <div>
          {eilishMix.map((song, index) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                eilishMix={props.eilishMix}
                artistsBio={song.artistsBio}
                aboutArtists={song.aboutArtists}
                songNumber={index + 1}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Playlists;