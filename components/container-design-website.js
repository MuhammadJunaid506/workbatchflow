import styles from "./container-design-website.module.css";

const ContainerDesignWebsite = ({
  svgImageUrl,
  ellipseSvgImageUrl,
  userLeadSvgImageUrl,
  userStarSvgImageUrl,
  checkSvgImageUrl,
  descriptionSvgImageUrl,
  messageSvgImageUrl,
  checklistSvgImageUrl,
  iconLinkSvgImageUrl,
  svgImageUrl2,
}) => {
  return (
    <div className={styles.maskGroup}>
      <div className={styles.maskGroupInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.ellipseParent}>
              <img className={styles.frameChild} alt="" src={svgImageUrl} />
              <div className={styles.snoozedUntilOctContainer}>
                <span>Snoozed until</span>
                <span className={styles.oct24At}> Oct 24 at 10:00 PM</span>
              </div>
            </div>
          </div>
          <div className={styles.workflowCard}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseGroup}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src={ellipseSvgImageUrl}
                  />
                  <div className={styles.contactrm}>ContactRM</div>
                </div>
                <div className={styles.iconuserLeadParent}>
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userLeadSvgImageUrl}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userStarSvgImageUrl}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={checkSvgImageUrl}
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
                      src={descriptionSvgImageUrl}
                    />
                    <div className={styles.iconmessageParent}>
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={messageSvgImageUrl}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div className={styles.ellipseGroup}>
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={checklistSvgImageUrl}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div className={styles.ellipseGroup}>
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconLinkSvgImageUrl}
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
                    src={svgImageUrl2}
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

export default ContainerDesignWebsite;
