import React from 'react';
import Search from '../Components/Search';
import SideBar from '../Components/Sidebar';
import NavBar, { MobileNavbar } from '../Components/Navbar';
import OverLay from '../Components/Overlay';
import SideBarRight from '../Components/SidebarRight';
import Bottombar from '../Components/Bottombar';
import { useMusic } from '../Components/MusicContext';
import { BrowseCardData } from '../Components/ArrayData';
import Cards from '../Components/Cards';
import Layout from '../Components/PageLayout';
const SearchPage = () => {
  const {
    selectedSong,

    searchResults,

    handleTogglePlay,
  } = useMusic();
  return (

<Layout>
      <div className="app-frame ">
        <NavBar Search=" " />

        <MobileNavbar greeting=" " />

        <OverLay />
        <div className="hidden md:flex xs:block md:pt-4 md:pb-6">
          <Search />
        </div>
        <div>
          {searchResults.length > 0 && (
            <div className="card-container text-white">
              {searchResults.map((result, index) => (
                <div key={index}>
                  <Cards
                    {...result}
                    isPlaying={result.audioUrl === selectedSong?.audioUrl}
                    togglePlay={() => handleTogglePlay(result.audioUrl)}
                    artistsBio={result.artistsBio}
                    aboutArtists={result.aboutArtists}
                    songNumber={index + 1}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {' '}
          {searchResults.length === 0 ? (
            <div className="flex flex-col gap-3 py-8">
              <h1 className="text-white text-2xl font-bold">Browse all</h1>
              <div className="grid grid-cols-5 gap-2 xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2">
                {BrowseCardData.map((data, index) => (
                  <div key={index}>
                    <Cards {...data} data={data} Browse=" " />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
</Layout>
  );
};

export default SearchPage;
