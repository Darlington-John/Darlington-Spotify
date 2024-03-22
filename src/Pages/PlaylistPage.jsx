import React from 'react';

import { useParams } from 'react-router-dom';
import NavBar, { MobileNavbar } from '../Components/Navbar';
import  { useState, useEffect } from 'react';
import OverLay from '../Components/Overlay';
import {
  FiltersData,
  mixData,
  madeForUser,
  radioData,
  ThisIsData,
} from '../Components/ArrayData';

import PlayListGroup from '../Components/PlaylistGroup';
import Layout from '../Components/PageLayout';
import ColorThief from 'colorthief';
const PlaylistPage = () => {
  const { PlaylistTitle } = useParams();
  const playlist = FiltersData.find(
    (item) => item.PlaylistTitle === PlaylistTitle,
  );
  const { CardTitle } = useParams();
  const content =
    mixData.find((item) => item.CardTitle === CardTitle) ||
    madeForUser.find((item) => item.CardTitle === CardTitle) ||
    radioData.find((item) => item.CardTitle === CardTitle) ||
    ThisIsData.find((item) => item.CardTitle === CardTitle);
    const [bgColor, setBgColor] = useState('#b6a7c5');
    useEffect(() => {
      const getColor = async () => {
        const colorThief = new ColorThief();
        const img = document.createElement('img');
        img.src =  content
                  ? content.FeatureImg
                  : playlist
                  ? playlist.PlaylistImg
                  : '-';
        img.crossOrigin = 'Anonymous'; // Enable CORS
   img.onload = () => {
    const lightVibrantColor = colorThief.getPalette(img, 5)[4];

        const rgbColor = `rgb(${lightVibrantColor.join(', ')})`;
        setBgColor(rgbColor);
      };
      };
      getColor();
    }, [ content
                  ? content.FeatureImg
                  : playlist
                  ? playlist.PlaylistImg
                  : '-']);
  return (
   <Layout>
      <div className="app-frame md:p-0">
        <NavBar />
        <MobileNavbar
          plalistName={
            content
              ? content.CardTitle
              : playlist
              ? playlist.PlaylistTitle
              : '-'
          }
          playlistBack=" "
        />
        <OverLay />
        <div className=" flex flex-col  " style={{ backgroundColor: bgColor }}>
          <div className="flex flex-row items-end gap-3 text-white px-5  pt-16 md:pt-10 md:pb-0 pb-5 flex-wrap">
            <img
              src={
                content
                  ? content.FeatureImg
                  : playlist
                  ? playlist.PlaylistImg
                  : '-'
              }
              className="w-56 2xs:w-full md:mr-auto md:ml-auto md:w-72"
              alt=""
            />
            <div className="flex flex-col gap-2 ">
              <h1 className="text-base">
                {content
                  ? content.contentType
                  : playlist
                  ? playlist.PlayType
                  : '-'}
              </h1>
              <h1 className=" text-6xl    font-bold md:text-4xl">
                {content
                  ? content.CardTitle
                  : playlist
                  ? playlist.PlaylistTitle
                  : '-'}
              </h1>
              <h1 className=" text-base    ">
                {content
                  ? content.message
                  : playlist
                  ? playlist.Featuring
                  : '-'}
              </h1>

              <h1 className=" text-sm ">
                {content ? content.Likes : playlist ? playlist.Likes : '-'}
                {content ? content.Time : playlist ? playlist.Time : '-'}
              </h1>
            </div>
          </div>
          <div className="flex flex-col transBlackLight  p-5 md:px-2 md:pt-0 gap-5">
            {content
              ? content.switchPlaylist
              : playlist
              ? playlist.switchPlaylist
              : '-'}
            <PlayListGroup
              duration={
                content ? content.duration : playlist ? playlist.duration : '-'
              }
              album={content ? content.album : playlist ? playlist.album : '-'}
              title={content ? content.title : playlist ? playlist.title : '-'}
              number={
                content ? content.number : playlist ? playlist.number : '-'
              }
            />
            <div className="text-white">
              <>
                {content
                  ? content.playlistSongs
                  : playlist
                  ? playlist.playlistSongs
                  : '-'}
              </>
            </div>
          </div>
        </div>
      </div>
      </Layout>
  );
};

export default PlaylistPage;
