import './App.css';
import Header from './components/Header/Header';
import HeroCards from './components/HeroCards/HeroCards';
import MainBanner from './components/MainBanner/MainBanner';
import LatestNews from './components/LatestNews/LatestNews'
import MoviesCard from './components/MoviesCardLayout/MoviesCard';
import FooterTop from './components/FooterTop/FooterTop';
import Footer  from "./components/Footer/Footer"
import OtherMovies from './components/OtherMovies/OtherMovies';

function App() {
  return (
    <>
    <Header/>
    <HeroCards/>
    <MainBanner/>
    <LatestNews/>
    <MoviesCard/>
    <OtherMovies/>
    <FooterTop/>
    <Footer/>
    </>
  )
}

export default App;
