import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

import { myHitsMix, ambientSongs } from './PlaylistData';
import { eilishMix } from './EilishMix';
import { lifeSucksMix } from './LifeSucksMix';
import { myGospel } from './MyGospel';
import CreatedMusicImg from './../Assets/Images/CreatedMusic.jpg';
import Fuse from 'fuse.js';
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
  const [createdPlaylists, setCreatedPlaylists] = useState([]);
  const [addedSongs, setAddedSongs] = useState([]);
  const [addedSongsPlaylist, setAddedSongsPlaylist] = useState([]);
  const [addedSongsTwo, setAddedSongsTwo] = useState([]);
  const [addedSongsPlaylistTwo, setAddedSongsPlaylistTwo] = useState([]);
  const [addedSongsThree, setAddedSongsThree] = useState([]);
  const [addedSongsPlaylistThree, setAddedSongsPlaylistThree] = useState([]);
  const [addedSongsFour, setAddedSongsFour] = useState([]);
  const [addedSongsPlaylistFour, setAddedSongsPlaylistFour] = useState([]);
  const [addedSongsFive, setAddedSongsFive] = useState([]);
  const [addedSongsPlaylistFive, setAddedSongsPlaylistFive] = useState([]);
  useEffect(() => {
    const storedLikedSongs =
      JSON.parse(localStorage.getItem('likedSongs')) || [];
    const storedLikedSongsPlaylist =
      JSON.parse(localStorage.getItem('likedSongsPlaylist')) || [];
    const storedAddedSongs =
      JSON.parse(localStorage.getItem('addedSongs')) || [];
    const storedAddedSongsPlaylist =
      JSON.parse(localStorage.getItem('addedSongsPlaylist')) || [];
    const storedAddedSongsTwo =
      JSON.parse(localStorage.getItem('addedSongsTwo')) || [];
    const storedAddedSongsPlaylistTwo =
      JSON.parse(localStorage.getItem('addedSongsPlaylistTwo')) || [];
    const storedAddedSongsThree =
      JSON.parse(localStorage.getItem('addedSongsThree')) || [];
    const storedAddedSongsPlaylistThree =
      JSON.parse(localStorage.getItem('addedSongsPlaylistThree')) || [];
    const storedAddedSongsFour =
      JSON.parse(localStorage.getItem('addedSongsFour')) || [];
    const storedAddedSongsPlaylistFour =
      JSON.parse(localStorage.getItem('addedSongsPlaylistFour')) || [];
    const storedAddedSongsFive =
      JSON.parse(localStorage.getItem('addedSongsFive')) || [];
    const storedAddedSongsPlaylistFive =
      JSON.parse(localStorage.getItem('addedSongsPlaylistFive')) || [];
    const storedCreatedPlaylists =
      JSON.parse(localStorage.getItem('createdPlaylists')) || [];

    setLikedSongs(storedLikedSongs);
    setLikedSongsPlaylist(storedLikedSongsPlaylist);
    setAddedSongs(storedAddedSongs);
    setAddedSongsPlaylist(storedAddedSongsPlaylist);
    setAddedSongsTwo(storedAddedSongsTwo);
    setAddedSongsPlaylistTwo(storedAddedSongsPlaylistTwo);
    setAddedSongsThree(storedAddedSongsThree);
    setAddedSongsPlaylistThree(storedAddedSongsPlaylistThree);
    setAddedSongsFour(storedAddedSongsFour);
    setAddedSongsPlaylistFour(storedAddedSongsPlaylistFour);
    setAddedSongsFive(storedAddedSongsFive);
    setAddedSongsPlaylistFive(storedAddedSongsPlaylistFive);
    setCreatedPlaylists(storedCreatedPlaylists);

    setIsInitialized(true);
  }, []);
  useEffect(() => {
    setLikedSongsCount(likedSongs.length);
  }, [likedSongs]);
  const toggleLike = (song) => {
    const isLiked = likedSongs.some(
      (likedSong) => likedSong.songDuration === song.songDuration,
    );

    if (isLiked) {
      setLikedSongs((prevLikedSongs) =>
        prevLikedSongs.filter(
          (likedSong) => likedSong.songDuration !== song.songDuration,
        ),
      );
    } else {
      setLikedSongs((prevLikedSongs) => [...prevLikedSongs, song]);
    }
  };
  const toggleAdded = (song) => {
    const isAdded = addedSongs.some(
      (addedSong) => addedSong.songDuration === song.songDuration,
    );

    if (isAdded) {
      setAddedSongs((prevAddedSongs) =>
        prevAddedSongs.filter(
          (addedSong) => addedSong.songDuration !== song.songDuration,
        ),
      );
    } else {
      setAddedSongs((prevAddedSongs) => [...prevAddedSongs, song]);
    }
  };
  const toggleAddedTwo = (song) => {
    const isAddedTwo = addedSongsTwo.some(
      (addedSongTwo) => addedSongTwo.songDuration === song.songDuration,
    );

    if (isAddedTwo) {
      setAddedSongsTwo((prevAddedSongsTwo) =>
        prevAddedSongsTwo.filter(
          (addedSongTwo) => addedSongTwo.songDuration !== song.songDuration,
        ),
      );
    } else {
      setAddedSongsTwo((prevAddedSongsTwo) => [...prevAddedSongsTwo, song]);
    }
  };
  const toggleAddedThree = (song) => {
    const isAddedThree = addedSongsThree.some(
      (addedSongThree) => addedSongThree.songDuration === song.songDuration,
    );

    if (isAddedThree) {
      setAddedSongsThree((prevAddedSongsThree) =>
        prevAddedSongsThree.filter(
          (addedSongThree) => addedSongThree.songDuration !== song.songDuration,
        ),
      );
    } else {
      setAddedSongsThree((prevAddedSongsThree) => [
        ...prevAddedSongsThree,
        song,
      ]);
    }
  };
  const toggleAddedFour = (song) => {
    const isAddedFour = addedSongsFour.some(
      (addedSongFour) => addedSongFour.songDuration === song.songDuration,
    );

    if (isAddedFour) {
      setAddedSongsFour((prevAddedSongsFour) =>
        prevAddedSongsFour.filter(
          (addedSongFour) => addedSongFour.songDuration !== song.songDuration,
        ),
      );
    } else {
      setAddedSongsFour((prevAddedSongsFour) => [...prevAddedSongsFour, song]);
    }
  };
  const toggleAddedFive = (song) => {
    const isAddedFive = addedSongsFive.some(
      (addedSongFive) => addedSongFive.songDuration === song.songDuration,
    );

    if (isAddedFive) {
      setAddedSongsFive((prevAddedSongsFive) =>
        prevAddedSongsFive.filter(
          (addedSongFive) => addedSongFive.songDuration !== song.songDuration,
        ),
      );
    } else {
      setAddedSongsFive((prevAddedSongsFive) => [...prevAddedSongsFive, song]);
    }
  };
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
      localStorage.setItem(
        'likedSongsPlaylist',
        JSON.stringify(likedSongsPlaylist),
      );
      localStorage.setItem(
        'createdPlaylists',
        JSON.stringify(createdPlaylists),
      );
      localStorage.setItem('addedSongs', JSON.stringify(addedSongs));
      localStorage.setItem(
        'addedSongsPlaylist',
        JSON.stringify(addedSongsPlaylist),
      );
      localStorage.setItem('addedSongsTwo', JSON.stringify(addedSongsTwo));
      localStorage.setItem(
        'addedSongsPlaylistTwo',
        JSON.stringify(addedSongsPlaylistTwo),
      );
      localStorage.setItem('addedSongsThree', JSON.stringify(addedSongsThree));
      localStorage.setItem(
        'addedSongsPlaylistThree',
        JSON.stringify(addedSongsPlaylistThree),
      );
      localStorage.setItem('addedSongsFour', JSON.stringify(addedSongsFour));
      localStorage.setItem(
        'addedSongsPlaylistFour',
        JSON.stringify(addedSongsPlaylistFour),
      );
      localStorage.setItem('addedSongsFive', JSON.stringify(addedSongsFive));
      localStorage.setItem(
        'addedSongsPlaylistFive',
        JSON.stringify(addedSongsPlaylistFive),
      );
    }
  }, [
    likedSongs,
    likedSongsPlaylist,
    createdPlaylists,
    addedSongs,
    addedSongsPlaylist,
    addedSongsTwo,
    addedSongsPlaylistTwo,
    addedSongsThree,
    addedSongsPlaylistThree,
    addedSongsFour,
    addedSongsPlaylistFour,
    addedSongsFive,
    addedSongsPlaylistFive,
    isInitialized,
  ]);

  const [currentPlaylist, setCurrentPlaylist] = useState('myHitsMix');
  const determineCurrentPlaylist = useCallback(() => {
    switch (currentPlaylist) {
      case 'myHitsMix':
        return myHitsMix;
      case 'ambientSongs':
        return ambientSongs;
      case 'eilishMix':
        return eilishMix;
      case 'lifeSucksMix':
        return lifeSucksMix;
      case 'myGospel':
        return myGospel;
      case 'likedSongs':
        return likedSongs;
      case 'addedSongs':
        return addedSongs;
      case 'addedSongsTwo':
        return addedSongsTwo;
      case 'addedSongsThree':
        return addedSongsThree;
      case 'addedSongsFour':
        return addedSongsFour;
      case 'addedSongsFive':
        return addedSongsFive;
      default:
        return myHitsMix;
    }
  }, [currentPlaylist]);

  const [isLooping, setIsLooping] = useState(false);
  const toggleLoop = () => {
    setIsLooping(!isLooping);
    audioRef.current.loop = !isLooping;
  };
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const [isShuffleOn, setIsShuffleOn] = useState(false);

  const handleToggleShuffle = () => {
    setIsShuffleOn((prevIsShuffleOn) => !prevIsShuffleOn);
  };

  const handleShuffle = () => {
    const playlist = determineCurrentPlaylist();
    const shuffledPlaylist = shuffleArray(playlist);
    const shuffledIndex = Math.floor(Math.random() * shuffledPlaylist.length);

    setCurrentSongIndex(shuffledIndex);
    setSelectedSong(shuffledPlaylist[shuffledIndex]);

    audioRef.current.src = shuffledPlaylist[shuffledIndex].audioUrl;
    audioRef.current.play().catch((error) => console.error(error));
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isShuffleOn) {
      handleShuffle();
    }
  }, [isShuffleOn]);
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

  const playPrevious = useCallback(() => {
    const playlist = determineCurrentPlaylist();
    const previousIndex =
      (currentSongIndex - 1 + playlist.length) % playlist.length;
    setCurrentSongIndex(previousIndex);
    setSelectedSong(playlist[previousIndex]);

    if (!isLooping && currentSongIndex === 0) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.src = playlist[previousIndex].audioUrl;
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
  const [playlistDetails, setPlaylistDetails] = useState({
    id: null,
    name: '',
    imageUrl: '',
  });

  const updatePlaylistDetails = (newDetails) => {
    setPlaylistDetails({ ...playlistDetails, ...newDetails });
  };
  const [playlists, setPlaylists] = useState(
    JSON.parse(localStorage.getItem('createdPlaylists')) || [],
  );

  useEffect(() => {
    const storedPlaylists =
      JSON.parse(localStorage.getItem('createdPlaylists')) || [];
    setPlaylists(storedPlaylists);
  }, []);

  const updatePlaylistName = (playlistId, newName, imgSrc) => {
    setPlaylists((prevPlaylists) => {
      const updatedPlaylists = prevPlaylists.map((playlist) =>
        playlist.id === Number(playlistId)
          ? { ...playlist, name: newName, imgSrc: imgSrc || CreatedMusicImg }
          : playlist,
      );

      localStorage.setItem(
        'createdPlaylists',
        JSON.stringify(updatedPlaylists),
      );

      return updatedPlaylists;
    });
  };

  const createPlaylist = () => {
    const newPlaylist = {
      id: playlists.length + 1,
      name: `My Playlist #${playlists.length + 1}`,
      imgSrc: CreatedMusicImg,
      songs: [],
    };

    setPlaylists((prevPlaylists) => {
      const updatedPlaylists = [...prevPlaylists, newPlaylist];

      localStorage.setItem(
        'createdPlaylists',
        JSON.stringify(updatedPlaylists),
      );

      return updatedPlaylists;
    });
  };
  const handleChangePlaylist = (newPlaylist) => {
    setCurrentPlaylist(newPlaylist);
  };
  const playFirstSong = (playlist) => {
    if (playlist.length > 0) {
      const firstSong = playlist[0];

      if (!selectedSong || selectedSong.audioUrl !== firstSong.audioUrl) {
        setSelectedSong(firstSong);
        audioRef.current.src = firstSong.audioUrl;
      }

      audioRef.current.loop = isLooping;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error(error));
      }

      setIsPlaying(!isPlaying);
    } else {
      console.error('Playlist is empty.');
    }
  };

  useEffect(() => {
    return () => {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };
  }, [isPlaying]);
  const playLikedSongs = () => {
    if (likedSongs.length > 0) {
      const firstLikedSong = likedSongs[0];

      if (!selectedSong || selectedSong.audioUrl !== firstLikedSong.audioUrl) {
        setSelectedSong(firstLikedSong);
        audioRef.current.src = firstLikedSong.audioUrl;
      }

      audioRef.current.loop = isLooping;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error(error));
      }

      setIsPlaying(!isPlaying);
    } else {
      console.error('Liked songs playlist is empty.');
    }
  };
  const playFirstPlaylist = () => {
    if (addedSongs.length > 0) {
      const firstAddedSong = addedSongs[0];

      if (!selectedSong || selectedSong.audioUrl !== firstAddedSong.audioUrl) {
        setSelectedSong(firstAddedSong);
        audioRef.current.src = firstAddedSong.audioUrl;
      }

      audioRef.current.loop = isLooping;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error(error));
      }

      setIsPlaying(!isPlaying);
    } else {
      console.error(' ');
    }
  };
  const playSecondPlaylist = () => {
    if (addedSongsTwo.length > 0) {
      const firstAddedSongTwo = addedSongsTwo[0];

      if (
        !selectedSong ||
        selectedSong.audioUrl !== firstAddedSongTwo.audioUrl
      ) {
        setSelectedSong(firstAddedSongTwo);
        audioRef.current.src = firstAddedSongTwo.audioUrl;
      }

      audioRef.current.loop = isLooping;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error(error));
      }

      setIsPlaying(!isPlaying);
    } else {
      console.error(' ');
    }
  };
  const playThirdPlaylist = () => {
    if (addedSongsThree.length > 0) {
      const firstAddedSongThree = addedSongsThree[0];

      if (
        !selectedSong ||
        selectedSong.audioUrl !== firstAddedSongThree.audioUrl
      ) {
        setSelectedSong(firstAddedSongThree);
        audioRef.current.src = firstAddedSongThree.audioUrl;
      }

      audioRef.current.loop = isLooping;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error(error));
      }

      setIsPlaying(!isPlaying);
    } else {
      console.error(' ');
    }
  };
  const playFourthPlaylist = () => {
    if (addedSongsFour.length > 0) {
      const firstAddedSongFour = addedSongsFour[0];

      if (
        !selectedSong ||
        selectedSong.audioUrl !== firstAddedSongFour.audioUrl
      ) {
        setSelectedSong(firstAddedSongFour);
        audioRef.current.src = firstAddedSongFour.audioUrl;
      }

      audioRef.current.loop = isLooping;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error(error));
      }

      setIsPlaying(!isPlaying);
    } else {
      console.error(' ');
    }
  };
  const playFifthPlaylist = () => {
    if (addedSongsFive.length > 0) {
      const firstAddedSongFive = addedSongsFive[0];

      if (
        !selectedSong ||
        selectedSong.audioUrl !== firstAddedSongFive.audioUrl
      ) {
        setSelectedSong(firstAddedSongFive);
        audioRef.current.src = firstAddedSongFive.audioUrl;
      }

      audioRef.current.loop = isLooping;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => console.error(error));
      }

      setIsPlaying(!isPlaying);
    } else {
      console.error(' ');
    }
  };
  const addSongToPlaylist = (playlistId, song) => {
    setCreatedPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        playlist.id === Number(playlistId)
          ? { ...playlist, songs: [...playlist.songs, song] }
          : playlist,
      ),
    );
  };

  const allPlaylists = [
    ...myHitsMix,
    ...ambientSongs,
    ...lifeSucksMix,
    ...eilishMix,
    ...myGospel,
  ];
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query) => {
    const fuse = new Fuse(allPlaylists, {
      keys: ['songName', 'songArtists', 'songAlbum'],
      includeScore: true,
    });

    const results = fuse.search(query);

    const exactMatch = results.length > 0 ? results[0].item : null;

    const fuzzyMatches = results.slice(1, 6).map((result) => result.item);

    const finalResult = exactMatch
      ? [exactMatch, ...fuzzyMatches]
      : fuzzyMatches;

    setSearchResults(finalResult);
  };
  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };
  const handleTogglePlay = (audioUrl) => {
    const selectedSong = allPlaylists.find(
      (song) => song.audioUrl === audioUrl,
    );
    setSelectedSong(selectedSong);
  };
  const value = {
    searchQuery,
    setSearchQuery,
    searchResults,
    setSearchResults,
    handleTogglePlay,
    handleSearch,
    handleChange,
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
    addedSongs,

    toggleAdded,
    addedSongsTwo,

    toggleAddedTwo,
    addedSongsThree,

    toggleAddedThree,
    addedSongsFour,

    toggleAddedFour,
    addedSongsFive,

    toggleAddedFive,
    toggleLoop,
    isLooping,

    playlists,
    updatePlaylistName,
    createPlaylist,
    handleChangePlaylist,
    currentPlaylist,
    setCurrentPlaylist,
    handleShuffle,
    isShuffleOn,
    setIsShuffleOn,
    handleToggleShuffle,
    playFirstSong,
    playLikedSongs,
    playFirstPlaylist,
    playSecondPlaylist,
    playThirdPlaylist,
    playFourthPlaylist,
    playFifthPlaylist,
    addSongToPlaylist,
    allPlaylists,
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
