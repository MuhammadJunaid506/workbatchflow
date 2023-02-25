import { useMemo } from "react";
import styles from "./workflow-container.module.css";

const WorkflowContainer = ({
  ellipseImageUrl,
  contactRMAgentBookText,
  userLeadIconText,
  checkIconText,
  propTop,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
}) => {
  const workflowCardStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const iconUserstarStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const iconFileCheckStyle = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const frameDivStyle = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const frameDiv1Style = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  return (
    <div className={styles.workflowCard} style={workflowCardStyle}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.ellipseParent}>
            <img className={styles.frameChild} alt="" src={ellipseImageUrl} />
            <div className={styles.contactrm}>{contactRMAgentBookText}</div>
          </div>
          <div className={styles.iconuserLeadParent}>
            <img
              className={styles.iconuserLead}
              alt=""
              src={userLeadIconText}
            />
            <img
              className={styles.iconuserstar}
              alt=""
              src="../iconuserstar1.svg"
              style={iconUserstarStyle}
            />
            <img
              className={styles.iconuserLead}
              alt=""
              src={checkIconText}
              style={iconFileCheckStyle}
            />
          </div>
        </div>
        <div className={styles.designAWebsiteParent}>
          <div className={styles.designAWebsite}>Design a website</div>
          <div className={styles.frameContainer}>
            <div className={styles.frameItem} style={frameDivStyle} />
            <div className={styles.frameInner} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.apicontactrmcomWrapper}>
              <div className={styles.apicontactrmcom}>api.contactrm.com</div>
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
                src="../icondescription.svg"
              />
              <div className={styles.iconmessageParent}>
                <img
                  className={styles.iconuserstar}
                  alt=""
                  src="../iconmessage.svg"
                />
                <div className={styles.div}>12</div>
              </div>
              <div
                className={styles.iconchecklist3Parent}
                style={frameDiv1Style}
              >
                <img
                  className={styles.iconuserstar}
                  alt=""
                  src="../iconchecklist-3.svg"
                />
                <div className={styles.div}>8/9</div>
              </div>
              <div className={styles.iconchecklist3Parent}>
                <img
                  className={styles.iconuserstar}
                  alt=""
                  src="../iconlink.svg"
                />
                <div className={styles.div}>2</div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.created3DaysAgoWrapper}>
              <div className={styles.created3Days}>Created 3 days ago</div>
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
  );
};

export default WorkflowContainer;
