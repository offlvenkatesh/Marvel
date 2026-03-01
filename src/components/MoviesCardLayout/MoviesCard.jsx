import React from "react";
import classes from "./MoviesCard.module.css";
import { useState } from "react";

import MovieImg1 from "../../assets/MovieCard/ant-man_lob_crd_01_8.jpg";
import MovieImg2 from "../../assets/MovieCard/ant-manthewasp_lob_crd_01.jpg";
import MovieImg3 from "../../assets/MovieCard/antmanandthewaspquantumania_lob_crd_03.jpg";
import MovieImg4 from "../../assets/MovieCard/avengersageofultron_lob_crd_03.jpg";
import MovieImg5 from "../../assets/MovieCard/avengersdoomsday_lob_crd_02.jpg";
import MovieImg6 from "../../assets/MovieCard/avengersendgame_lob_crd_05_2.jpg";
import MovieImg7 from "../../assets/MovieCard/avengersinfinitywar_lob_crd_02_1.jpg";
import MovieImg8 from "../../assets/MovieCard/avengerssecretwars_lob_crd_02.jpg";
import MovieImg9 from "../../assets/MovieCard/blackpanther_lob_crd_01_4.jpg";
import MovieImg10 from "../../assets/MovieCard/blackpantherwakandaforever_lob_crd_06.jpg";
import MovieImg11 from "../../assets/MovieCard/blackwidow_lob_crd_06.jpg";
import MovieImg12 from "../../assets/MovieCard/blade_lob_crd_01.jpg";
import MovieImg13 from "../../assets/MovieCard/captainamerica_lob_crd_01.jpg";
import MovieImg14 from "../../assets/MovieCard/captainamericabravenewworld_lob_crd_05.jpg";
import MovieImg15 from "../../assets/MovieCard/captainamericacivilwar_lob_crd_01_9.jpg";
import MovieImg16 from "../../assets/MovieCard/captainamericathewintersoldier_lob_crd_01_1.jpg";
import MovieImg17 from "../../assets/MovieCard/captainmarvel_lob_crd_06.jpg";
import MovieImg18 from "../../assets/MovieCard/deadpoolandwolverine_lob_crd_03.jpg";
import MovieImg19 from "../../assets/MovieCard/doctorstrange_lob_crd_01_6.jpg";
import MovieImg20 from "../../assets/MovieCard/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg";
import MovieImg21 from "../../assets/MovieCard/eternals_lob_crd_06.jpg";
import MovieImg22 from "../../assets/MovieCard/guardiansofthegalaxy_lob_crd_03.jpg";
import MovieImg23 from "../../assets/MovieCard/guardiansofthegalaxyvolume3_lob_crd_03.jpg";
import MovieImg24 from "../../assets/MovieCard/ironman2_lob_crd_01_3.jpg";
import MovieImg25 from "../../assets/MovieCard/ironman3_lob_crd_01_10.jpg";
import MovieImg26 from "../../assets/MovieCard/ironman_lob_crd_01_3.jpg";
import MovieImg27 from "../../assets/MovieCard/shangchi_lob_crd_07.jpg";
import MovieImg28 from "../../assets/MovieCard/spider-manfarfromhome_lob_crd_04_3.jpg";
import MovieImg29 from "../../assets/MovieCard/spider-manhomecoming_lob_crd_02.jpg";
import MovieImg30 from "../../assets/MovieCard/spider-mannowayhome_lob_crd_03.jpg";
import MovieImg31 from "../../assets/MovieCard/spidermanbrandnewday_lob_crd_01.jpg";
import MovieImg32 from "../../assets/MovieCard/theavengers_lob_crd_03.jpg";
import MovieImg33 from "../../assets/MovieCard/thefantasticfourfirststeps_lob_crd_03.jpg";
import MovieImg34 from "../../assets/MovieCard/theincrediblehulk_lob_crd_03.jpg";
import MovieImg35 from "../../assets/MovieCard/themarvels_lob_crd_05.jpg";
import MovieImg36 from "../../assets/MovieCard/thenewavengers_lob_crd_01.jpg";
import MovieImg37 from "../../assets/MovieCard/thor_lob_crd_01.jpg";
import MovieImg38 from "../../assets/MovieCard/thorloveandthunder_lob_crd_04.jpg";
import MovieImg39 from "../../assets/MovieCard/thorragnarok_lob_crd_03.jpg";
import MovieImg40 from "../../assets/MovieCard/thorthedarkworld_lob_crd_02_1.jpg";


