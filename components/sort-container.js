import { useMemo } from "react";
import styles from "./sort-container.module.css";

const SortContainer = ({ frame, propTop, propLeft }) => {
  const sortByStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={styles.sortBy} style={sortByStyle}>
      <div className={styles.sortByChild} />
      <div className={styles.frameParent}>
        <div className={styles.orderWrapper}>
          <div className={styles.order}>Order</div>
        </div>
        <div className={styles.createdDateWrapper}>
          <div className={styles.order}>Created date</div>
        </div>
        <div className={styles.createdDateWrapper}>
          <div className={styles.order}>Due date</div>
        </div>
        <div className={styles.createdDateWrapper}>
          <div className={styles.order}>Sitting count</div>
        </div>
        <div className={styles.createdDateWrapper}>
          <div className={styles.order}>Move count</div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameGroup}>
          <div className={styles.iconsortByParent}>
            <img
              className={styles.iconsortBy}
              alt=""
              src="../iconsort-by18.svg"
            />
            <div className={styles.sortBy1}>Sort by</div>
          </div>
          <img className={styles.frameIcon} alt="" src={frame} />
        </div>
      </div>
    </div>
  );
};

export default SortContainer;
