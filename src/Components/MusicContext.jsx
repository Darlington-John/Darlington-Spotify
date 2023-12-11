import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

import { myHitsMix, ambientSongs } from './PlaylistData';
const MusicContext = createContext();
export const MusicProvider = ({ children }) => {
  const [selectedSong, setSelectedSong] = useState(null);
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [likedSongs, setLikedSongs] = useState([]);
  const [likedSongsCount, setLikedSongsCount] = useState(0);
  const [likedSongsPlaylist, setLikedSongsPlaylist] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const storedLikedSongs = JSON.parse(localStorage.getItem('likedSongs'));
    const storedLikedSongsPlaylist = JSON.parse(
      localStorage.getItem('likedSongsPlaylist'),
    );

    if (storedLikedSongs) {
      setLikedSongs(storedLikedSongs);
      setLikedSongsCount(storedLikedSongs.length);
    }

    if (storedLikedSongsPlaylist) {
      setLikedSongsPlaylist(storedLikedSongsPlaylist);
    }

    setIsInitialized(true);
  }, []);
  useEffect(() => {
    // Update the likedSongsCount whenever the likedSongs array changes
    setLikedSongsCount(likedSongs.length);
  }, [likedSongs]);
  const toggleLike = (song) => {
    // Check if the song is already liked
    const isLiked = likedSongs.some(
      (likedSong) => likedSong.songDuration === song.songDuration,
    );

    if (isLiked) {
      // Remove the song from liked songs
      setLikedSongs((prevLikedSongs) =>
        prevLikedSongs.filter(
          (likedSong) => likedSong.songDuration !== song.songDuration,
        ),
      );
    } else {
      // Add the song to liked songs
      setLikedSongs((prevLikedSongs) => [...prevLikedSongs, song]);
    }
  };
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
      localStorage.setItem(
        'likedSongsPlaylist',
        JSON.stringify(likedSongsPlaylist),
      );
    }
    console.log('Liked Songs Playlist:', likedSongsPlaylist);
  }, [likedSongs, likedSongsPlaylist, isInitialized]);

  const [currentPlaylist] = useState('myHitsMix');
  const determineCurrentPlaylist = useCallback(() => {
    switch (currentPlaylist) {
      case 'myHitsMix':
        return myHitsMix;
      case 'ambientSongs':
        return ambientSongs;
      default:
        return myHitsMix;
    }
  }, [currentPlaylist]);

  const [isLooping, setIsLooping] = useState(false);
  const toggleLoop = () => {
    setIsLooping(!isLooping);
    audioRef.current.loop = !isLooping;
  };

  const playNext = useCallback(() => {
    const playlist = determineCurrentPlaylist();
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    setSelectedSong(playlist[currentSongIndex]);

    if (!isLooping && currentSongIndex === playlist.length - 1) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentSongIndex(0);
    } else {
      audioRef.current.src = playlist[currentSongIndex].audioUrl;
      audioRef.current.play().catch((error) => console.error(error));
      setIsPlaying(true);
    }
  }, [
    determineCurrentPlaylist,
    currentSongIndex,
    setCurrentSongIndex,
    setSelectedSong,
    setIsPlaying,
    audioRef,
    isLooping,
  ]);

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

      setSelectedSong(myHitsMix.find((songs) => songs.audioUrl === audioUrl));
      audioRef.current.src = audioUrl;
      audioRef.current.play().catch((error) => console.error(error));
    }
  };
  useEffect(() => {
    const handleAudioEnded = () => {
      playNext();
    };

    const currentAudioRef = audioRef.current;

    currentAudioRef.addEventListener('ended', handleAudioEnded);

    return () => {
      currentAudioRef.removeEventListener('ended', handleAudioEnded);
    };
  }, [playNext, audioRef]);

  const value = {
    selectedSong,
    setSelectedSong,
    audioRef,
    isPlaying,
    togglePlay,
    setIsPlaying,
    playPrevious,
    playNext,
    likedSongs,
    likedSongsCount,
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
