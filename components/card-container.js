import { useMemo } from "react";
import styles from "./card-container.module.css";

const CardContainer = ({
  completionStatus,
  sortIconUrl,
  userLeadIconUrl,
  userStarIconUrl,
  descriptionIconUrl,
  messageIconUrl,
  checklistIconUrl,
  iconLinkUrl,
  propTop,
  propLeft,
  propBackgroundColor,
  propDisplay,
}) => {
  const frameDiv62Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      backgroundColor: propBackgroundColor,
    };
  }, [propTop, propLeft, propBackgroundColor]);

  const addCardButtonStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className={styles.cardHeaderParent} style={frameDiv62Style}>
      <div className={styles.cardHeader}>
        <div className={styles.toDo3Parent}>
          <div className={styles.toDo3Container}>
            <span className={styles.completed}>
              <span>{completionStatus}</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span1}>(1)</span>
          </div>
          <div className={styles.iconfilterParent}>
            <img className={styles.iconfilter} alt="" src="../iconfilter.svg" />
            <img className={styles.iconfilter} alt="" src={sortIconUrl} />
          </div>
        </div>
        <img className={styles.iconmenuDot} alt="" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.workflowCardWrapper}>
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
                    className={styles.iconuserLead}
                    alt=""
                    src={userStarIconUrl}
                  />
                  <img className={styles.iconfileCheck} alt="" />
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
                      className={styles.iconfileCheck}
                      alt=""
                      src={descriptionIconUrl}
                    />
                    <div className={styles.iconmessageParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src={messageIconUrl}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div className={styles.iconchecklist3Parent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src={checklistIconUrl}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div className={styles.iconchecklist3Parent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src={iconLinkUrl}
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
                    src="../ellipse-4710@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addCardButton} style={addCardButtonStyle}>
          <div className={styles.addCardButtonInner}>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.iconplus} alt="" src="../iconplus.svg" />
                <div className={styles.addCard}>Add Card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
