import classes from ".//OtherMovies.module.css";

import MovieImg1 from "../../assets/OtherMovies/darkphoenix_lob_crd_01.jpg";
import MovieImg2 from "../../assets/OtherMovies/venom_lob_crd_01.jpg";
import MovieImg3 from "../../assets//OtherMovies/deadpool2_lob_crd_02.jpg";
import MovieImg4 from "../../assets/OtherMovies/logan_lob_crd_02.jpg";
import MovieImg5 from "../../assets/OtherMovies/fox_x-menapocalypse_lob_crd_01.jpg";
import MovieImg6 from "../../assets/OtherMovies/deadpool_lob_crd_02.jpg";
import MovieImg7 from "../../assets/OtherMovies/fox_x-mendaysoffuturepast_lob_crd_01.jpg";
import MovieImg8 from "../../assets/OtherMovies/theamazingspider-man_lob_crd_01.jpg";
import MovieImg9 from "../../assets/OtherMovies/spider-man3_lob_crd_01.jpg";
import MovieImg10 from "../../assets/OtherMovies/spider-man2_lob_crd_01.jpg";
import MovieImg11 from "../../assets/OtherMovies/spider-man_lob_crd_01.jpg";
export default function OtherMovies() {
  const MoviesCardData = [
    { img: MovieImg1, title: "X-Men: Dark Phoenix", date: "2019" },
    { img: MovieImg2, title: "Venom", date: "2018" },
    { img: MovieImg3, title: "Deadpool", date: "2018" },
    { img: MovieImg4, title: "Logan", date: "2017" },
    { img: MovieImg5, title: "X-Men: Apocalypse", date: "2016" },
    { img: MovieImg6, title: "Deadpool", date: "2016" },
    { img: MovieImg7, title: "X-Men: Days of Future Past", date: "2014" },
    { img: MovieImg8, title: "The Amazing Spider-Man", date: "2012" },
    { img: MovieImg9, title: "Spider-Man 3", date: "2007" },
    { img: MovieImg10, title: "Spider-Man 2", date: "2004" },
    { img: MovieImg11, title: "Spider-Man", date: "2002" },
  ];
  return (
    <div className={classes.MoviesOuterPage}>
      <div className={classes.MoviesInnerPage}>
        <div className={classes.MarvelMovieTitle}>OTHER MOVIES</div>
        <div className={classes.Movielayout}>
          {MoviesCardData.map((cards, index) => (
            <div key={index} className={classes.MovieGrid}>
              <div className={classes.MarvelImgContainer}>
                <img src={cards.img} />
                <div className={classes.MoviesCardstitle}>{cards.title}</div>
                <div className={classes.MovieCardsdate}>{cards.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
