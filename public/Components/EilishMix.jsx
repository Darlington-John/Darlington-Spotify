import React, { useState } from 'react';
import BlohshImg from './../Assets/Images/Blohsh.jpg';
import LifeSucksImg from './../Assets/Images/LifeSucks.jpg';
import FallAsleepImg from './../Assets/Images/FallAsleep.jpg';

import BillieEilishImg from './../Assets/Images/BillieEilish.jpg';

import ChangeMyNumber from "./../Assets/Music/Billie Eilish-I did'nt change my number.mp3";
import BadGuy from './../Assets/Music/Billie Eilish Bad Guy.mp3';
import Everything from './../Assets/Music/Billie Eilish Everything I Wanted.mp3';
import EverythingImg from './../Assets/Images/Everything.jpg';
import Oxytocin from './../Assets/Music/Billie Eilish Oxytocin.mp3';
import OverHeated from './../Assets/Music/Billie Eilish OverHeated.mp3';
import Crown from './../Assets/Music/Billie Eilish You Should See Me In A Crown.mp3';
import TimeToDie from './../Assets/Music/Billie Eilish No Time To Die.mp3';
import NDA from './../Assets/Music/Billie Eilish NDA.mp3';
import HappierThanEver from './../Assets/Music/Billie Eilish Happier Than Ever.mp3';
import Goldwing from './../Assets/Music/Billie Eilish Goldwing.mp3';
import Lovely from './../Assets/Music/Billie Eilish Lovely.mp3';
import PartyOver from './../Assets/Music/Billie Eilish when the partys over.mp3';
import OceanEyes from './../Assets/Music/Billie Eilish Ocean Eyes.mp3';
import StrangeAddiction from './../Assets/Music/Billie Eilish My strange addiction.mp3';
import LoveYou from './../Assets/Music/Billie Eilish I Love You.mp3';

import LovelyImg from './../Assets/Images/Lovely.jpg';
import TimeToDieImg from './../Assets/Images/TimeToDie.jpg';

import BillieForestImg from './../Assets/Images/BillieForest.jpg';

import BillieRedImg from './../Assets/Images/BillieRed.jpg';
import BillieEilishGreenImg from './../Assets/Images/BillieEilishGreen.jpg';
import BillieAnacondaImg from './../Assets/Images/BillieAnaconda.jpg';
import OceanEyesImg from './../Assets/Images/OceanEyes.jpg';
import TVImg from './../Assets/Images/TV.jpg';
import HappierThanEverImg from './../Assets/Images/HappierThanEver.jpg';
import BellyacheImg from './../Assets/Images/Bellyache.jpg';

import BoredImg from './../Assets/Images/Bored.jpg';
import GettingOlder from './../Assets/Music/Billie Eilish Getting Older.mp3';
import MyFuture from './../Assets/Music/Billie Eilish My Future.mp3';
import Therefore from './../Assets/Music/Billie Eilish Therefore I Am.mp3';

import TV from './../Assets/Music/Billie Eilish TV.mp3';
import Ilomilo from './../Assets/Music/Billie Eilish ilomilo.mp3';
import BossaNova from './../Assets/Music/Billie Eilish Billie Bossa Nova.mp3';
import Bellyache from './../Assets/Music/Billie Eilish Bellyache.mp3';

import Bored from './../Assets/Music/Billie Eilish Bored.mp3';
import Dies from './../Assets/Music/Billie Eilish Everybody Dies.mp3';

import Copycat from './../Assets/Music/Billie Eilish Copycat.mp3';

