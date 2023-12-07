import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from './../../Components/Sidebar';
import Bottombar from '../../Components/Bottombar';

import NavBar, { MobileNavbar } from '../../Components/Navbar';
import SideBarRight from '../../Components/SidebarRight';

import OverLay from '../../Components/Overlay';

import {
  FiltersData,
  mixData,
  madeForUser,
  radioData,
  ThisIsData,
} from '../../Components/ArrayData';

import PlaylistLikeBar from '../../Components/PlaylistLikeBar';
import PlayListGroup from '../../Components/PlaylistGroup';

const PlaylistPageBody = (props) => {
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

  return (
    <div className="app-container md:p-0">
      <SideBar />
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
        <div className="playlist-Gradient flex flex-col  ">
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
            <PlaylistLikeBar />
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
      <SideBarRight />
      <Bottombar />
    </div>
  );
};

export default PlaylistPageBody;
