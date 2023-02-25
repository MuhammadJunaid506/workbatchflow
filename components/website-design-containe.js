import { useMemo } from "react";
import styles from "./website-design-containe.module.css";

const WebsiteDesignContaine = ({
  svgIconUrl,
  userLeadIconUrl,
  userStarIconUrl,
  checkIconUrl,
  descriptionIconUrl,
  messageIconUrl,
  checklistIconUrl,
  ellipseIconUrl,
  svgImageUrl,
  propBorderRadius,
  propDisplay,
  propDisplay1,
}) => {
  const frameDiv57Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const iconUserstar5Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const iconFileCheck3Style = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  return (
    <div className={styles.maskGroup}>
      <div className={styles.maskGroupInner} style={frameDiv57Style}>
        <div className={styles.workflowCardWrapper}>
          <div className={styles.workflowCard}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.ellipseParent}>
                  <img className={styles.frameChild} alt="" src={svgIconUrl} />
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
                    style={iconUserstar5Style}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={checkIconUrl}
                    style={iconFileCheck3Style}
                  />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameContainer}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.frameDiv}>
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
                      className={styles.icondescription}
                      alt=""
                      src={descriptionIconUrl}
                    />
                    <div className={styles.iconmessageParent}>
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={messageIconUrl}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div className={styles.ellipseParent}>
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={checklistIconUrl}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div className={styles.ellipseParent}>
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={ellipseIconUrl}
                      />
                      <div className={styles.div}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.created3DaysAgoWrapper}>
                    <div className={styles.created3Days}>
                      Created 3 days ago
                    </div>
                  </div>
                  <img
                    className={styles.ellipseIcon}
                    alt=""
                    src={svgImageUrl}
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

export default WebsiteDesignContaine;
