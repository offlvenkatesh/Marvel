import MainStyles from "./MainBanner.module.css";
import MainBannerImg from "../../assets/MainBanner/disneyplus_lob_log_eye_01.png";
export default function MainBanner() {
  return (
    <div className={MainStyles.MainBannerOuter}>
      <div className={MainStyles.MainBannerInner}>
        <div className={MainStyles.MainBannercontent}>
          <div className={MainStyles.LeftContent}>
            <div className={MainStyles.LeftImgContiner}>
              <img src={MainBannerImg}></img>
            </div>
            <div className={MainStyles.MainBannertitle}>
              A Universe of Super Heroes
            </div>
            <div className={MainStyles.Mainpara}>
              All Your Favorite Stories and More. Start Streaming Now.
            </div>
            <button className={MainStyles.MainButton}>
              <span>STREAM NOW</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
