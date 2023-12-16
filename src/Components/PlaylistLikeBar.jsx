import React from 'react';

import ListIcon from './../Assets/Icons/List.svg';
import PauseIcon from './../Assets/Icons/Pause.svg';
import PlayIcon from './../Assets/Icons/Play.svg';

import { useState } from 'react';

import LikeIcon from './../Assets/Icons/Like.svg';
import LikeActiveIcon from './../Assets/Icons/LikeActive.svg';
import { useMusic } from './MusicContext';
import { ambientSongs, myHitsMix } from './PlaylistData';
import { lifeSucksMix } from './LifeSucksMix';

import { eilishMix } from './EilishMix';
import { myGospel } from './MyGospel';
const PlaylistLikeBar = (props) => {
  const {
    currentPlaylist,
    setCurrentPlaylist,
    handleChangePlaylist,
    playFirstSong,
    isPlaying,
    likedSongs,
  } = useMusic();
  const [isLike, setIsLike] = useState(false);
  const toggleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="flex flex-row items-center justify-between sticky top-0  bg-transparent py-2  md:pt-4">
      <div className="flex flex-row gap-6 items-center md:justify-between md:w-full">
        {props.ambientPlaylistSwitch && (
          <button
            className="bg-spGreen rounded-full p-4 md:order-2"
            onClick={() => {
              handleChangePlaylist('ambientSongs');
              playFirstSong(ambientSongs);
            }}
          >
            {isPlaying ? (
              <img src={PauseIcon} className="w-5" />
            ) : (
              <img src={PlayIcon} className="w-5" />
            )}
          </button>
        )}
        {props.myHitsMixPlaylistSwitch && (
          <button
            className="bg-spGreen rounded-full p-4 md:order-2"
            onClick={() => {
              handleChangePlaylist('myHitsMix');
              playFirstSong(myHitsMix);
            }}
          >
            {isPlaying ? (
              <img src={PauseIcon} className="w-5" />
            ) : (
              <img src={PlayIcon} className="w-5" />
            )}
          </button>
        )}
        {props.eilishMixPlaylistSwitch && (
          <button
            className="bg-spGreen rounded-full p-4 md:order-2"
            onClick={() => {
              handleChangePlaylist('eilishMix');
              playFirstSong(eilishMix);
            }}
          >
            {isPlaying ? (
              <img src={PauseIcon} className="w-5" />
            ) : (
              <img src={PlayIcon} className="w-5" />
            )}
          </button>
        )}
        {props.lifeSucksMixPlaylistSwitch && (
          <button
            className="bg-spGreen rounded-full p-4 md:order-2"
            onClick={() => {
              handleChangePlaylist('lifeSucksMix');
              playFirstSong(lifeSucksMix);
            }}
          >
            {isPlaying ? (
              <img src={PauseIcon} className="w-5" />
            ) : (
              <img src={PlayIcon} className="w-5" />
            )}
          </button>
        )}
        {props.myGospelPlaylistSwitch && (
          <button
            className="bg-spGreen rounded-full p-4 md:order-2"
            onClick={() => {
              handleChangePlaylist('myGospel');
              playFirstSong(myGospel);
            }}
          >
            {isPlaying ? (
              <img src={PauseIcon} className="w-5" />
            ) : (
              <img src={PlayIcon} className="w-5" />
            )}
          </button>
        )}
        {props.likedSongsPlaylistSwitch && (
          <button
            className="bg-spGreen rounded-full p-4 md:order-2"
            onClick={() => {
              handleChangePlaylist('likedSongs');
              playFirstSong(likedSongs);
            }}
          >
            {isPlaying ? (
              <img src={PauseIcon} className="w-5" />
            ) : (
              <img src={PlayIcon} className="w-5" />
            )}
          </button>
        )}
        <button onClick={toggleLike} className="md:order-1 md:ml-4">
          {isLike ? (
            <img src={LikeActiveIcon} className="w-8 md:w-6" alt="" />
          ) : (
            <img src={LikeIcon} className="w-8 md:w-6" alt="" />
          )}
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center md:hidden">
        <button className="py-2 px-4 bg-grey text-base nav-btn rounded-full flex gap-2 items-center text-white">
          <span>List</span>
          <img src={ListIcon} className="w-4" alt="" />
        </button>
      </div>
    </div>
  );
};

export default PlaylistLikeBar;
