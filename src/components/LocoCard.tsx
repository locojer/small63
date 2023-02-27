
import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./LocoCard.module.css";

type LocoCardType = {
  destinationImageUrl?: string;
  destinationGithub1Name?: string;
  destinationPrice?: string;

  /** Style props */
  propWidth?: Property.Width;
  propDisplay?: Property.Display;
  propWidth1?: Property.Width;
  propLeft?: Property.Left;

  /** Action props */
  onCol3Click?: () => void;
};

const LocoCard: FunctionComponent<LocoCardType> = ({
  destinationImageUrl,
  destinationGithubName,
  destinationPrice,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
  onCol3Click,
}) => {
  const detailsStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const fromStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className={styles.col1} onClick={onCol3Click}>
      <div className={styles.pariscard}>
        <img
          className={styles.parisimageIcon}
          alt=""
          src={destinationImageUrl}
        />
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{destinationGithubName}</b>
          <div className={styles.details} style={detailsStyle}>
            <div className={styles.div} style={divStyle}>
              {destinationPrice}
            </div>
            <div className={styles.from} style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default LocoCard;
