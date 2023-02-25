import { useMemo } from "react";
import styles from "./add-container.module.css";

const AddContainer = ({
  sortByText,
  sortByIconUrl,
  userLeadIconUrl,
  userStarText,
  checkIconUrl,
  descriptionText,
  messageText,
  checklistIconUrl,
  iconLinkText,
  ellipseText,
  agentBookText,
  userLeadIconUrl2,
  userStarText2,
  checkIconUrl2,
  descriptionText2,
  messageIconUrl,
  checklistIconText,
  iconLinkText2,
  closeText,
  propTop,
  propLeft,
  propJustifyContent,
  propGap,
  propDisplay,
  propDisplay1,
  propDisplay2,
}) => {
  const frameDiv60Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const cardHeaderStyle = useMemo(() => {
    return {
      justifyContent: propJustifyContent,
      gap: propGap,
    };
  }, [propJustifyContent, propGap]);

  const iconUserstar6Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const iconFileCheck4Style = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const frameDiv61Style = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  return (
    <div className={styles.cardHeaderParent} style={frameDiv60Style}>
      <div className={styles.cardHeader} style={cardHeaderStyle}>
        <div className={styles.toDo3Parent}>
          <div className={styles.toDo3Container}>
            <span className={styles.backlog}>
              <span>Backlog</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span1}>{sortByText}</span>
          </div>
          <div className={styles.iconfilterParent}>
            <img className={styles.iconfilter} alt="" src="../iconfilter.svg" />
            <img className={styles.iconfilter} alt="" src={sortByIconUrl} />
          </div>
        </div>
        <img className={styles.iconmenuDot} alt="" src="../iconmenu-dot.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.workflowCardParent}>
          <div className={styles.workflowCard}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="../ellipse-82.svg"
                  />
                  <div className={styles.contactrm}>ContactRM</div>
                </div>
                <div className={styles.iconuserLeadParent}>
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userLeadIconUrl}
                  />
                  <img
                    className={styles.iconuserstar}
                    alt=""
                    src={userStarText}
                    style={iconUserstar6Style}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={checkIconUrl}
                    style={iconFileCheck4Style}
                  />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
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
                <div className={styles.frameWrapper}>
                  <div className={styles.icondescriptionParent}>
                    <img
                      className={styles.iconuserstar}
                      alt=""
                      src={descriptionText}
                    />
                    <div className={styles.iconmessageParent}>
                      <img
                        className={styles.iconuserstar}
                        alt=""
                        src={messageText}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div className={styles.iconchecklist3Parent}>
                      <img
                        className={styles.iconuserstar}
                        alt=""
                        src={checklistIconUrl}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div className={styles.iconchecklist3Parent}>
                      <img
                        className={styles.iconuserstar}
                        alt=""
                        src={iconLinkText}
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
                    src="../ellipse-478@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCard}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.ellipseParent}>
                  <img className={styles.frameChild} alt="" src={ellipseText} />
                  <div className={styles.contactrm}>{agentBookText}</div>
                </div>
                <div className={styles.iconuserLeadParent}>
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userLeadIconUrl2}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userStarText2}
                  />
                  <img
                    className={styles.iconuserstar}
                    alt=""
                    src={checkIconUrl2}
                  />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameChild2} style={frameDiv61Style} />
                  <div className={styles.frameInner} />
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
                <div className={styles.frameWrapper}>
                  <div className={styles.icondescriptionParent}>
                    <img
                      className={styles.iconuserstar}
                      alt=""
                      src={descriptionText2}
                    />
                    <div className={styles.iconmessageParent}>
                      <img
                        className={styles.iconuserstar}
                        alt=""
                        src={messageIconUrl}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div className={styles.ellipseParent}>
                      <img
                        className={styles.iconuserstar}
                        alt=""
                        src={checklistIconText}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div className={styles.iconchecklist3Parent}>
                      <img
                        className={styles.iconuserstar}
                        alt=""
                        src={iconLinkText2}
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
                    src="../ellipse-478@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addCardButton}>
          <div className={styles.addCardButtonChild} />
          <div className={styles.cardTitleParent}>
            <div className={styles.cardTitle}>Card title</div>
            <img className={styles.iconclose} alt="" src={closeText} />
          </div>
          <div className={styles.cardParent}>
            <div className={styles.card}>
              <div className={styles.enterCardNameContainer}>
                <span>|</span>
                <span className={styles.enterCardName}>Enter card name</span>
              </div>
            </div>
            <div className={styles.buttonParent}>
              <div className={styles.button}>
                <div className={styles.selectProjectParent}>
                  <div className={styles.selectProject}>Select Project</div>
                  <img
                    className={styles.iconarrowChevron}
                    alt=""
                    src="../iconarrow-chevron1.svg"
                  />
                </div>
              </div>
              <div className={styles.button1}>
                <div className={styles.add}>Add</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContainer;
