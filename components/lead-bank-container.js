import styles from "./lead-bank-container.module.css";

const LeadBankContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.ellipseParent}>
          <img className={styles.frameChild} alt="" src="../ellipse-8242.svg" />
          <div className={styles.contactrm}>ContactRM</div>
        </div>
      </div>
      <div className={styles.ellipseGroup}>
        <img className={styles.frameChild} alt="" src="../ellipse-83.svg" />
        <div className={styles.contactrm}>AgentBook</div>
      </div>
      <div className={styles.ellipseContainer}>
        <img className={styles.frameChild} alt="" src="../ellipse-84.svg" />
        <div className={styles.contactrm}>W4RTeam</div>
      </div>
      <div className={styles.ellipseContainer}>
        <img className={styles.frameChild} alt="" src="../ellipse-81.svg" />
        <div className={styles.contactrm}>LeadBank</div>
      </div>
    </div>
  );
};

export default LeadBankContainer;
