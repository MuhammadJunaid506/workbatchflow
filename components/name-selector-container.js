import { useMemo } from "react";
import styles from "./name-selector-container.module.css";

const NameSelectorContainer = ({
  enterOrSelectName,
  propPosition,
  propTop,
  propLeft,
}) => {
  const frameDiv56Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div className={styles.frameWrapper} style={frameDiv56Style}>
      <div className={styles.frameContainer}>
        <div className={styles.shareWithOthersParent}>
          <div className={styles.shareWithOthers}>Share with others</div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <img
              className={styles.chevronDown1Icon}
              alt=""
              src="../iconarrow-chevron.svg"
            />
            <div className={styles.enterOrSelect}>{enterOrSelectName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameSelectorContainer;
