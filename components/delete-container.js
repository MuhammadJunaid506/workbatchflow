import styles from "./delete-container.module.css";

const DeleteContainer = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.lineParent}>
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.frameParent}>
            <div className={styles.deleteWrapper}>
              <div className={styles.delete}>Delete</div>
            </div>
            <img className={styles.frameIcon} alt="" src="../frame28.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.areYouSureYouWantToDeletWrapper}>
          <div className={styles.areYouSure}>
            Are you sure you want to delete this Filter?
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.cancelWrapper}>
          <div className={styles.cancel}>Cancel</div>
        </div>
        <div className={styles.deleteContainer}>
          <div className={styles.delete1}>Delete</div>
        </div>
      </div>
    </div>
  );
};

export default DeleteContainer;
