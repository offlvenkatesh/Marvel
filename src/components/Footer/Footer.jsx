import classes from "./Footer.module.css";

import MarvelLogoFooter from "../../../public/marvel_m_icon_by_ljest2004_ddh31xj-fullview.png";

export default function Footer() {
  return (
    <div className={classes.FooterOuter}>
      <div className={classes.FooterInner}>
        <div className={classes.Footerleft}>
          <div className={classes.sideleft}>
            <img src={MarvelLogoFooter} alt="MavelLogo" />
          </div>
          <div className={classes.sideMiddle}>
            <div className={classes.sideMidDiv}>ABOUT MARVEL</div>
            <div className={classes.sideMidDiv}>HELP/FAQS</div>
            <div className={classes.sideMidDiv}>CAREERS</div>
            <div className={classes.sideMidDiv}>INTERNSHIPS</div>
          </div>
          <div className={classes.sideRight}>
            <div className={classes.sideMidDiv}>ABVERTISING</div>
            <div className={classes.sideMidDiv}>DISNEY+</div>
            <div className={classes.sideMidDiv}>MARVELHO.COM</div>
            <div className={classes.sideMidDiv}>REDEEM DIGITAL COMICS</div>
          </div>
        </div>
        <div className={classes.FooterMiddle}>
          <div className={classes.footerMidDivTitle}>MARVEL UNLIMITED</div>
          <div className={classes.footerMidDiv}>
            <span>Access Over 30,000+ Digital Comics</span>
          </div>
          <div className={classes.giftsFont}>SEND A GIFT</div>
          <div className={classes.DoneFont}>DONE BY: VENKATESH</div>
        </div>
        <div className={classes.FooterRight}>
          <div className={classes.rightTitle}>Follow Marvel</div>

          <div className={classes.rightIcon}>
            <i class="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-tumblr"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-snapchat"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-twitch"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
      </div>
      <div className={classes.FooterInnerBottom}>
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Addendum to the Global Privacy Policy</li>
          <li>Interest-Based Ads</li>
          <li>License Agreement</li>
          <li>©2026 MARVEL</li>
        </ul>
      </div>
    </div>
  );
}
