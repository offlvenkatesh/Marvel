import classes from "./FooterTop.module.css";
import FooterTopImg from "../../assets/FooterTop/mu-promo_module_standard_dsk.jpg";
export default function Footer() {
  return (
    <div className={classes.FooterTopOuter}>
      <div className={classes.FooterTopInner}>
        <div className={classes.FooterTopleftside}>
          <img src={FooterTopImg} alt="FooterTopImg" />
        </div>
        <div className={classes.FooterTopRightside}>
          <div className={classes.DivContainer}>
            <div className={classes.DivTitle1}>MARVEL UNLIMITED</div>
            <div className={classes.DivTitle2}>Unlock the Universe</div>
            <div className={classes.DivDescription}>
              Get instant access to 30,000+digital comics on the web & mobile
              devices, exclusive deals, and more member=only benefits with
              Marvel Unlimited!
            </div>
            <button className={classes.DivButton}><span>JOIN NOW!</span></button>
          </div>
          <div className={classes.DivLastTitle}>
            Auto-renewal and other terms apply, See marvel.com/unlimited for
            additiona details.
          </div>
        </div>
      </div>
    </div>
  );
}
