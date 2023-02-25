import styles from "./saved-view-container.module.css";

const SavedViewContainer = ({ iconsave }) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.groupInner} />
      <div className={styles.frameParent}>
        <div className={styles.iconsaveParent}>
          <img className={styles.iconsave} alt="" src={iconsave} />
          <div className={styles.savedAsView}>Saved as View</div>
        </div>
        <img className={styles.frameIcon} alt="" src="../frame28.svg" />
      </div>
    </div>
  );
};

export default SavedViewContainer;
