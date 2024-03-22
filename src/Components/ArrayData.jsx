import React from 'react';
import BlohshImg from './../Assets/Images/Blohsh.jpg';
import LifeSucksImg from './../Assets/Images/LifeSucks.jpg';
import FallAsleepImg from './../Assets/Images/FallAsleep.jpg';
import ShitsuImg from './../Assets/Images/Shitsu.jpg';
import HillSongImg from './../Assets/Images/HillSong.jpg';
import ChillImg from './../Assets/Images/Chill.jpg';
import SiaMixImg from './../Assets/Images/SiaMix.jpg';
import BillieMixImg from './../Assets/Images/BillieMix.jpg';
import DavidMixImg from './../Assets/Images/DavidMix.jpg';

import PostMixImg from './../Assets/Images/PostMix.jpg';
import HeartacheImg from './../Assets/Images/Heartache.jpg';

import ComfortImg from './../Assets/Images/Comfort.jpg';
import ShowerSongsImg from './../Assets/Images/ShowerSongs.jpg';
import WeekndRadioImg from './../Assets/Images/WeekndRadio.jpg';
import PostRadioImg from './../Assets/Images/PostRadio.jpg';
import BilieRadioImg from './../Assets/Images/BilieRadio.jpg';
import DavidRadioImg from './../Assets/Images/DavidRadio.jpg';
import EdRadioImg from './../Assets/Images/EdRadio.jpg';
import ThisSiaImg from './../Assets/Images/ThisSia.jpg';
import ThisBillImg from './../Assets/Images/ThisBill.jpg';
import ThisXXXImg from './../Assets/Images/ThisXXX.jpg';
import ThisImagineImg from './../Assets/Images/ThisImagine.jpg';

import ThisTwentyImg from './../Assets/Images/ThisTwenty.jpg';

import ClockIcon from './../Assets/Icons/Clock.svg';

import Playlists from './Playlist';
import EilishPlaylist from './EilishMix';
import LifeSucksPlaylist from './LifeSucksMix';
import MyGospelPlaylist from './MyGospel';
import PlaylistLikeBar from './PlaylistLikeBar';
import TTHImg from './../Assets/Images/TTH.jpg';
import ScienceImg from './../Assets/Images/Science.jpg';
import LifeEventsImg from './../Assets/Images/LifeEvents.jpg';
import ThisNeighImg from './../Assets/Images/ThisNeigh.jpg';
import FridayImg from './../Assets/Images/Friday.jpg';
import DeepImg from './../Assets/Images/Deep.jpg';
import GospelImg from './../Assets/Images/Gospel.jpg';
import AfroImg from './../Assets/Images/Afro.jpg';
import BeastImg from './../Assets/Images/Beast.jpg';
import SleepImg from './../Assets/Images/Sleep.jpg';
import MoviesImg from './../Assets/Images/Movies.jpg';

export const FiltersData = [
  {
    id: 1,
    PlaylistCard: ' ',
    PlaylistTitle: 'Sad Ost Naruto',

    PlaylistImg: ShitsuImg,
    PlayType: 'Playlist',
    Featuring: 'With Naruto soundtracks, Guren, Greif and Sorrow and more',
    AccentColor: '#fff',
    Time: ' about 32mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists Ambients=" " />,
    switchPlaylist: <PlaylistLikeBar ambientPlaylistSwitch=" " />,
  },
  {
    id: 2,
    PlaylistTitle: 'Billie Eilish Mix',
    PlaylistImg: FallAsleepImg,
    PlaylistCard: ' ',
    PlayType: 'Playlist',
    Featuring:
      'Just some of Billie Eilish songs you might like, not like I care if you do though - Darlington',
    Time: ' about 2hrs 30mins',
    Likes: '768, 573 likes',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <EilishPlaylist Eilish=" " />,
    switchPlaylist: <PlaylistLikeBar eilishMixPlaylistSwitch=" " />,
  },
  {
    id: 3,
    PlaylistTitle: 'Life Sucks',
    PlaylistImg: LifeSucksImg,
    PlaylistCard: ' ',
    PlayType: 'Playlist',
    Featuring: 'With Billie Eilish, XXXTentacion, Sia and more ',
    Time: ' about 1hrs 30mins',
    Likes: '768, 573 likes',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <LifeSucksPlaylist lifeSucks=" " />,
    switchPlaylist: <PlaylistLikeBar lifeSucksMixPlaylistSwitch=" " />,
  },
  {
    id: 4,
    PlaylistTitle: 'My Hits Playlist',
    PlaylistImg: BlohshImg,
    PlaylistCard: ' ',
    PlayType: 'Playlist',
    Featuring: 'With Billie Eilish, Harry Styles, Post Malone and more',
    Time: ' about 3hrs 30mins',
    Likes: '768, 573 likes',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    id: 5,
    PlaylistTitle: 'Chill Hits',
    PlaylistImg: ChillImg,
    PlaylistCard: ' ',
    PlayType: 'Playlist',
    Featuring: 'With The Weeknd, Sia, Ed Sheeran, Billie Eilish and more',
    Time: ' about 3hrs 30mins',
    Likes: '768, 573 likes',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    id: 6,
    PlaylistTitle: 'Inspirational Gospel',
    PlaylistImg: HillSongImg,
    PlaylistCard: ' ',
    PlayType: 'Playlist',
    Featuring: 'With Hillsong Worship and Bethel Musics',
    Time: ' 27 mins',
    Likes: '768, 573 likes',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <MyGospelPlaylist myGospel=" " />,
    switchPlaylist: <PlaylistLikeBar myGospelPlaylistSwitch=" " />,
  },
];

