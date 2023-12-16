import React, { useState } from 'react';

import OceansImg from './../Assets/Images/Oceans.jpg';

import HillImg from './../Assets/Images/Hill.jpg';

import HillTwoImg from './../Assets/Images/HillTwo.jpg';
import HillThreeImg from './../Assets/Images/HillThree.jpg';
import HillFourImg from './../Assets/Images/HillFour.jpg';
import Oceans from './../Assets/Music/Oceans Where Feet May Fail Hillsong United.mp3';
import SlavesImg from './../Assets/Images/Slaves.jpg';

import BethelImg from './../Assets/Images/Bethel.jpg';

import BethelTwoImg from './../Assets/Images/BethelTwo.jpg';
import BethelThreeImg from './../Assets/Images/BethelThree.jpg';
import BethelFourImg from './../Assets/Images/BethelFour.jpg';
import Slaves from './../Assets/Music/Bethel Musics No Longer Slaves.mp3';
import Surrender from './../Assets/Music/Hillsong Worship I Surrender.mp3';
import SurrenderImg from './../Assets/Images/Surrender.jpg';

import { useMusic } from './MusicContext';
import Cards from './Cards';
export const myGospel = [
  {
    id: 1,
    songCard: ' ',
    songNumber: '1',
    songImg: OceansImg,
    songName: 'Oceans',
    songArtists: 'Hillsong United',
    songArtistMain: 'Hillsong United',
    songAlbum: 'Oceans',
    songDuration: '9:00',
    audioUrl: Oceans,
    artistImg: HillImg,
    songStream: '3,767,338',
    aboutArtists: `
        Hillsong UNITED is committed to creating a musical expression that is
        almost uncomfortable in its uniqueness. Our mission is to write songs
        that awa...
      `,
    artistsFirst: HillImg,
    artistsSec: HillTwoImg,
    artistsThird: HillThreeImg,
    artistsFourth: HillFourImg,
    artistsFifth: HillImg,
    artistsNo: '#',
    artistFollow: '5,054,272',
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
    artistsBio: `
        Hillsong UNITED is committed to creating a musical expression that is
        almost uncomfortable in its uniqueness. Our mission is to write songs
        that awaken churches and individuals to the fact that we are redeemed
        and called into the story of God. Birthed in the youth ministry of
        Hillsong Church in Australia, UNITED is an eclectic mix of musicians,
        songwriters and worship leaders.
      
    `,
  },
  {
    id: 2,
    songCard: ' ',
    songNumber: '2',
    songImg: SlavesImg,
    songName: 'No Longer Slaves',
    songArtists: 'Bethel Musics',
    songArtistMain: 'Bethel Musics',
    songAlbum: 'Peace',
    songDuration: '6:09',
    audioUrl: Slaves,
    artistImg: BethelImg,
    songStream: '4,767,338',
    aboutArtists: `
        Bethel Music is a worship movement pursuing the presence of God and
        capturing fresh expressions of worship out of Redding, California.
        Bethel Musi...
      `,
    artistsFirst: BethelImg,
    artistsSec: BethelTwoImg,
    artistsThird: BethelThreeImg,
    artistsFourth: BethelFourImg,
    artistsFifth: BethelImg,
    artistsNo: '#',
    artistFollow: '5,054,272',
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
    artistsBio: `
        Bethel Music is a worship movement pursuing the presence of God and
        capturing fresh expressions of worship out of Redding, California.
        Bethel Music has grown from a local church music ministry to a global
        outreach made up of a collective of songwriters, artists and musicians.
        Brian and Jenn Johnson co-founded this movement in 2001; their mission
        was to raise up worshippers who take hold of their true identity and
        pursue intimacy with God above all else. Since 2001, the Bethel Music
        collective has released 17 worship albums, the most recent releases
        being Homecoming (2021), Peace (2021), and Simple (2022), each carrying
        a unique theme and featuring some of the most well-recognized artists in
        the genre. In 2021, the label was nominated for 6 Dove Awards, and
        another 11 in 2022, spanning categories from Songwriter of the Year and
        Worship Album of the Year to Inspirational and Rock/Contemporary Songs
        of the Year. As a youthful label of only 13 years, Bethel Music has
        broken records, ranking in CCLI’s top 25 songs since 2013. Their song
        “This Is Amazing Grace” has ranked in the top 25 songs since 2014, “No
        Longer Slaves” since 2016, and “The Lion and the Lamb” since 2017. In
        addition, “RecklessLove” has appeared in the top 10 since 2018 and
        “Living Hope” in the top 10 since 2019. Hitting a new stride over the
        last few years, Bethel Music has continually ranked at #6 in the top 10
        radio market share.
      `,
  },
  {
    id: 3,
    songCard: ' ',
    songNumber: '3',
    songImg: SurrenderImg,
    songName: 'I Surrender',
    songArtists: 'Hillsong United',
    songArtistMain: 'Hillsong United',
    songAlbum: 'I Surrender',
    songDuration: '11:15',
    audioUrl: Surrender,
    artistImg: HillImg,
    songStream: '3,767,338',
    aboutArtists: `
        Hillsong UNITED is committed to creating a musical expression that is
        almost uncomfortable in its uniqueness. Our mission is to write songs
        that awa...
      `,
    artistsFirst: HillImg,
    artistsSec: HillTwoImg,
    artistsThird: HillThreeImg,
    artistsFourth: HillFourImg,
    artistsFifth: HillImg,
    artistsNo: '#',
    artistFollow: '5,054,272',
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
    artistsBio: `
        Hillsong UNITED is committed to creating a musical expression that is
        almost uncomfortable in its uniqueness. Our mission is to write songs
        that awaken churches and individuals to the fact that we are redeemed
        and called into the story of God. Birthed in the youth ministry of
        Hillsong Church in Australia, UNITED is an eclectic mix of musicians,
        songwriters and worship leaders.
      
    `,
  },
];
export const MyGospelPlaylist = (props) => {
  const { selectedSong, setSelectedSong } = useMusic();

  const [setIsPlaying] = useState(false);

  const handleTogglePlay = (audioUrl) => {
    const myGospelSong = myGospel.find((song) => song.audioUrl === audioUrl);

    const selectedSong = myGospelSong;

    setSelectedSong(selectedSong);
  };
  return (
    <>
      {props.myGospel && (
        <div>
          {myGospel.map((song, index) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                myGospelMix={props.myGospelMix}
                artistsBio={song.artistsBio}
                aboutArtists={song.aboutArtists}
                songNumber={index + 1}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default MyGospelPlaylist;
