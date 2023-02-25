import styles from "./list-actions-container.module.css";

const ListActionsContainer = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.frameParent}>
        <div className={styles.moveAllCardsInThisListWrapper}>
          <div className={styles.moveAllCards}>Move all cards in this list</div>
        </div>
        <div className={styles.moveAllCardsInThisListWrapper}>
          <div className={styles.moveAllCards}>
            Archive all cards in this list
          </div>
        </div>
      </div>
      <img className={styles.groupItem} alt="" src="../group-2583.svg" />
      <div className={styles.listActionsParent}>
        <div className={styles.listActions}>List Actions</div>
        <img className={styles.frameIcon} alt="" src="../frame35.svg" />
      </div>
    </div>
  );
};

export default ListActionsContainer;