import Cards from './Cards';
import { useMusic } from './MusicContext';
import ArtistsBio from './ArtistsBio';
export const eilishMix = [
  {
    id: 1,
    songCard: ' ',
    songNumber: '1',
    songImg: HappierThanEverImg,
    songName: "I Did'nt Change My Number",
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',

    songAlbum: 'Happier Than Ever',
    songDuration: '2:38',
    audioUrl: ChangeMyNumber,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },

  {
    id: 2,
    songCard: ' ',
    songNumber: '2',
    songImg: FallAsleepImg,
    songName: 'Bad Guy',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'When We All Fall Asleep',
    songDuration: '3:14',
    audioUrl: BadGuy,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 3,
    songCard: ' ',
    songNumber: '3',
    songImg: HappierThanEverImg,
    songName: 'Oxytocin',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '3:30',
    audioUrl: Oxytocin,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 4,
    songCard: ' ',
    songNumber: '4',
    songImg: EverythingImg,
    songName: 'Everything I Wanted',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Everything I Wanted',
    songDuration: '4:00',
    audioUrl: Everything,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 5,
    songCard: ' ',
    songNumber: '5',
    songImg: HappierThanEverImg,
    songName: 'OverHeated',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '3:34',
    audioUrl: OverHeated,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 6,
    songCard: ' ',
    songNumber: '6',
    songImg: FallAsleepImg,
    songName: 'You should see me in a crown',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'When We All Fall Asleep',
    songDuration: '2:59',
    audioUrl: Crown,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 7,
    songCard: ' ',
    songNumber: '7',
    songImg: TimeToDieImg,
    songName: 'No Time To Die',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'No Time To Die',
    songDuration: '4:03',
    audioUrl: TimeToDie,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 8,
    songCard: ' ',
    songNumber: '8',
    songImg: HappierThanEverImg,
    songName: 'NDA',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '3:35',
    audioUrl: NDA,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 9,
    songCard: ' ',
    songNumber: '9',
    songImg: HappierThanEverImg,
    songName: 'Happier Than Ever',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '5:15',
    audioUrl: HappierThanEver,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 10,
    songCard: ' ',
    songNumber: '10',
    songImg: HappierThanEverImg,
    songName: 'Goldwing',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '2:31',
    audioUrl: Goldwing,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 11,
    songCard: ' ',
    songNumber: '11',
    songImg: LovelyImg,
    songName: 'Lovely',
    songArtists: 'Billie Eilish ft Khalid',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Lovely',
    songDuration: '3:17',
    audioUrl: Lovely,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 12,
    songCard: ' ',
    songNumber: '12',
    songImg: FallAsleepImg,
    songName: "When the party's over",
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'When We All Fall Asleep',
    songDuration: '3:13',
    audioUrl: PartyOver,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 13,
    songCard: ' ',
    songNumber: '13',
    songImg: FallAsleepImg,
    songName: 'My Strange Addiction',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'When We All Fall Asleep',
    songDuration: '2:59',
    audioUrl: StrangeAddiction,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 14,
    songCard: ' ',
    songNumber: '14',
    songImg: FallAsleepImg,
    songName: 'I Love You',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'When We All Fall Asleep',
    songDuration: '4:52',
    audioUrl: LoveYou,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 15,
    songCard: ' ',
    songNumber: '15',
    songImg: OceanEyesImg,
    songName: 'Ocean Eyes',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: "Don't Smile At Me",
    songDuration: '3:20',
    audioUrl: OceanEyes,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 16,
    songCard: ' ',
    songNumber: '16',
    songImg: HappierThanEverImg,
    songName: 'Getting Older',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '4:04',
    audioUrl: GettingOlder,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 17,
    songCard: ' ',
    songNumber: '17',
    songImg: HappierThanEverImg,
    songName: 'My Future',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '3:49',
    audioUrl: MyFuture,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 18,
    songCard: ' ',
    songNumber: '18',
    songImg: HappierThanEverImg,
    songName: 'Therefore I Am',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '2:53',
    audioUrl: Therefore,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 19,
    songCard: ' ',
    songNumber: '19',
    songImg: TVImg,
    songName: 'TV',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Guitar Songs',
    songDuration: '4:41',
    audioUrl: TV,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 20,
    songCard: ' ',
    songNumber: '20',
    songImg: FallAsleepImg,
    songName: 'Ilomilo',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'When We All Fall Asleep',
    songDuration: '2:36',
    audioUrl: Ilomilo,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 21,
    songCard: ' ',
    songNumber: '21',
    songImg: HappierThanEverImg,
    songName: 'Billie Bossa Nova',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '3:16',
    audioUrl: BossaNova,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 22,
    songCard: ' ',
    songNumber: '22',
    songImg: BellyacheImg,
    songName: 'Bellyache',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Bellyache',
    songDuration: '3:30',
    audioUrl: Bellyache,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 23,
    songCard: ' ',
    songNumber: '23',
    songImg: BoredImg,
    songName: 'Bored',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Bored',
    songDuration: '2:58',
    audioUrl: Bored,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 24,
    songCard: ' ',
    songNumber: '24',
    songImg: HappierThanEverImg,
    songName: 'Everybody Dies',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '3:26',
    audioUrl: Dies,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  {
    id: 25,
    songCard: ' ',
    songNumber: '25',
    songImg: OceanEyesImg,
    songName: 'Copycat',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: "Don't Smile At Me",
    songDuration: '3:13',
    audioUrl: Copycat,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: (
      <span>
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      </span>
    ),
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#7',
    artistFollow: '88,054,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '1,048,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '911,711',
    listLocThree: 'London, GB',
    listThree: '894,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '782,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '744,634 ',
    artistsBio: <ArtistsBio BillieEilish=" " />,
  },
  // Add more songs for this playlist
];

const EilishPlaylist = (props) => {
  const { selectedSong, setSelectedSong } = useMusic();

  const [setIsPlaying] = useState(false);

  const handleTogglePlay = (audioUrl) => {
    const eilishSong = eilishMix.find((song) => song.audioUrl === audioUrl);

    const selectedSong = eilishSong;

    setSelectedSong(selectedSong);
  };
  return (
    <>
      {props.Eilish && (
        <div>
          {eilishMix.map((song) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                eilishMix={props.eilishMix}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default EilishPlaylist;
