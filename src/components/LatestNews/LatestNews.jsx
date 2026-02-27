import { useActionState, useState } from "react";
import latestStyles from "./LatestNews.module.css";

import Img1 from "../../assets/LatestNews/20260202-articlecard-musthaves_1.jpg";
import Img2 from "../../assets/LatestNews/damagecontrol_card.png";
import Img3 from "../../assets/LatestNews/marvel-must-haves-20260123-new-year-article-card.jpg";
import Img4 from "../../assets/LatestNews/wonderman_card_benkingsley.jpg";
import Img5 from "../../assets/LatestNews/16x9_5.jpg";
import Img6 from "../../assets/LatestNews/20260202-articlecard-musthaves_1.jpg";
import Img7 from "../../assets/LatestNews/_chadwick_card_2.jpg";
import Img8 from "../../assets/LatestNews/aven_poster-card.jpg";
import Img9 from "../../assets/LatestNews/damagecontrol_card.png";
import Img10 from "../../assets/LatestNews/brd-106-04150_r_0.jpg";
import Img11 from "../../assets/LatestNews/fantastic_four_first_foes_1_card.jpg";
import Img12 from "../../assets/LatestNews/fantasticfour_johnnyreed_0.jpg";
import Img13 from "../../assets/LatestNews/marvel-must-haves-20251107-unwrap-the-universe-article-card.jpg";
import Img14 from "../../assets/LatestNews/marvel-must-haves-20260123-new-year-article-card.jpg";
import Img15 from "../../assets/LatestNews/mcu_timelines-dplus-1560x876.jpg";
import Img16 from "../../assets/LatestNews/mvl2025-crd.jpg"

export default function LatestNews() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const data = [
    {
      url: Img1,
      title: "GEAR",
      description: "Shop Marvel Must Haves: I Love You 3000",
    },
    {
      url: Img2,
      title: "COMICS",
      description: "Everything You Need to Know About Damage Control",
    },
    {
      url: Img3,
      title: "TV SHOWS",
      description:
        "How Ben Kingsley Took the ‘Iron Man 3’ Villain to ‘Wonder Man’ Star",
    },
    {
      url: Img4,
      title: "GEAR",
      description: "Shop Marvel Must Haves: New Year, New Finds",
    },
    {
      url: Img5,
      title: "MOVIES",
      description: "See the Complete MCU Timeline on Disney+",
    },
    { url: Img6, title: "MOVIES", description: "New Marvel Movie Announced" },
    {
      url: Img7,
      title: "TV SHOWS",
      description: "The Official Trevor Slattery MCU Watch Guide",
    },
    {
      url: Img8,
      title: "MOVIES",
      description: "Watch the ‘Avengers: Doomsday’ Teaser Trailers",
    },
    {
      url: Img9,
      title: "COMICS",
      description:
        "'Fantastic Four: First Foes' Unveils More of the Fantastic Four's First Adventures",
    },

    {
      url: Img10,
      title: "TV SHOWS",
      description: "Marvel Year in Review: The Best of 2025",
    },
    {
      url: Img11,
      title: "MOVIES",
      description:
        "Marvel Studios’ ‘Avengers: Endgame’ Returns to Theaters in 2026",
    },
    {
      url: Img12,
      title: "MOVIES",
      description:
        "Chadwick Boseman Honored with Star on Hollywood Walk of Fame",
    },
    {
      url: Img13,
      title: "TV SHOWS",
      description:
        "Marvel Studios’ ‘Avengers: Endgame’ Returns to Theaters in 2026",
    },
    {
      url: Img14,
      title: "GEAR",
      description:
        "Shop Marvel Must Haves for Halloween Season",
    },
    {
      url: Img15,
      title: "MOVIES",
      description:
        "‘The Fantastic Four: First Steps’ Coming to Digital and Blu-ray",
    },
    {
      url: Img16,
      title: "MOVIES",
      description:
      "Marvel Studios Remembers Robert Redford"

    },
  ];

  const visibleData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className={latestStyles.latestNewsOuter}>
      <div className={latestStyles.latestNewsInner}>
        <div className={latestStyles.latestNewsTitle}>Latest Movies News</div>

        <div className={latestStyles.latestImgGrid}>
          {visibleData.map((item, index) => (
            <div className={latestStyles.latestImgContainer} key={index}>
              <div className={latestStyles.latestImgbox}>
                <img src={item.url} alt={item.title} />
              </div>
              <div className={latestStyles.latestTitleNews}>{item.title}</div>
              <div className={latestStyles.DescriptionCard}>
                {item.description}
              </div>
            </div>
          ))}
        </div>

        <div className={latestStyles.pagination}>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
             &lt; PREV
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <span
              key={i}
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? latestStyles.activePage : ""}
            >
              {i + 1}
            </span>
          ))}

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            NEXT &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
