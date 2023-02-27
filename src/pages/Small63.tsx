
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
          <b className={styles.planYourNext}>Plan your next trip</b>
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
        <LocoCard
          destinationImageUrl="/parisimage@2x.png"
          destinationGithubName="Paris"
          destinationPrice="$699"
          propWidth="90.92px"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="38.39px"
        />
        <LocoCard
          destinationImageUrl="/greeceimage@2x.png"
          destinationGithubName="Greece"
          destinationPrice="$1079"
          propWidth="99.92px"
          propDisplay="unset"
          propWidth1="unset"
          propLeft="47.39px"
        />
        <LocoCard
          destinationImageUrl="/norwayimage@2x.png"
          destinationGithubName="Norway"
          destinationPrice="$895"
          onCol3Click={onCol3Click}
        />
        <LocoCard
          destinationImageUrl="/tuscanyimage@2x.png"
          destinationGithubName="Tuscany"
          destinationPrice="$1245"
          propWidth="100.62px"
          propWidth1="100.62px"
          propLeft="48.09px"
          onCol3Click={onCol4Click}
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default Small63;
