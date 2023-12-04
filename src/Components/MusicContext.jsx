import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import { myHitsMix, ambientSongs } from './ArrayData';

const MusicContext = createContext();
export const MusicProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const toggleLike = () => {
    setIsLike(!isLike);
  };
  const [currentPlaylist, setCurrentPlaylist] = useState('myHitsMix');
  const determineCurrentPlaylist = () => {
    switch (currentPlaylist) {
      case 'myHitsMix':
        return myHitsMix;
      case 'ambientSongs':
        return ambientSongs;
      default:
        return myHitsMix; // Default to Eilish Mix if no specific playlist is matched
    }
  };

  const determineCurrentPlaylistIndex = () => {
    const playlist = determineCurrentPlaylist();
    return playlist.findIndex(
      (song) => song.audioUrl === selectedSong?.audioUrl,
    );
  };
  const [isLooping, setIsLooping] = useState(false);
  const toggleLoop = () => {
    setIsLooping(!isLooping);
    audioRef.current.loop = !isLooping;
  };

  const playNext = () => {
    const playlist = determineCurrentPlaylist();
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    setSelectedSong(playlist[currentSongIndex]);

    if (!isLooping && currentSongIndex === playlist.length - 1) {
      // If not looping and it's the last song, pause and reset
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentSongIndex(0);
    } else {
      // Otherwise, play the next song
      audioRef.current.src = playlist[currentSongIndex].audioUrl;
      audioRef.current.play().catch((error) => console.error(error));
      setIsPlaying(true);
    }
  };

  const playPrevious = () => {
    const previousIndex =
      (currentSongIndex - 1 + myHitsMix.length) % myHitsMix.length;
    setCurrentSongIndex(previousIndex);
    setSelectedSong(myHitsMix[previousIndex]);
  };

  const togglePlay = (audioUrl) => {
    audioRef.current.loop = isLooping;
    if (selectedSong && selectedSong.audioUrl === audioUrl) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => console.error(error));
        setIsPlaying(true);
      }
    } else {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }

      // setSelectedSong(myHitsMix.find((song) => song.audioUrl === audioUrl));
      setSelectedSong(myHitsMix.find((songs) => songs.audioUrl === audioUrl));
      audioRef.current.src = audioUrl;
      audioRef.current.play().catch((error) => console.error(error));
    }
  };
  useEffect(() => {
    const handleAudioEnded = () => {
      // Automatically play the next song when the current one ends
      playNext();
    };

    // Add an event listener for the 'ended' event
    audioRef.current.addEventListener('ended', handleAudioEnded);

    // Clean up the event listener when the component unmounts
    return () => {
      audioRef.current.removeEventListener('ended', handleAudioEnded);
    };
  }, [playNext]);

  const value = {
    selectedSong,
    setSelectedSong,
    audioRef,
    isPlaying,
    togglePlay,
    setIsPlaying,
    playPrevious,
    playNext,
    isLike,
    setIsLike,
    toggleLike,
    toggleLoop,
    isLooping,
  };

  return (
    <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
