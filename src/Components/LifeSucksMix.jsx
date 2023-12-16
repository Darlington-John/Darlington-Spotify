import React, { useState } from 'react';

import FallAsleepImg from './../Assets/Images/FallAsleep.jpg';

import BillieEilishImg from './../Assets/Images/BillieEilish.jpg';

import Everything from './../Assets/Music/Billie Eilish Everything I Wanted.mp3';
import EverythingImg from './../Assets/Images/Everything.jpg';

import Lovely from './../Assets/Music/Billie Eilish Lovely.mp3';
import PartyOver from './../Assets/Music/Billie Eilish when the partys over.mp3';

import Halleys from './../Assets/Music/Billie Eilish Halleys Comet.mp3';
import Power from './../Assets/Music/Billie Eilish Your Power.mp3';

import FeetUnder from './../Assets/Music/Billie Eilish Six Feet Under.mp3';
import LovelyImg from './../Assets/Images/Lovely.jpg';

import FeetUnderImg from './../Assets/Images/FeetUnder.jpg';
import BillieForestImg from './../Assets/Images/BillieForest.jpg';
import MadeForImg from './../Assets/Images/MadeFor.jpg';
import BillieRedImg from './../Assets/Images/BillieRed.jpg';
import BillieEilishGreenImg from './../Assets/Images/BillieEilishGreen.jpg';
import BillieAnacondaImg from './../Assets/Images/BillieAnaconda.jpg';

import TVImg from './../Assets/Images/TV.jpg';
import HappierThanEverImg from './../Assets/Images/HappierThanEver.jpg';

import PastLivesImg from './../Assets/Images/PastLives.jpg';
import SapientImg from './../Assets/Images/Sapient.jpg';
import BoredImg from './../Assets/Images/Bored.jpg';
import GettingOlder from './../Assets/Music/Billie Eilish Getting Older.mp3';

import PastLives from './../Assets/Music/Sapientdream Past lives.mp3';
import MadeFor from './../Assets/Music/Billie Eilish What Was I Made For.mp3';
import TV from './../Assets/Music/Billie Eilish TV.mp3';

import Bored from './../Assets/Music/Billie Eilish Bored.mp3';
import Dies from './../Assets/Music/Billie Eilish Everybody Dies.mp3';
import Stay from './../Assets/Music/Rihanna Mikky Ekko Stay.mp3';
import RihannaImg from './../Assets/Images/Rihanna.jpg';
import StayImg from './../Assets/Images/Stay.jpg';
import RihannaTwoImg from './../Assets/Images/RihannaTwo.jpg';
import RihannaThreeImg from './../Assets/Images/RihannaThree.jpg';
import RihannaFourImg from './../Assets/Images/RihannaFour.jpg';
import Writtings from './../Assets/Music/Sam Smith Writings On The Wall.mp3';
import SamSmithImg from './../Assets/Images/SamSmith.jpg';
import WrittingsImg from './../Assets/Images/Writtings.jpg';
import SamSmithTwoImg from './../Assets/Images/SamSmithTwo.jpg';
import SamSmithThreeImg from './../Assets/Images/SamSmithThree.jpg';
import SamSmithFourImg from './../Assets/Images/SamSmithFour.jpg';
import Jocelyn from './../Assets/Music/XXXTentacion Jocelyn Flores.mp3';
import XXXImg from './../Assets/Images/XXX.jpg';
import JocelynImg from './../Assets/Images/Jocelyn.jpg';
import XXXTwoImg from './../Assets/Images/XXXTwo.jpg';
import XXXThreeImg from './../Assets/Images/XXXThree.jpg';
import XXXFourImg from './../Assets/Images/XXXFour.jpg';
import SaySomething from './../Assets/Music/A Great Big World ft Christina Aguilera Say Something.mp3';
import GreatImg from './../Assets/Images/Great.jpg';
import SaySomethingImg from './../Assets/Images/SaySomething.jpg';
import GreatTwoImg from './../Assets/Images/GreatTwo.jpg';
import Photo from './../Assets/Music/Ed Sheeran Photograph.mp3';
import EdImg from './../Assets/Images/Ed.jpg';
import xImg from './../Assets/Images/x.jpg';
import EdTwoImg from './../Assets/Images/EdTwo.jpg';
import EdThreeImg from './../Assets/Images/EdThree.jpg';
import EdFourImg from './../Assets/Images/EdFour.jpg';
import EdFiveImg from './../Assets/Images/EdFive.jpg';

import ForRent from './../Assets/Music/Dido Life for Rent.mp3';
import DidoImg from './../Assets/Images/Dido.jpg';
import ForRentImg from './../Assets/Images/ForRent.jpg';
import DidoTwoImg from './../Assets/Images/DidoTwo.jpg';
import Mirror from './../Assets/Music/Lil Wayne ft Bruno Mars Mirror On The Wall.mp3';
import MirrorImg from './../Assets/Images/Mirror.jpg';
import LilImg from './../Assets/Images/Lil.jpg';
import LilTwoImg from './../Assets/Images/LilTwo.jpg';
import StayWithMe from './../Assets/Music/Sam Smith Stay With Me.mp3';
import Blood from './../Assets/Music/Blood on My Hands Song by Michael McQuaid.mp3';
import King from './../Assets/Music/Xxxtentacion King.mp3';
import Angeles from './../Assets/Music/Angeles Crest.wav';
import Never from './../Assets/Music/XXXTENTACION NEVER.mp3';