export default function MoviesCard() {

const MoviesCardData = [
  { img: MovieImg1, title: "Ant-Man", date: "2015" },
  { img: MovieImg2, title: "Ant-Man and The Wasp", date: "2018" },
  { img: MovieImg3, title: "Ant-Man and The Wasp: Quantumania", date: "2023" },
  { img: MovieImg4, title: "The Avengers", date: "2012" },
  { img: MovieImg5, title: "Avengers: Doomsday", date: "2026" },
  { img: MovieImg6, title: "Avengers: Endgame", date: "2019" },
  { img: MovieImg7, title: "Avengers: Infinity War", date: "2018" },
  { img: MovieImg8, title: "Avengers: Secret Wars", date: "2027" },
  { img: MovieImg9, title: "Black Panther", date: "2018" },
  { img: MovieImg10, title: "Black Panther: Wakanda Forever", date: "2022" },
  { img: MovieImg11, title: "Black Widow", date: "2021" },
  { img: MovieImg12, title: "Blade", date: "2025" },
  { img: MovieImg13, title: "Captain America: The First Avenger", date: "2011" },
  { img: MovieImg14, title: "Captain America: The Winter Soldier", date: "2014" },
  { img: MovieImg15, title: "Captain America: Civil War", date: "2016" },
  { img: MovieImg16, title: "Captain America", date: "2012" },
  { img: MovieImg17, title: " Captain Marvel ", date: "2019" },
  { img: MovieImg18, title: "Deadpool & Wolverine", date: "2024" },
  { img: MovieImg19, title: "Doctor Strange", date: "2016" },
  { img: MovieImg20, title: "Doctor Strange in the Multiverse of Madness", date: "2022" },
  { img: MovieImg21, title: "Eternals", date: "2021" },
  { img: MovieImg22, title: "Guardians of the Galaxy", date: "2014" },
  { img: MovieImg23, title: "Guardians of the Galaxy Vol. 3", date: "2023" },
  { img: MovieImg24, title: "Iron Man 2", date: "2010" },
  { img: MovieImg25, title: "Iron Man 3", date: "2013" },
  { img: MovieImg26, title: "Iron Man", date: "2004" },
  { img: MovieImg27, title: " Shang-Chi and the Legend of the Ten Rings", date: "2021" },
  { img: MovieImg28, title: "Spider-Man: Far From Home", date: "2019" },
  { img: MovieImg29, title: " Spider-Man: Homecoming", date: "2016" },
  { img: MovieImg30, title: "Spider-Man: No Way Home ", date: "2024" },
  { img: MovieImg31, title: "Spider-Man: Brand New Day", date: "2026" },
  { img: MovieImg32, title: "Avengers", date: "2011" },
  { img: MovieImg33, title: "Fantastic Four", date: "2025" },
  { img: MovieImg34, title: " The Incredible Hulk", date: "2008" },
  { img: MovieImg35, title: "The Marvels", date: "2022" },
  { img: MovieImg36, title: "ThunderBolts", date: "2025" },
  { img: MovieImg37, title:"Thor", date: "2011" },
  { img: MovieImg38, title: "Thor: Love and Thunder", date: "2023" },
  { img: MovieImg39, title: "Thor: Ragnarok", date: "2017" },
  { img: MovieImg40, title: "Thor: The Dark World", date: "2013" },
];

const  [visibleCount , setVisibleCount] =useState(30);

  return (
    <div className={classes.MoviesOuterPage}>
      <div className={classes.MoviesInnerPage}>
        <div className={classes.MarvelMovieTitle}>MARVEL MOVIES</div>

        <div className={classes.Movielayout}>
          {MoviesCardData.slice(0 , visibleCount).map((cards, index) => (
            <div key={index} className={classes.MovieGrid}>
              <div className={classes.MarvelImgContainer}>
                <img src={cards.img} />
                <div className={classes.MoviesCardstitle}>{cards.title}</div>
                <div className={classes.MovieCardsdate}>{cards.date}</div>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < MoviesCardData.length &&
        <div className={classes.LoadBtnDiv}>
        <button className={classes.LoadMoreButton} onClick={ () => {setVisibleCount(MoviesCardData.length)}}><span>load more</span></button>
        </div>}
      </div>
    </div>
  );
}
