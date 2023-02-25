import SavedViewContainer from "../components/saved-view-container";
import NameSelectorContainer from "../components/name-selector-container";
import styles from "./view-container.module.css";

const ViewContainer = () => {
  return (
    <div className={styles.groupParent}>
      <SavedViewContainer iconsave="../iconsave3.svg" />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.viewNameParent}>
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
            </div>
          </div>
        </div>
        <NameSelectorContainer enterOrSelectName="Enter or select name" />
      </div>
      <div className={styles.saveWrapper}>
        <div className={styles.save}>Save</div>
      </div>
    </div>
  );
};

export default ViewContainer;
