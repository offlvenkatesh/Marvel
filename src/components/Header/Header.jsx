import TopNav from "./TopNav/TopNav.jsx";
import MainNav from "./MainNav/MainNav.jsx";
import HeroSection from "./HeroSection/HeroSection.jsx";
export default function Header() {
  return (
    <header>
      <TopNav />
      <MainNav />
      <HeroSection/>
    </header>
  );
}
