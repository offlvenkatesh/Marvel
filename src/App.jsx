import './App.css';
import Header from './components/Header/Header';
import HeroCards from './components/HeroCards/HeroCards';
import MainBanner from './components/MainBanner/MainBanner';
import LatestNews from './components/LatestNews/LatestNews'
import MarvelMovies from './components/MarvelMovies/MarvelMovies';

function App() {
  return (
    <>
    <Header/>
    <HeroCards/>
    <MainBanner/>
  
    <LatestNews/>
    <MarvelMovies/>
    </>
  )
}

export default App;
