import styles from "./views-container.module.css";

const ViewsContainer = () => {
  return (
    <div className={styles.views}>
      <div className={styles.viewsChild} />
      <div className={styles.viewsItem} />
      <div className={styles.viewsInner}>
        <div className={styles.frameParent}>
          <div className={styles.iconsaveParent}>
            <img className={styles.iconsave} alt="" src="../iconsave7.svg" />
            <div className={styles.views1}>Views</div>
          </div>
          <img className={styles.iconclose} alt="" src="../iconclose4.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="../ellipse-84.svg" />
          <div className={styles.myFirstFilter}>My first filter</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-8242.svg"
              />
              <div className={styles.myFirstFilter}>Available for me</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-1162.svg"
              />
              <div className={styles.myFirstFilter}>Current Tasks</div>
            </div>
            <div className={styles.frameParent2}>
              <img className={styles.frameIcon} alt="" src="../frame25.svg" />
              <img className={styles.frameIcon1} alt="" src="../frame26.svg" />
            </div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="../ellipse-83.svg" />
          <div className={styles.myFirstFilter}>Top Project</div>
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="../ellipse-1164.svg" />
          <div className={styles.myFirstFilter}>Favorites</div>
        </div>
      </div>
    </div>
  );
};

export default ViewsContainer;