export const mixData = [
  {
    key: 'Billie',
    FeatureImg: BillieMixImg,
    CardTitle: 'Billie Eilish Mix',
    Featuring: 'Harry Styles, Sia, Post Malone',
    contentType: 'Playlist',
    message: 'Harry Styles, Sia, Post Malone and Billie Eilish',
    Time: ' about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',

    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },

  {
    key: 'David',
    FeatureImg: DavidMixImg,
    CardTitle: 'David Guetta Mix',
    Featuring: 'Harry Styles, Sia, Post Malone and Billie Eilish',
    message: 'Harry Styles, Sia, Post Malone and Billie Eilish',
    Time: ' about 3hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'Sia',
    FeatureImg: SiaMixImg,
    CardTitle: 'Sia Mix',
    Featuring: 'Harry Styles, Post Malone and Billie Eilish',
    message: 'Harry Styles, Post Malone and Billie Eilish',
    Time: ' about 3hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'Post',
    FeatureImg: PostMixImg,
    CardTitle: 'Post Malone Mix',
    Featuring: 'Harry Styles, Sia and Billie Eilish',
    message: 'Harry Styles, Sia and Billie Eilish',
    Time: ' about 3hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
];

export const madeForUser = [
  {
    key: 'Heartache',
    FeatureImg: HeartacheImg,
    CardTitle: '10 years of heartache',
    Featuring: 'Songs of the decade that hurts so bad',

    message: 'Songs of the decade that hurts so bad',
    Time: 'about 1hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <LifeSucksPlaylist lifeSucks=" " />,
    switchPlaylist: <PlaylistLikeBar lifeSucksMixPlaylistSwitch=" " />,
  },
  {
    key: 'Comfort ',
    FeatureImg: ComfortImg,
    CardTitle: 'Comfort Zone',
    Featuring: 'Chilled songs that you are familiar with',
    message: 'Chilled songs that you are familiar with',
    Time: 'about 3hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'LifeSucks',
    FeatureImg: LifeSucksImg,
    CardTitle: 'Life Sucks',
    Featuring: 'Having a bad day? We know how it feels!',

    message: 'Having a bad day? We know how it feels!',
    Time: 'about 1hr 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <LifeSucksPlaylist lifeSucks=" " />,
    switchPlaylist: <PlaylistLikeBar lifeSucksMixPlaylistSwitch=" " />,
  },
  {
    key: 'Chill',
    FeatureImg: ChillImg,
    CardTitle: 'Chill Hits',
    Featuring: 'Kick back to the best new and recent chill hits',
    message: 'Kick back to the best new and recent chill hits',
    Time: 'about 3hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'Shower',
    FeatureImg: ShowerSongsImg,
    CardTitle: 'Shower Songs',
    Featuring: 'Splash and sing-along',
    message: 'Splash and sing-along',
    Time: 'about 3hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
];
export const radioData = [
  {
    key: 'WeekndRadio',
    FeatureImg: WeekndRadioImg,
    CardTitle: 'The weeknd radio',
    Featuring: 'With SZA, Dax, Drake and more',
    message: 'With SZA, Dax, Drake and more',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'PostRadio',
    FeatureImg: PostRadioImg,
    CardTitle: 'Post Malone radio',
    Featuring: 'With Khalid, Avicii, Justin Bieber and more',

    message: 'With Khalid, Avicii, Justin Bieber and more',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'BilieRadio',
    FeatureImg: BilieRadioImg,
    CardTitle: 'Billie Eilish radio',
    Featuring: 'With Olivia Rodrigo Doja Cat and more',

    message: 'With Olivia Rodrigo Doja Cat and more',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'DavidRadio',
    FeatureImg: DavidRadioImg,
    CardTitle: 'David Guetta radio',
    Featuring: 'With Calvin Harris, Tiësto, Flo Rida and more',

    message: 'With Calvin Harris, Tiësto, Flo Rida and more',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'EdRadio',
    FeatureImg: EdRadioImg,
    CardTitle: 'Ed Sheeran Radio',
    Featuring: 'With Shawn Mendes, Sam Smith and more',
    message: 'With Shawn Mendes, Sam Smith and more',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
];
export const ThisIsData = [
  {
    key: 'ThisBil',
    FeatureImg: ThisBillImg,
    CardTitle: 'Billie Eilish',
    Featuring: 'By Spotify',
    message: 'All the essentials all in one playlist',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs:  <Playlists eilish=" " /> ,
    switchPlaylist: <PlaylistLikeBar eilishMixPlaylistSwitch=" " />,
  },
  {
    key: 'ThisNeigh',
    FeatureImg: ThisNeighImg,
    CardTitle: 'The Neighbourhood',
    Featuring: 'By spotify',
    message: 'All the essentials all in one playlist',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'ThisSia',
    FeatureImg: ThisSiaImg,
    CardTitle: 'Sia',
    Featuring: 'By Spotify',
    message: 'All the essentials all in one playlist',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'ThisImagine',
    FeatureImg: ThisImagineImg,
    CardTitle: 'Imagine Dragons',
    Featuring: 'By Spotify',
    message: 'All the essentials all in one playlist',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />
  },

  {
    key: 'ThisTwenty',
    FeatureImg: ThisTwentyImg,
    CardTitle: 'Twenty One Pilots',
    Featuring: 'By spotify',
    message: 'All the essentials all in one playlist',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  {
    key: 'ThisXXX',
    FeatureImg: ThisXXXImg,
    CardTitle: 'XXXTENTACION',
    Featuring: 'By Spotify',
    message: 'All the essentials all in one playlist',
    Time: 'about 2hrs 30mins',
    Likes: '768, 573 likes',
    number: '#',
    duration: ClockIcon,
    album: 'Album',
    title: 'Title',
    playlistSongs: <Playlists myHits=" " />,
    switchPlaylist: <PlaylistLikeBar myHitsMixPlaylistSwitch=" " />,
  },
  
];
export const BrowseCardData = [
  {
    id: 1,
    genre: 'Music',
    genreImg: TTHImg,
    background: '#dc148c',
  },
  {
    id: 2,
    genre: 'Podcasts',
    genreImg: ScienceImg,
    background: '#006450',
  },
  {
    id: 3,
    genre: 'Life Events',
    genreImg: LifeEventsImg,
    background: '#8400e7',
  },
  {
    id: 4,
    genre: 'New Realease',
    genreImg: FridayImg,
    background: '#e8115b',
  },
  {
    id: 5,
    genre: 'Focus',
    genreImg: DeepImg,
    background: '#503750',
  },
  {
    id: 6,
    genre: 'Gospel',
    genreImg: GospelImg,
    background: '#0d73ec',
  },
  {
    id: 7,
    genre: 'Afro',
    genreImg: AfroImg,
    background: '#d84000',
  },
  {
    id: 8,
    genre: 'Beast',
    genreImg: BeastImg,
    background: '#777777',
  },
  {
    id: 9,
    genre: 'Sleep',
    genreImg: SleepImg,
    background: '#1e3264',
  },
  {
    id: 10,
    genre: 'Movies',
    genreImg: MoviesImg,
    background: '#af2896',
  },
  {
    id: 11,
    genre: 'Music',
    genreImg: TTHImg,
    background: '#dc148c',
  },
  {
    id: 12,
    genre: 'Podcasts',
    genreImg: ScienceImg,
    background: '#006450',
  },
  {
    id: 13,
    genre: 'Life Events',
    genreImg: LifeEventsImg,
    background: '#8400e7',
  },
  {
    id: 14,
    genre: 'New Realease',
    genreImg: FridayImg,
    background: '#e8115b',
  },
  {
    id: 15,
    genre: 'Focus',
    genreImg: DeepImg,
    background: '#503750',
  },
  {
    id: 16,
    genre: 'Gospel',
    genreImg: GospelImg,
    background: '#0d73ec',
  },
  {
    id: 17,
    genre: 'Afro',
    genreImg: AfroImg,
    background: '#d84000',
  },
  {
    id: 18,
    genre: 'Beast',
    genreImg: BeastImg,
    background: '#777777',
  },
  {
    id: 19,
    genre: 'Sleep',
    genreImg: SleepImg,
    
    background: '#1e3264',
  },
  {
    id: 20,
    genre: 'Movies',
    genreImg: MoviesImg,
    background: '#af2896',
  },
];
export default FiltersData;