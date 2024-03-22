import { useMusic } from '../Components/MusicContext';

import SideBar from '../Components/Sidebar';
import Cards from '../Components/Cards';
import NavBar, { MobileNavbar } from '../Components/Navbar';
import OverLay from '../Components/Overlay';
import LikedSongsImg from './../Assets/Images/LikedSongs.png';
import ClockIcon from './../Assets/Icons/Clock.svg';
import PlaylistLikeBar from '../Components/PlaylistLikeBar';
import SideBarRight from '../Components/SidebarRight';
import Bottombar from '../Components/Bottombar';
import PlayListGroup from '../Components/PlaylistGroup';
import AltoIcon from './../Assets/Icons/Alto.svg';
import { useState } from 'react';
import Layout from '../Components/PageLayout';

const LikedPlaylistPage = () => {

  const { likedSongs, likedSongsCount } = useMusic();

  const { selectedSong, setSelectedSong } = useMusic();

  const [setIsPlaying] = useState(false);

  const handleTogglePlay = (audioUrl) => {
    const likedSong = likedSongs.find((song) => song.audioUrl === audioUrl);

    const selectedSong = likedSong;

    setSelectedSong(selectedSong);
  };
  return (
 <Layout>
    <div className="app-frame md:p-0">
      <NavBar />

      <MobileNavbar plalistName="Liked Songs" playlistBack=" " />
      <OverLay />
      <div className="liked-playlist-Gradient flex flex-col  ">
        <div className="flex flex-row items-end gap-3 text-white px-5  pt-16 md:pt-10 md:pb-0 pb-5 flex-wrap">
          <img
            src={LikedSongsImg}
            className="w-56 2xs:w-full md:mr-auto md:ml-auto md:w-72"
            alt=""
          />
          <div className="flex flex-col gap-2 ">
            <h1 className="text-base">Playlist</h1>
            <h1 className=" text-8xl    font-bold md:text-6xl xs:text-4xl">
              Liked Songs
            </h1>

            <h1 className=" text-sm ">
              Jxt Darlington {likedSongsCount} songs
            </h1>
          </div>
        </div>
        <div className="flex flex-col transBlackLight  p-5 md:px-2 md:pt-0 gap-5">
          {likedSongs.length > 0 ? (
            <PlaylistLikeBar likedSongsPlaylistSwitch=" " />
          ) : (
            ' '
          )}
          {likedSongs.length > 0 ? (
            <PlayListGroup
              duration={ClockIcon}
              album="Album"
              title="Title"
              number="#"
            />
          ) : (
            ' '
          )}
          <div className="text-white">
            {likedSongs.length > 0 ? (
              likedSongs.map((song, index) => (
                <div key={song.id}>
                  <Cards
                    {...song}
                    songNumber={index + 1}
                    isPlaying={song.audioUrl === selectedSong?.audioUrl}
                    togglePlay={() => handleTogglePlay(song.audioUrl)}
                    setIsPlaying={setIsPlaying}
                    isLiked
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-12 flex flex-col items-center gap-2">
                <img className="w-20 mx-auto" src={AltoIcon} />
                <h1 className="font-bold text-3xl">
                  Songs you like will appear here
                </h1>
                <h1 className="text-base">
                  Save songs by tapping the heart icon
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default LikedPlaylistPage;
