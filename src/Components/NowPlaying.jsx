import React, { useState, useEffect } from 'react';
import ChangeMyNumber from "./../Assets/Music/Billie Eilish-I did'nt change my number.mp3";
import HappierThanEverImg from './../Assets/Images/HappierThanEver.jpg';
import { Link } from 'react-router-dom';
import PlayIcon from './../Assets/Icons/Play.svg';
import PauseIcon from './../Assets/Icons/Pause.svg';
import NextIcon from './../Assets/Icons/Next.svg';
import PreviousIcon from './../Assets/Icons/Previous.svg';
import ShuffleIcon from './../Assets/Icons/Shuffle.svg';
import ShuffleActiveIcon from './../Assets/Icons/ShuffleActive.svg';
import LoopIcon from './../Assets/Icons/Loop.svg';

import LoopOneIcon from './../Assets/Icons/LoopOne.svg';
import LikeIcon from './../Assets/Icons/Like.svg';
import LikeActiveIcon from './../Assets/Icons/LikeActive.svg';
import NowPlayingIcon from './../Assets/Icons/NowPlaying.svg';
import NowPlayingActiveIcon from './../Assets/Icons/NowPlayingActive.svg';
import MicIcon from './../Assets/Icons/Mic.svg';
import MicActiveIcon from './../Assets/Icons/MicActive.svg';
import QueueIcon from './../Assets/Icons/Queue.svg';
import QueueActiveIcon from './../Assets/Icons/QueueActive.svg';
import ConnectedIcon from './../Assets/Icons/Connected.svg';
import ConnectedActiveIcon from './../Assets/Icons/ConnectedActive.svg';
import UnMuteIcon from './../Assets/Icons/UnMute.svg';
import MuteIcon from './../Assets/Icons/Mute.svg';