import ArtistsBio from './ArtistsBio';

import { useMusic } from './MusicContext';
import Cards from './Cards';
export const lifeSucksMix = [
  {
    id: 1,
    songCard: ' ',
    songNumber: '1',
    songImg: FeetUnderImg,
    songName: 'Six Feet Under',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Six Feet Under',
    songDuration: '3:20',
    audioUrl: FeetUnder,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
  {
    id: 2,
    songCard: ' ',
    songNumber: '2',
    songImg: PastLivesImg,
    songName: 'Past Lives',
    songArtists: 'Sapientdream',
    songAlbum: 'Past Lives',
    songDuration: '1:57',
    audioUrl: PastLives,
    artistImg: SapientImg,
    songStream: '70,338',
    aboutArtists: `
        Sapientdream is not just a music project; it is a personal diary etched
        in melodies, a symphony of emotions and experiences that transcends the
        realm of sound. For....
      `,
    artistsFirst: SapientImg,
    artistsSec: SapientImg,
    artistsThird: SapientImg,
    artistsFourth: SapientImg,
    artistsFifth: SapientImg,
    artistsNo: '#',
    artistFollow: '54,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '48,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '11,711',
    listLocThree: 'London, GB',
    listThree: '4,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '2,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '1,634 ',
    artistsBio: `
        Sapientdream is not just a music project; it is a personal diary etched
        in melodies, a symphony of emotions and experiences that transcends the
        realm of sound. For the creator, it serves as a pathway to decipher the
        labyrinth of their own reality, a mirror to reflect upon their thoughts,
        dreams and innermost feelings. Born out of the heart and mind of someone
        whose relationship with language was uniquely shaped by their
        Asperger's, Sapientdream takes form as a universal language. It is a
        language that doesn't rely on fluency or syntax, but rather on the
        harmonies and rhythms that resonate across cultures and boundaries. As
        the creator's second language, music became the canvas upon which they
        painted their narrative, unveiling stories that words could never truly
        capture.
    
    `,
  },
  {
    id: 3,
    songCard: ' ',
    songNumber: '3',
    songImg: MadeForImg,
    songName: 'What Was I Made For',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'From Barbie',
    songDuration: '3:48',
    audioUrl: MadeFor,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
  {
    id: 4,
    songCard: ' ',
    songNumber: '4',
    songImg: StayImg,
    songName: 'Stay',
    songArtists: 'Rihanna ft Mikky Ekko',
    songArtistMain: 'Rihanna',
    songAlbum: 'Unapologetic',
    songDuration: '4:00',
    audioUrl: Stay,
    artistImg: RihannaImg,
    songStream: '70,767,338',
    aboutArtists: `
        Among the most popular and acclaimed artists in postmillennial
        contemporary music, Rihanna is also uncommonly dynamic, having mixed and
        matched p...
      
    `,
    artistsFirst: RihannaImg,
    artistsSec: RihannaTwoImg,
    artistsThird: RihannaThreeImg,
    artistsFourth: RihannaFourImg,
    artistsFifth: RihannaImg,
    artistsNo: '#5',
    artistFollow: '50,054,272',
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
        Among the most popular and acclaimed artists in postmillennial
        contemporary music, Rihanna is also uncommonly dynamic, having mixed and
        matched pure pop, dancehall, R&B, EDM, and adult contemporary material
        throughout her career. She went supernova in 2005 with her boisterous
        debut single, "Pon de Replay," a worldwide hit, and was a near-constant
        presence in the upper reaches of global pop charts until she took a
        break from releasing music in the late 2010s. Through 2017, the native
        Barbadian headlined 11 number one hits, including "Umbrella" and "Only
        Girl (In the World)," singles that earned her two of her nine Grammy
        Awards. More than just a singles artist, Rihanna continually pushed
        ahead stylistically with her LPs, highlighted by the bold Good Girl Gone
        Bad (2007), the steely Rated R (2009), and the composed Anti (2016), all
        of which confounded expectations and placed within the Top Ten of the
        Billboard 200 with eventual multi-platinum certifications. Rihanna
        studded her secondary discography as a featured artist during this
        period with major crossover pop hits headlined by the likes of
      
    `,
  },
  {
    id: 5,
    songCard: ' ',
    songNumber: '5',
    songImg: LovelyImg,
    songName: 'Lovely',
    songArtists: 'Billie Eilish ft Khalid',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Lovely',
    songDuration: '3:17',
    audioUrl: Lovely,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
  {
    id: 6,
    songCard: ' ',
    songNumber: '6',
    songImg: WrittingsImg,
    songName: 'Writings on the wall',
    songArtists: 'Sam Smith',
    songArtistMain: 'Sam Smith',
    songAlbum: 'Spectre',
    songDuration: '4:44',
    audioUrl: Writtings,
    artistImg: SamSmithImg,
    songStream: '55,767,338',
    aboutArtists: `
      
        "It feels like emotional, sexual and spiritual liberation,” declares the
        most confident and creatively fulfilled version of Sam Smith the world
        has yet encounte....
      
    `,
    artistsFirst: SamSmithImg,
    artistsSec: SamSmithTwoImg,
    artistsThird: SamSmithThreeImg,
    artistsFourth: SamSmithFourImg,
    artistsFifth: SamSmithImg,
    artistsNo: '#28',
    artistFollow: '22,054,272',
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
        "It feels like emotional, sexual and spiritual liberation,” declares the
        most confident and creatively fulfilled version of Sam Smith the world
        has yet encountered. “So, it was beautiful, with this album, to sing
        freely again, for me. It feels like a coming of age.” Gloria, Sam
        Smith’s fourth album, is not only a creative revelation but something of
        a personal revolution for the celebrated virtuoso soul
        singer/songwriter. Since their No.1 debut album In The Lonely Hour
        (2014), Smith has amassed a constellation of glittering achievements: 35
        million albums sold, 250 million singles, 45 billion multi-platform
        streams, four Grammys, three BRITs, six MOBOs, a Golden Globe, one
        Oscar, two No.1 albums, five No.1 singles, two No.1 singles as featured
        vocalist on club bangers from Naughty Boy (‘La La La’, 2013) and Calvin
        Harris (‘Promises’, alongside Jessie Reyez, 2018). But Gloria is a
        different kind of achievement, which isn’t playing the numbers game.
        It’s the dazzling, sumptuous, sophisticated, unexpected and at times
        thrillingly edgy sound of Sam Smith’s creative heart today. The sound of
        constricting shackles crashing to the floor, of boundaries joyfully
        breached, of a still-searching talent discovering what it means to be
        truly free. It’s the sound of now, a diverse, multi-genre mosaic album
        featuring a trio of female voices from across the globe.
      `,
  },
  {
    id: 7,
    songCard: ' ',
    songNumber: '7',
    songImg: JocelynImg,
    songName: 'Jocelyn Flores',
    songArtists: 'XXXTENTACION',
    songArtistMain: 'XXXTENTACION',
    songAlbum: '17',
    songDuration: '2:00 ',
    audioUrl: Jocelyn,
    artistImg: XXXImg,
    songStream: '38,767,338',
    aboutArtists: `
        "Controversial rapper Jahseh Dwayne Onfroy (aka XXXTentacion) played
        fast and loose when it came to genres, often incorporating elements of
        punk roc...
      `,
    artistsFirst: XXXImg,
    artistsSec: XXXTwoImg,
    artistsThird: XXXThreeImg,
    artistsFourth: XXXFourImg,
    artistsFifth: XXXImg,
    artistsNo: '#81',
    artistFollow: '42,054,272',
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
    
        Controversial rapper Jahseh Dwayne Onfroy (aka XXXTentacion) played fast
        and loose when it came to genres, often incorporating elements of punk
        rock, hip-hop, R&B, and heavy metal. In the late 2010s, he experienced a
        quick rise with his dark and emotionally intense content, scoring a
        number one album with 2018's ?. Months later, at the peak of his
        popularity, he was shot and killed. Born in South Florida, Onfroy had a
        troubled upbringing, often getting into violent situations; his mother
        couldn't cope with raising him alone, so he was often forced to stay
        with various relatives as a result. At a very young age, Onfroy was sent
        to a juvenile detention center after committing armed robbery; it was
        there that he met friend and longtime collaborator . After his release,
        both Onfroy and decided to get clean and pursue a career in music,
        setting up the Florida rap crew in the process. In 2014, Onfroy uploaded
        his first track to SoundCloud, "Vice City," which quickly racked up
        hundreds of thousands of streams. Later the same year, he released two
        EPs, The Fall and Ice Hotel; the broad array of genres and vocal styles
        -- ranging from whispering and singing to rapping and outright screaming
        -- earned Onfroy a cult following in under a year. In 2015, he released
        two collaborative albums, Members Only, Vol. 1 and Vol. 2 -- alongside
        and various associates -- as well as his third and fourth EPs,
        ItWasn'tEnough and Willy Wonka Was a Child Murderer. His debut album,
        Bad Vibes Forever, was originally intended to be a mixtape released in
        2016; however, the expansion of the record into a full-length studio
        album, coupled with two separate incarcerations, repeatedly delayed the
        album's release. Single "Look at Me!," originally released in early
        2016, became a sleeper hit and was re-released in 2017, at which point
        it hit the Top 40 of the Billboard Hot 100 singles chart.
      
    `,
  },
  {
    id: 8,
    songCard: ' ',
    songNumber: '8',
    songImg: HappierThanEverImg,
    songName: 'Everybody Dies',
    songArtists: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '3:26',
    audioUrl: Dies,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
  {
    id: 9,
    songCard: ' ',
    songNumber: '9',
    songImg: SaySomethingImg,
    songName: 'Say Something',
    songArtists: 'A Great Big World',
    songArtistMain: 'A Great Big World',
    songAlbum: 'Say Something',
    songDuration: '3:51 ',
    audioUrl: SaySomething,
    artistImg: GreatImg,
    songStream: '1,338',
    aboutArtists: `
        A Great Big World is an American musical duo from New York[1] made up of
        singer/songwriters Ian Axel and Chad King and signed to Epic Records.
        The grou....
     `,
    artistsFirst: GreatImg,
    artistsSec: GreatTwoImg,
    artistsThird: GreatTwoImg,
    artistsFourth: GreatTwoImg,
    artistsFifth: GreatTwoImg,
    artistsNo: '#',
    artistFollow: '54,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '8,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '1,711',
    listLocThree: 'London, GB',
    listThree: '4,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '2,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '634 ',
    artistsBio: `
      
        A Great Big World is an American musical duo from New York[1] made up of
        singer/songwriters Ian Axel and Chad King and signed to Epic Records.
        The group is best known for their single "This Is the New Year", which
        was performed by the cast in an episode of Glee and reached the
        Billboard Mainstream Top 40 chart in May 2013,[2] and their worldwide
        hit "Say Something", particularly after recording it as a duet
        collaboration with Christina Aguilera. The duet peaked at number four on
        the Billboard Hot 100.
      
    `,
  },
  {
    id: 10,
    songCard: ' ',
    songNumber: '10',
    songImg: xImg,
    songName: 'Photograph',
    songArtists: 'Ed Sheeran',
    songArtistMain: 'Ed Sheeran',
    songAlbum: 'X',
    songDuration: '4:34',
    audioUrl: Photo,
    artistImg: EdImg,
    songStream: '77,747,338',
    aboutArtists: `
        Idiosyncratic pop singer Ed Sheeran borrows from any style that crosses
        his path, molding genres to fit a musical character all his own that's
        charmi....
     `,
    artistsFirst: EdImg,
    artistsSec: EdTwoImg,
    artistsThird: EdThreeImg,
    artistsFourth: EdFourImg,
    artistsFifth: EdFiveImg,
    artistsNo: '#7',
    artistFollow: '111,154,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '8,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '1,711',
    listLocThree: 'London, GB',
    listThree: '4,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '2,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '634 ',
    artistsBio: `
        Idiosyncratic pop singer Ed Sheeran borrows from any style that crosses
        his path, molding genres to fit a musical character all his own that's
        charming, personable, and popular on a global scale. Elements of folk,
        hip-hop, pop, dance, soul, and rock can be heard in his big hits "The A
        Team," "Sing," "Thinking Out Loud," and "Shape of You" -- which gives
        him a broad appeal among different demographics. It also helped elevate
        him to international acclaim not long after the release of his 2011
        debut LP, +, and took 2014's x and 2017's ÷ to the top of both the U.K.
        albums chart and the Billboard 200. Sheeran maintained his stardom with
        savvy collaborations -- his 2019 album No. 6 Collaborations Project
        featured an eclectic roster including , , , , , and -- and by continuing
        to write candidly about his life: his 2021 album = was filled with songs
        about being a new father. Sheeran's musical explorations continued on -,
        a 2023 album that featured several tracks co-written and co-produced by
        of , and its swiftly released companion Autumn Variations. When Ed
        Sheeran released +, he had just turned 20. He had been playing music
        since he was a child in Framlingham, Suffolk -- he was born in Halifax,
        West Yorkshire but his family moved when he was young -- enthralled by
        the classic rock he heard around the house. Sheeran started writing
        music in his early teens, recording a self-made album called Spinning
        Man when he was 13 in 2004. In addition to making music at home -- he
        put out an EP titled The Orange Room in 2005 -- he'd busk on the streets
        and play whatever stage he could find. When he was 16, he dropped out of
        school and moved to London so he could make a go of a professional
        career, landing work as a guitar tech for Nizlopi, gigging whenever he
        could, and auditioning unsuccessfully for the ITV series Britannia High.
        The self-released EP You Need Me arrived in 2009 -- it followed 2006's
        eponymous EP and 2007's Want Some? -- but his momentum started to build
        in 2010 thanks to the EPs Loose Change and Songs I Wrote with Amy and,
        especially, performance videos he posted to YouTube. Sheeran started to
        generate considerable buzz -- invited him to appear on his Sirius/XM
        radio show -- and he landed a deal with in late 2010. After a final
        independent EP, No. 5 Collaborations, arrived in January.
      
    `,
  },
  {
    id: 11,
    songCard: ' ',
    songNumber: '11',
    songImg: TVImg,
    songName: 'TV',
    songArtists: 'Billie Eilish',
    songAlbum: 'Guitar Songs',
    songDuration: '4:41',
    audioUrl: TV,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
  {
    id: 12,
    songCard: ' ',
    songNumber: '12',
    songImg: ForRentImg,
    songName: 'Life For Rent',
    songArtists: 'Dido',
    songArtistMain: 'Dido',
    songAlbum: 'Life For Rent',
    songDuration: '3:41',
    audioUrl: ForRent,
    artistImg: DidoImg,
    songStream: '1,338',
    aboutArtists: `
        Dido Armstrong is the former backing singer (with her brother Rollo’s
        band Faithless) who emerged from the shadows to make two of the
        best-selling albu...
      `,
    artistsFirst: DidoImg,
    artistsSec: DidoTwoImg,
    artistsThird: DidoTwoImg,
    artistsFourth: DidoTwoImg,
    artistsFifth: DidoTwoImg,
    artistsNo: '#',
    artistFollow: '54,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '8,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '1,711',
    listLocThree: 'London, GB',
    listThree: '4,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '2,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '634 ',
    artistsBio: `
        Dido Armstrong is the former backing singer (with her brother Rollo’s
        band Faithless) who emerged from the shadows to make two of the
        best-selling albums in British chart history. Dido’s titanic success
        swept her away. Released in 1998, No Angel’s success was slow burning,
        growing and growing to eventually become the bestselling album of 2001.
        All that time Dido was on the road, through the phenomenal Life For Rent
        in 2003, all the way to performing to a TV audience of billions at Live8
        in 2005. Having toured for nine years straight, she then decided to
        stop. It was time for Dido to catch up with her own life. Safe Trip Home
        was released in 2008, with a more acoustic and orchestral ambience. She
        got married in 2008 and a son, Stanley, was born in 2011. Dido went on
        to release one more album, Girl Who Got Away, in 2013, but once again
        opted not to take it on the road. And now she’s back with her fifth
        album, Still On My Mind. Released in March 2019, the album wafts in like
        a beautiful breeze, a chilled out tumble of sadness and joy, melancholy
        and bliss. Still On My Mind is only Dido’s fifth album in 20 years. And
        it is right up there with her best work.
      `,
  },
  {
    id: 13,
    songCard: ' ',
    songNumber: '13',
    songImg: MirrorImg,
    songName: 'Mirrors',
    songArtists: 'Lil Wayne ft Bruno Mars',
    songArtistMain: 'Lil Wayne',
    songAlbum: 'The Carter',
    songDuration: '4:02',
    audioUrl: Mirror,
    artistImg: LilImg,
    songStream: '1,338',
    aboutArtists: `
        Lil Wayne began his career as a near novelty, a preteen delivering
        hardcore Southern hip-hop. Through years of maturation and prolific
        output, during which t...
     `,
    artistsFirst: LilImg,
    artistsSec: LilTwoImg,
    artistsThird: LilTwoImg,
    artistsFourth: LilTwoImg,
    artistsFifth: LilTwoImg,
    artistsNo: '#',
    artistFollow: '54,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '8,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '1,711',
    listLocThree: 'London, GB',
    listThree: '4,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '2,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '634 ',
    artistsBio: `
      
        Lil Wayne began his career as a near novelty, a preteen delivering
        hardcore Southern hip-hop. Through years of maturation and prolific
        output, during which the delivery of his humorous and wordplay-heavy
        rhymes gradually changed from ringing and pugnacious to stoned and
        rasped, he developed into a million-unit-selling artist with a massive
        body of work, one so inventive and cunning that it makes his claim of
        being the "best rapper alive" worth considering. Wayne debuted at the
        age of 12, received his first platinum certification five years later as
        a member of , and immediately thereafter became a formidable solo artist
        with Tha Block Is Hot (1999), his first of 12 Top Ten albums on the
        Billboard 200. During a period of constant output, entailing not just
        successful full-lengths but also reputation-building mixtapes and
        featured appearances on pop hits like 's "Soldier" (2004), he reached
        mainstream superstar status with Tha Carter III (2008). A
        triple-platinum blockbuster, it spawned the number one pop hit
        "Lollipop" and the number six follow-up "A Milli," and netted three
        Grammy awards, including Best Rap Album. Throughout the 2010s, despite
        numerous legal and creative battles, Wayne continued to be a regular
        presence on the upper reaches of the charts with albums such as Tha
        Carter IV (2011) and I Am Not a Human Being II (2013), additional smash
        singles as a headliner, and a continually lengthening list of
        collaborative hits, including the multi-platinum "Sucker for Pain" (for
        the Suicide Squad soundtrack in 2016) and "I'm the One" (headlined by in
        2017). Since the latter hit, Wayne has topped the Billboard 200 with the
        consecutive LPs Tha Carter V (2018) and Funeral (2020) and has continued
        to issue non-album singles and mixtapes, like his 2021 collaboration
        Trust Fund Babies, 2023's Tha Fix Before Tha VI, and the -assisted 2023
        single "Kant Nobody."
      
    `,
  },
  {
    id: 14,
    songCard: ' ',
    songNumber: '14',
    songImg: WrittingsImg,
    songName: 'Stay With Me',
    songArtists: 'Sam Smith',
    songArtistMain: 'Sam Smith',
    songAlbum: 'Lonely Hour',
    songDuration: '2:53',
    audioUrl: StayWithMe,
    artistImg: SamSmithImg,
    songStream: '55,767,338',
    aboutArtists: `
      
        "It feels like emotional, sexual and spiritual liberation,” declares the
        most confident and creatively fulfilled version of Sam Smith the world
        has yet encounte....
      
    `,
    artistsFirst: SamSmithImg,
    artistsSec: SamSmithTwoImg,
    artistsThird: SamSmithThreeImg,
    artistsFourth: SamSmithFourImg,
    artistsFifth: SamSmithImg,
    artistsNo: '#28',
    artistFollow: '22,054,272',
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
        "It feels like emotional, sexual and spiritual liberation,” declares the
        most confident and creatively fulfilled version of Sam Smith the world
        has yet encountered. “So, it was beautiful, with this album, to sing
        freely again, for me. It feels like a coming of age.” Gloria, Sam
        Smith’s fourth album, is not only a creative revelation but something of
        a personal revolution for the celebrated virtuoso soul
        singer/songwriter. Since their No.1 debut album In The Lonely Hour
        (2014), Smith has amassed a constellation of glittering achievements: 35
        million albums sold, 250 million singles, 45 billion multi-platform
        streams, four Grammys, three BRITs, six MOBOs, a Golden Globe, one
        Oscar, two No.1 albums, five No.1 singles, two No.1 singles as featured
        vocalist on club bangers from Naughty Boy (‘La La La’, 2013) and Calvin
        Harris (‘Promises’, alongside Jessie Reyez, 2018). But Gloria is a
        different kind of achievement, which isn’t playing the numbers game.
        It’s the dazzling, sumptuous, sophisticated, unexpected and at times
        thrillingly edgy sound of Sam Smith’s creative heart today. The sound of
        constricting shackles crashing to the floor, of boundaries joyfully
        breached, of a still-searching talent discovering what it means to be
        truly free. It’s the sound of now, a diverse, multi-genre mosaic album
        featuring a trio of female voices from across the globe.
      `,
  },
  {
    id: 15,
    songCard: ' ',
    songNumber: '15',
    songImg: EverythingImg,
    songName: 'Everything I Wanted',
    songArtists: 'Billie Eilish',
    songAlbum: 'Everything I Wanted',
    songDuration: '4:00',
    audioUrl: Everything,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },

  {
    id: 16,
    songCard: ' ',
    songNumber: '16',
    songImg: FallAsleepImg,
    songName: "When the party's over",
    songArtists: 'Billie Eilish',
    songAlbum: 'When We All Fall Asleep',
    songDuration: '3:13  ',
    audioUrl: PartyOver,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
  {
    id: 17,
    songCard: ' ',
    songNumber: '17',
    songImg: SaySomethingImg,
    songName: 'Blood On My Hands',
    songArtists: 'Micheal McQuaid',
    songArtistMain: 'Micheal McQuaid',
    songAlbum: 'Blood On My Hands',
    songDuration: '4:27',
    audioUrl: Blood,
    artistImg: GreatImg,
    songStream: '1,338',
    aboutArtists: `
        A Great Big World is an American musical duo from New York[1] made up of
        singer/songwriters Ian Axel and Chad King and signed to Epic Records.
        The grou....
     `,
    artistsFirst: GreatImg,
    artistsSec: GreatTwoImg,
    artistsThird: GreatTwoImg,
    artistsFourth: GreatTwoImg,
    artistsFifth: GreatTwoImg,
    artistsNo: '#',
    artistFollow: '54,272',
    listLocOne: 'Jarkarta, ID',
    listOne: '8,590',
    listLocTwo: 'Mexico City, MX',
    listTwo: '1,711',
    listLocThree: 'London, GB',
    listThree: '4,229 ',
    listLocFour: 'Syndney, AU',
    listFour: '2,582 ',
    listLocFive: 'Sao Paulo, BR',
    listFive: '634 ',
    artistsBio: `
      
        A Great Big World is an American musical duo from New York[1] made up of
        singer/songwriters Ian Axel and Chad King and signed to Epic Records.
        The group is best known for their single "This Is the New Year", which
        was performed by the cast in an episode of Glee and reached the
        Billboard Mainstream Top 40 chart in May 2013,[2] and their worldwide
        hit "Say Something", particularly after recording it as a duet
        collaboration with Christina Aguilera. The duet peaked at number four on
        the Billboard Hot 100.
     
    `,
  },
  {
    id: 18,
    songCard: ' ',
    songNumber: '18',
    songImg: JocelynImg,
    songName: 'King',
    songArtists: 'XXXTENTACION',
    songArtistMain: 'XXXTENTACION',
    songAlbum: '17',
    songDuration: '1:52',
    audioUrl: King,
    artistImg: XXXImg,
    songStream: '38,767,338',
    aboutArtists: `
        "Controversial rapper Jahseh Dwayne Onfroy (aka XXXTentacion) played
        fast and loose when it came to genres, often incorporating elements of
        punk roc...
      `,
    artistsFirst: XXXImg,
    artistsSec: XXXTwoImg,
    artistsThird: XXXThreeImg,
    artistsFourth: XXXFourImg,
    artistsFifth: XXXImg,
    artistsNo: '#81',
    artistFollow: '42,054,272',
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
    
        Controversial rapper Jahseh Dwayne Onfroy (aka XXXTentacion) played fast
        and loose when it came to genres, often incorporating elements of punk
        rock, hip-hop, R&B, and heavy metal. In the late 2010s, he experienced a
        quick rise with his dark and emotionally intense content, scoring a
        number one album with 2018's ?. Months later, at the peak of his
        popularity, he was shot and killed. Born in South Florida, Onfroy had a
        troubled upbringing, often getting into violent situations; his mother
        couldn't cope with raising him alone, so he was often forced to stay
        with various relatives as a result. At a very young age, Onfroy was sent
        to a juvenile detention center after committing armed robbery; it was
        there that he met friend and longtime collaborator . After his release,
        both Onfroy and decided to get clean and pursue a career in music,
        setting up the Florida rap crew in the process. In 2014, Onfroy uploaded
        his first track to SoundCloud, "Vice City," which quickly racked up
        hundreds of thousands of streams. Later the same year, he released two
        EPs, The Fall and Ice Hotel; the broad array of genres and vocal styles
        -- ranging from whispering and singing to rapping and outright screaming
        -- earned Onfroy a cult following in under a year. In 2015, he released
        two collaborative albums, Members Only, Vol. 1 and Vol. 2 -- alongside
        and various associates -- as well as his third and fourth EPs,
        ItWasn'tEnough and Willy Wonka Was a Child Murderer. His debut album,
        Bad Vibes Forever, was originally intended to be a mixtape released in
        2016; however, the expansion of the record into a full-length studio
        album, coupled with two separate incarcerations, repeatedly delayed the
        album's release. Single "Look at Me!," originally released in early
        2016, became a sleeper hit and was re-released in 2017, at which point
        it hit the Top 40 of the Billboard Hot 100 singles chart.
      
    `,
  },
  {
    id: 19,
    songCard: ' ',
    songNumber: '19',
    songImg: HappierThanEverImg,
    songName: "Halley's Comet",
    songArtists: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '3:54  ',
    audioUrl: Halleys,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
  {
    id: 20,
    songCard: ' ',
    songNumber: '20',
    songImg: BoredImg,
    songName: 'Bored',
    songArtists: 'Billie Eilish',
    songAlbum: 'Bored',
    songDuration: '2:58 ',
    audioUrl: Bored,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
  {
    id: 21,
    songCard: ' ',
    songNumber: '21',
    songImg: JocelynImg,
    songName: 'Never',
    songArtists: 'XXXTENTACION',
    songArtistMain: 'XXXTENTACION',
    songAlbum: '17',
    songDuration: '3:40',
    audioUrl: Never,
    artistImg: XXXImg,
    songStream: '38,767,338',
    aboutArtists: `
        "Controversial rapper Jahseh Dwayne Onfroy (aka XXXTentacion) played
        fast and loose when it came to genres, often incorporating elements of
        punk roc...
      `,
    artistsFirst: XXXImg,
    artistsSec: XXXTwoImg,
    artistsThird: XXXThreeImg,
    artistsFourth: XXXFourImg,
    artistsFifth: XXXImg,
    artistsNo: '#81',
    artistFollow: '42,054,272',
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
    
        Controversial rapper Jahseh Dwayne Onfroy (aka XXXTentacion) played fast
        and loose when it came to genres, often incorporating elements of punk
        rock, hip-hop, R&B, and heavy metal. In the late 2010s, he experienced a
        quick rise with his dark and emotionally intense content, scoring a
        number one album with 2018's ?. Months later, at the peak of his
        popularity, he was shot and killed. Born in South Florida, Onfroy had a
        troubled upbringing, often getting into violent situations; his mother
        couldn't cope with raising him alone, so he was often forced to stay
        with various relatives as a result. At a very young age, Onfroy was sent
        to a juvenile detention center after committing armed robbery; it was
        there that he met friend and longtime collaborator . After his release,
        both Onfroy and decided to get clean and pursue a career in music,
        setting up the Florida rap crew in the process. In 2014, Onfroy uploaded
        his first track to SoundCloud, "Vice City," which quickly racked up
        hundreds of thousands of streams. Later the same year, he released two
        EPs, The Fall and Ice Hotel; the broad array of genres and vocal styles
        -- ranging from whispering and singing to rapping and outright screaming
        -- earned Onfroy a cult following in under a year. In 2015, he released
        two collaborative albums, Members Only, Vol. 1 and Vol. 2 -- alongside
        and various associates -- as well as his third and fourth EPs,
        ItWasn'tEnough and Willy Wonka Was a Child Murderer. His debut album,
        Bad Vibes Forever, was originally intended to be a mixtape released in
        2016; however, the expansion of the record into a full-length studio
        album, coupled with two separate incarcerations, repeatedly delayed the
        album's release. Single "Look at Me!," originally released in early
        2016, became a sleeper hit and was re-released in 2017, at which point
        it hit the Top 40 of the Billboard Hot 100 singles chart.
      
    `,
  },
  {
    id: 22,
    songCard: ' ',
    songNumber: '22',
    songImg: JocelynImg,
    songName: 'Angeles Highway',
    songArtists: 'XXXTENTACION',
    songArtistMain: 'XXXTENTACION',
    songAlbum: '17',
    songDuration: '1:56',
    audioUrl: Angeles,
    artistImg: XXXImg,
    songStream: '38,767,338',
    aboutArtists: `
        "Controversial rapper Jahseh Dwayne Onfroy (aka XXXTentacion) played
        fast and loose when it came to genres, often incorporating elements of
        punk roc...
      `,
    artistsFirst: XXXImg,
    artistsSec: XXXTwoImg,
    artistsThird: XXXThreeImg,
    artistsFourth: XXXFourImg,
    artistsFifth: XXXImg,
    artistsNo: '#81',
    artistFollow: '42,054,272',
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
    
        Controversial rapper Jahseh Dwayne Onfroy (aka XXXTentacion) played fast
        and loose when it came to genres, often incorporating elements of punk
        rock, hip-hop, R&B, and heavy metal. In the late 2010s, he experienced a
        quick rise with his dark and emotionally intense content, scoring a
        number one album with 2018's ?. Months later, at the peak of his
        popularity, he was shot and killed. Born in South Florida, Onfroy had a
        troubled upbringing, often getting into violent situations; his mother
        couldn't cope with raising him alone, so he was often forced to stay
        with various relatives as a result. At a very young age, Onfroy was sent
        to a juvenile detention center after committing armed robbery; it was
        there that he met friend and longtime collaborator . After his release,
        both Onfroy and decided to get clean and pursue a career in music,
        setting up the Florida rap crew in the process. In 2014, Onfroy uploaded
        his first track to SoundCloud, "Vice City," which quickly racked up
        hundreds of thousands of streams. Later the same year, he released two
        EPs, The Fall and Ice Hotel; the broad array of genres and vocal styles
        -- ranging from whispering and singing to rapping and outright screaming
        -- earned Onfroy a cult following in under a year. In 2015, he released
        two collaborative albums, Members Only, Vol. 1 and Vol. 2 -- alongside
        and various associates -- as well as his third and fourth EPs,
        ItWasn'tEnough and Willy Wonka Was a Child Murderer. His debut album,
        Bad Vibes Forever, was originally intended to be a mixtape released in
        2016; however, the expansion of the record into a full-length studio
        album, coupled with two separate incarcerations, repeatedly delayed the
        album's release. Single "Look at Me!," originally released in early
        2016, became a sleeper hit and was re-released in 2017, at which point
        it hit the Top 40 of the Billboard Hot 100 singles chart.
      
    `,
  },
  {
    id: 23,
    songCard: ' ',
    songNumber: '23',
    songImg: HappierThanEverImg,
    songName: 'Getting Older',
    songArtists: 'Billie Eilish',
    songArtistMain: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '4:04',
    audioUrl: GettingOlder,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
  {
    id: 24,
    songCard: ' ',
    songNumber: '24',
    songImg: HappierThanEverImg,
    songName: 'Your Power',
    songArtists: 'Billie Eilish',
    songAlbum: 'Happier Than Ever',
    songDuration: '4:04',
    audioUrl: Power,
    artistImg: BillieEilishImg,
    songStream: '67,767,338',
    aboutArtists: `
        With the release of her highly anticipated sophomore album ‘Happier Than
        Ever,’ the 21-year-old Los Angeles native remains one of the biggest
        stars to emerge i...
      `,
    artistsFirst: BillieEilishImg,
    artistsSec: BillieForestImg,
    artistsThird: BillieAnacondaImg,
    artistsFourth: BillieRedImg,
    artistsFifth: BillieEilishGreenImg,
    artistsNo: '#',
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
    artistsBio: ` With the release of her highly anticipated sophomore album ‘Happier
          Than Ever,’ the 21-year-old Los Angeles native remains one of the
          biggest stars to emerge in the 21st century. Since the release of her
          debut single “ocean eyes” in 2015, Eilish continues to shatter the
          ceiling of music with her genre-defying sound. Fast forward from her
          humble breakout, her album WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
          debuted at No. 1 on the Billboard 200 in the U.S as well as 17
          additional countries around the world upon release in 2019, and was
          the most streamed album of that year. WHEN WE ALL FALL ASLEEP, WHERE
          DO WE GO? was written, produced and recorded entirely by Billie Eilish
          and brother FINNEAS in their childhood home of Los Angeles. Billie
          Eilish went on to make history as the youngest artist to receive
          nominations and win in all the major categories at the 62nd GRAMMY®
          Awards, receiving an award for Best New Artist, Album of the Year,
          Record of the Year, Song of the Year, and Best Pop Vocal Album. Billie
          Eilish is also the youngest artist to write and record an official
          James Bond theme song, ‘No Time To Die.’ Most recently, Billie Eilish
          was nominated for four additional awards at the 63rd Annual GRAMMY
          Awards in 2021, and took home both Record of the Year for 'everything
          i wanted,' and Best Song Written For Visual Media for 'No Time To
          Die.’ Billie Eilish’s latest album ‘Happier Than Ever’ was written by
          Billie and her brother FINNEAS, who also produced the album.`,
  },
];
export const LifeSucksPlaylist = (props) => {
  const { selectedSong, setSelectedSong } = useMusic();

  const [setIsPlaying] = useState(false);

  const handleTogglePlay = (audioUrl) => {
    const lifeSucksSong = lifeSucksMix.find(
      (song) => song.audioUrl === audioUrl,
    );

    const selectedSong = lifeSucksSong;

    setSelectedSong(selectedSong);
  };
  return (
    <>
      {props.lifeSucks && (
        <div>
          {lifeSucksMix.map((song, index) => (
            <div key={song.songName}>
              <Cards
                {...song}
                song={song}
                isPlaying={song.audioUrl === selectedSong?.audioUrl}
                togglePlay={() => handleTogglePlay(song.audioUrl)}
                setIsPlaying={setIsPlaying}
                lifeSucksMix={props.lifeSucksMix}
                aboutArtists={song.aboutArtists}
                artistsBio={song.artistsBio}
                songNumber={index + 1}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default LifeSucksPlaylist;
