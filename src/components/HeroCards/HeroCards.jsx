import CardStyles from "./HeroCards.module.css";
import HeroImg1 from "../../assets/HeroCards/avengersdoomsday_lob_crd_01.jpg";
import HeroImg2 from "../../assets/HeroCards/spidermanbrandnewday_lob_crd_02.jpg";
import HeroImg3 from "../../assets/HeroCards/thefantasticfourfirststeps_lob_crd_03.jpg";
import HeroImg4 from "../../assets/HeroCards/thenewavengers_lob_crd_01.jpg";
import HeroImg5 from "../../assets/HeroCards/captainamericabravenewworld_lob_crd_05.jpg";
import HeroImg6 from "../../assets/HeroCards/deadpoolandwolverine_lob_crd_03.jpg";

const heroCardsData = [
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

export default function HeroCards() {
  return (
    <div className={CardStyles.HeroCardsOuter}>
      <div className={CardStyles.HeroCardsInner}>
        {heroCardsData.map((card, index) => (
          <div className={CardStyles.HeroCardsContainer} key={index}>
            <div className={CardStyles.HeroCards}>
              <img src={card.img} alt={card.title} />
            </div>
            <p className={CardStyles.title}>{card.title}</p>
            <p className={CardStyles.description}>{card.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
