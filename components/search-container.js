import { useMemo } from "react";
import styles from "./search-container.module.css";

const SearchContainer = ({
  iconImageUrls,
  snoozeImageUrls,
  propBackgroundColor,
  propOpacity,
  propOpacity1,
  propColor,
  propBackgroundColor1,
  propOpacity2,
  propColor1,
  propOpacity3,
}) => {
  const frameDiv94Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv95Style = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  const iconArchiveStyle = useMemo(() => {
    return {
      opacity: propOpacity1,
    };
  }, [propOpacity1]);

  const archiveStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const frameDiv96Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const iconSnoozeStyle = useMemo(() => {
    return {
      opacity: propOpacity2,
    };
  }, [propOpacity2]);

  const snoozeStyle = useMemo(() => {
    return {
      color: propColor1,
      opacity: propOpacity3,
    };
  }, [propColor1, propOpacity3]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.groupItem} alt="" src="../group-2582.svg" />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <div className={styles.search1Parent}>
          <img className={styles.search1Icon} alt="" src="../search-11.svg" />
          <div className={styles.search}>Search</div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupWrapper}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer} style={frameDiv94Style}>
              <div className={styles.iconarchiveParent} style={frameDiv95Style}>
                <img
                  className={styles.iconarchive}
                  alt=""
                  src={iconImageUrls}
                  style={iconArchiveStyle}
                />
                <div className={styles.archive} style={archiveStyle}>
                  Archive
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv} style={frameDiv96Style}>
              <div className={styles.iconsnoozeParent}>
                <img
                  className={styles.iconsnooze}
                  alt=""
                  src={snoozeImageUrls}
                  style={iconSnoozeStyle}
                />
                <div className={styles.archive} style={snoozeStyle}>
                  Snooze
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.iconclose} alt="" src="../iconclose4.svg" />
    </div>
  );
};

export default SearchContainer;
