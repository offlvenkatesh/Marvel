import React from 'react'
import Classes from './MarvelMovies.module.css';

import HeroImg1 from "../../assets/HeroCards/avengersdoomsday_lob_crd_01.jpg";
import HeroImg2 from "../../assets/HeroCards/spidermanbrandnewday_lob_crd_02.jpg";
import HeroImg3 from "../../assets/HeroCards/thefantasticfourfirststeps_lob_crd_03.jpg";
import HeroImg4 from "../../assets/HeroCards/thenewavengers_lob_crd_01.jpg";
import HeroImg5 from "../../assets/HeroCards/captainamericabravenewworld_lob_crd_05.jpg";
import HeroImg6 from "../../assets/HeroCards/deadpoolandwolverine_lob_crd_03.jpg";

const MoviesCardData = [
  {
    img: HeroImg1,
    title: "Avengers: Doomsday",
    date: "DEC 18, 2026",
  },
  {
    img: HeroImg2,
    title: "Spider-Man: Brand New Day",
    date: "JUL 31,2026",
  },
  {
    img: HeroImg3,
    title: "The Fantastic Four:First Steps",
    date: "2025",
  },
  {
    img: HeroImg4,
    title: "Thunderbolts",
    date: "2025",
  },
  {
    img: HeroImg5,
    title: "Captain America: Brave New World",
    date: "2025",
  },
  {
    img: HeroImg6,
    title: "Deadpool & Wolverine",
    date: "2024",
  },
];


export default function MarvelMovies() {
  return (
    <div className={Classes.BackPage}>
      <div className={Classes.BackInner}>
        <div className={Classes.MarvelMovieTitle}>MARVEL MOVIES</div>
      <div  className={Classes.MarvelGridContainer}>
        {MoviesCardData.map((cards, index) => (
          <div key={index} className={Classes.MarvelImgContainer}>
            <div className={Classes.MarvelImgThumbnail}>
              <img src={cards.img}/>
              <div>{cards.title}</div>
              <div>{cards.date}</div>
            </div>
          </div>
        ))}
        </div>

      </div>
    </div>
  );
}
