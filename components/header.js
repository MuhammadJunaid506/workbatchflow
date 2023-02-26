import styles from "./header.module.css";

const Header = ({ groupImageUrl, groupImageUrl195 }) => {
  return (
    <div className={styles.topMenu}>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img
            className={styles.iconarrowChevron}
            alt=""
            src="../iconarrow-chevron.svg"
          />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.frameParent}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-45@2x.png"
              />
              <div className={styles.rectangleContainer}>
                <div className={styles.groupInner} />
                <div className={styles.div}>15</div>
              </div>
            </div>
            <div className={styles.frameItem} />
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="../ellipse-451@2x.png"
              />
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.div}>11</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.topMenuChild} alt="" src={groupImageUrl} />
      <div className={styles.groupContainer}>
        <img className={styles.topMenuChild} alt="" src={groupImageUrl195} />
        <div className={styles.frameWrapper}>
          <form className={styles.iconsearchParent}>
            {/* <form action=""> */}
            {/* <div className={styles.search}> */}
            <button type="submit"><img className={styles.iconsearch} src="../iconsearch.svg" /></button>
              <input className={styles.search}type="text" placeholder="Search" name="q"></input>
              {/* </div> */}
            {/* </form> */}
          </form>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <img className={styles.topMenuChild} alt="" />
        <img className={styles.topMenuChild} alt="" />
        <img className={styles.topMenuChild} alt="" />
        <img
          className={styles.ellipseIcon}
          alt=""
          src="../ellipse-452@2x.png"
        />
      </div>
    </div>
  );
};

export default Header;
