import styles from "./design-website-container.module.css";

const DesignWebsiteContainer = ({
  userImageUrl,
  iconImageUrl,
  userLeadImageUrl,
  userStarImageUrl,
  iconFileImageUrl,
  iconDescriptionImageUrl,
  iconMessageImageUrl,
  checklistImageUrl,
  iconLinkImageUrl,
  ellipseImageUrl,
}) => {
  return (
    <div className={styles.maskGroup}>
      <div className={styles.maskGroupInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.ellipseParent}>
              <img className={styles.frameChild} alt="" src={userImageUrl} />
              <div className={styles.archivedInCompletedContainer}>
                <span>
                  <span>Archived in</span>
                  <span className={styles.span}>{` `}</span>
                </span>
                <span className={styles.span}>
                  <span>{`Completed `}</span>
                </span>
                <span>3 days ago</span>
              </div>
            </div>
          </div>
          <div className={styles.workflowCard}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseGroup}>
                  <img className={styles.frameItem} alt="" src={iconImageUrl} />
                  <div className={styles.contactrm}>ContactRM</div>
                </div>
                <div className={styles.iconuserLeadParent}>
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userLeadImageUrl}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userStarImageUrl}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={iconFileImageUrl}
                  />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameInner} />
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.apicontactrmcomWrapper}>
                    <div className={styles.apicontactrmcom}>
                      api.contactrm.com
                    </div>
                  </div>
                  <div className={styles.apicontactrmWrapper}>
                    <div className={styles.apicontactrmcom}>api.contactrm</div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.icondescriptionParent}>
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={iconDescriptionImageUrl}
                    />
                    <div className={styles.iconmessageParent}>
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconMessageImageUrl}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div className={styles.ellipseGroup}>
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={checklistImageUrl}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div className={styles.ellipseGroup}>
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconLinkImageUrl}
                      />
                      <div className={styles.div}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.created3DaysAgoWrapper}>
                    <div className={styles.created3Days}>
                      Created 3 days ago
                    </div>
                  </div>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src={ellipseImageUrl}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignWebsiteContainer;