import { useMusic } from './MusicContext';
const NowPlaying = (props) => {
  const {
    selectedSong,
    togglePlay,
    isPlaying,
    setIsPlaying,
    playPrevious,
    playNext,

    toggleLoop,
    isLooping,
    handleToggleShuffle,
    isShuffleOn,
    setIsShuffleOn,
  } = useMusic();
  const { audioRef } = useMusic();

  const [isShuffle, setIsShuffle] = useState(false);

  const [isNowPlay, setIsNowPlay] = useState(false);
  const [isMic, setIsMic] = useState(false);
  const [isQueue, setIsQueue] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const [progress, setProgress] = useState(0);
  const volumeIcons = [UnMuteIcon, MuteIcon];

  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

  const [isDefault, setIsDefault] = useState(false);

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
    handleToggleShuffle();
  };

  const toggleNowPlay = () => {
    setIsNowPlay(!isNowPlay);
  };
  const toggleMic = () => {
    setIsMic(!isMic);
  };
  const toggleQueue = () => {
    setIsQueue(!isQueue);
  };
  const toggleConnected = () => {
    setIsConnected(!isConnected);
  };
  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;

    if (!isNaN(audio.duration) && isFinite(audio.duration)) {
      const calculatedProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(calculatedProgress);
      setCurrentTime(formatTime(audio.currentTime));
      setDuration(formatTime(audio.duration));
    } else {
      setProgress(0);
      setCurrentTime('0:00');
      setDuration('0:00');
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime =
      (e.nativeEvent.offsetX / e.target.offsetWidth) * audio.duration;
    audio.currentTime = seekTime;
  };
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    audioRef.current.volume = volume / 100;
  };

  useEffect(() => {
    if (selectedSong) {
      audioRef.current.src = selectedSong.audioUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [selectedSong, audioRef, setIsPlaying]);

  const handleClick = () => {
    if (selectedSong) {
      togglePlay(selectedSong.audioUrl);
    } else {
      setIsDefault(!isDefault);
      if (isDefault) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error(error));
      }
    }
  };
  return (
    <div>
      <div className="flex  flex-row fixed justify-between w-screen bottom-0 z-40 bg-deepBlack p-2 now-playing">
        <div
          className="flex  flex-row  justify-start items-center gap-4"
          style={{ flex: '30%' }}
        >
          <div>
            {selectedSong ? (
              <>
                <img
                  src={selectedSong.songImg}
                  className="w-16 rounded-lg"
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  src={HappierThanEverImg}
                  className="w-16 rounded-lg"
                  alt=""
                />
              </>
            )}
          </div>
          <div className="flex  flex-col  name gap-1">
            <Link className="text-base">
              {selectedSong
                ? selectedSong.songName
                : "I Didn't Change My Number"}
            </Link>
            <Link className="text-sm text-silver">
              {selectedSong ? selectedSong.songArtists : 'Billie Eilish'}
            </Link>
          </div>
          <div></div>
        </div>

        <div className="custom-audio-player" style={{ flex: '30%' }}>
          <div className="flex flex-row gap-6">
            <button onClick={toggleShuffle}>
              {isShuffleOn ? (
                <img src={ShuffleActiveIcon} className="w-4" alt="" />
              ) : (
                <img src={ShuffleIcon} className="w-4" alt="" />
              )}
            </button>
            <button onClick={playPrevious}>
              <img src={PreviousIcon} className="w-4" alt="" />
            </button>
            {selectedSong ? (
              <>
                <button onClick={handleClick} className="play-button">
                  {isPlaying ? (
                    <img src={PauseIcon} className="w-4" alt="Pause" />
                  ) : (
                    <img src={PlayIcon} className="w-4" alt="Play" />
                  )}
                </button>
              </>
            ) : (
              <>
                <button onClick={handleClick} className="play-button">
                  {isDefault ? (
                    <img src={PauseIcon} className="w-4" alt="Pause" />
                  ) : (
                    <img src={PlayIcon} className="w-4" alt="Play" />
                  )}
                </button>
              </>
            )}

            <button onClick={playNext}>
              <img src={NextIcon} className="w-4" alt="" />
            </button>
            <button onClick={toggleLoop}>
              {isLooping ? (
                <img src={LoopOneIcon} className="w-4" alt="" />
              ) : (
                <img src={LoopIcon} className="w-4" alt="" />
              )}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="duration">{currentTime}</span>
            <div className="progress-container" onClick={handleSeek}>
              <div
                style={{
                  width: `${progress}%`,
                }}
                className="progress"
              ></div>
            </div>

            <span className="duration">{duration}</span>
          </div>
        </div>
        <div
          className="flex flex-row gap-6 justify-end items-center"
          style={{ flex: '30%' }}
        >
          <button onClick={toggleNowPlay}>
            {isNowPlay ? (
              <img src={NowPlayingActiveIcon} className="w-4" alt="" />
            ) : (
              <img src={NowPlayingIcon} className="w-4" alt="" />
            )}
          </button>
          <button onClick={toggleMic}>
            {isMic ? (
              <img src={MicActiveIcon} className="w-4" alt="" />
            ) : (
              <img src={MicIcon} className="w-4" alt="" />
            )}
          </button>
          <button onClick={toggleQueue}>
            {isQueue ? (
              <img src={QueueActiveIcon} className="w-4" alt="" />
            ) : (
              <img src={QueueIcon} className="w-4" alt="" />
            )}
          </button>
          <button onClick={toggleConnected}>
            {isConnected ? (
              <img src={ConnectedActiveIcon} className="w-4" alt="" />
            ) : (
              <img src={ConnectedIcon} className="w-4" alt="" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <button onClick={toggleMute}>
              {/* Display mute or unmute icon based on the isMuted state */}
              <img
                src={volumeIcons[isMuted ? 1 : 0]}
                className="w-4"
                alt="Volume"
              />
            </button>

            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : audioRef.current?.volume * 100 || 0}
              onChange={handleVolumeChange}
              class="win10-thumb"
            />
          </div>
        </div>

        {selectedSong ? (
          <>
            <audio
              ref={audioRef}
              src={selectedSong.audioUrl}
              onTimeUpdate={handleTimeUpdate}
            ></audio>
          </>
        ) : (
          <>
            <audio
              ref={audioRef}
              src={ChangeMyNumber}
              onTimeUpdate={handleTimeUpdate}
            ></audio>
          </>
        )}
      </div>
      {props.nowPlayingMobile && (
        <div className="flex flex-row items-center justify-between now-playing-mobile z-40 fixed w-11/12 px-4 md:px-2 py-2 box-border">
          <div className="flex  flex-row  justify-between w-full items-center gap-4 box-border">
            <div className="flex flex-row gap-2 items-center">
              <div>
                {selectedSong ? (
                  <>
                    <img
                      src={selectedSong.songImg}
                      className="w-14 rounded-lg md:rounded-sm md:w-10"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={HappierThanEverImg}
                      className="w-14 rounded-lg md:rounded-sm md:w-10"
                      alt=""
                    />
                  </>
                )}
              </div>
              <div className="flex  flex-col  name gap-1">
                <Link className="text-sm text-white">
                  {selectedSong
                    ? selectedSong.songName
                    : "I Didn't Change My Number"}
                </Link>
                <Link className="text-xs text-slate">
                  {selectedSong ? selectedSong.songArtists : 'Billie Eilish'}
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              {selectedSong ? (
                <>
                  <button onClick={handleClick} className="play-button">
                    {isPlaying ? (
                      <img src={PauseIcon} className="w-4" alt="Pause" />
                    ) : (
                      <img src={PlayIcon} className="w-4" alt="Play" />
                    )}
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleClick} className="play-button">
                    {isDefault ? (
                      <img src={PauseIcon} className="w-4" alt="Pause" />
                    ) : (
                      <img src={PlayIcon} className="w-4" alt="Play" />
                    )}
                  </button>
                </>
              )}
              <audio
                ref={audioRef}
                src={ChangeMyNumber}
                onTimeUpdate={handleTimeUpdate}
              ></audio>
            </div>
            <div
              className="progress-container fixed bottom-0 w-full box-border vvv"
              onClick={handleSeek}
              style={{ width: '90%' }}
            >
              <div
                style={{
                  width: `${progress}%`,
                }}
                className="progress"
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
