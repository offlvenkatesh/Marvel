import "./HeroSection.css";
import SponsorImg from "../../../assets/HeroSection/disneybtn_asset2x_2024.png";
import HeroBg from "../../../assets/HeroSection/Background_hero.jpg";

export default function HeroSection() {
  return (
    <div className="Hero-Section">
      <div className="Hero-text-container">
        <div className="sponsor-box">
          <div className="Hero-Steaming-Title">
            <span className="Desktop-Title">STREAM WONDER MAN EXCLUSIVELY ON</span>
            <span className="Mobile-Title">WONDER MAN ON</span>
          </div>
        </div>
        <div className="Hero-Steaming-Img">
            <img src={SponsorImg}/>
        </div>
      </div>
      <div className="Hero-Main-Container">
        <div className="Hero-Main-Text-Box">
            <div className="Hero-Main-Title"><h1>MOVIES</h1></div>
            <div className="Hero-Main-Description"><p>Journey into the cosmic depths of the mighty Marvel Cinematic Universe!</p></div>
            
        </div>
      </div>
    </div>
  );
}
