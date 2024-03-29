
import { FunctionComponent, useCallback } from "react";
import LocoCard from "../components/LocoCard";
import styles from "./Small63.module.css";

const Small63: FunctionComponent = () => {
  const onCol3Click = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onCol4Click = useCallback(() => {
    window.open("https://www.bing.com/");
  }, []);

  return (
    <div className={styles.small63}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next github trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <button className={styles.col1}>
          <div className={styles.pariscard}>
            <img
              className={styles.parisimageIcon}
              alt=""
              src="/parisimage@2x.png"
            />
            <div className={styles.destinationDetails}>
              <b className={styles.paris}>Paris</b>
              <div className={styles.details}>
                <div className={styles.div}>$699</div>
                <div className={styles.from}>from</div>
              </div>
            </div>
          </div>
        </button>
        <button className={styles.col1}>
          <div className={styles.pariscard}>
            <img
              className={styles.parisimageIcon}
              alt=""
              src="/greeceimage@2x.png"
            />
            <div className={styles.destinationDetails}>
              <b className={styles.paris}>Greece</b>
              <div className={styles.details1}>
                <div className={styles.div1}>$1079</div>
                <div className={styles.from1}>from</div>
              </div>
            </div>
          </div>
        </button>
        <button className={styles.col1} onClick={onCol3Click}>
          <div className={styles.pariscard}>
            <img
              className={styles.parisimageIcon}
              alt=""
              src="/norwayimage@2x.png"
            />
            <div className={styles.destinationDetails}>
              <b className={styles.paris}>Norway</b>
              <div className={styles.details}>
                <div className={styles.div}>$895</div>
                <div className={styles.from}>from</div>
              </div>
            </div>
          </div>
        </button>
        <button className={styles.col1} onClick={onCol4Click}>
          <div className={styles.pariscard}>
            <img
              className={styles.parisimageIcon}
              alt=""
              src="/tuscanyimage@2x.png"
            />
            <div className={styles.destinationDetails}>
              <b className={styles.paris}>Tuscany</b>
              <div className={styles.details3}>
                <div className={styles.div3}>$1245</div>
                <div className={styles.from3}>from</div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default Small63;
