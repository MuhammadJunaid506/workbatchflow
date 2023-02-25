import SavedViewContainer from "../components/saved-view-container";
import NameSelectorContainer from "../components/name-selector-container";
import styles from "./saved-container.module.css";

const SavedContainer = () => {
  return (
    <div className={styles.groupParent}>
      <SavedViewContainer iconsave="../iconsave4.svg" />
      <div className={styles.viewName}>View Name</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild} />
            <img
              className={styles.chevronDown1Icon}
              alt=""
              src="../chevrondown-13.svg"
            />
          </div>
        </div>
        <img
          className={styles.chevronDown1Icon1}
          alt=""
          src="../iconarrow-chevron.svg"
        />
        <div className={styles.enterName}>Enter Name</div>
      </div>
      <NameSelectorContainer
        enterOrSelectName="Search by name"
        propPosition="absolute"
        propTop="186px"
        propLeft="24px"
      />
      <div className={styles.saveWrapper}>
        <div className={styles.save}>Save</div>
      </div>
    </div>
  );
};

export default SavedContainer;
