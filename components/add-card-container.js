import { useMemo } from "react";
import styles from "./add-card-container.module.css";

const AddCardContainer = ({
  ellipseImageUrl,
  teamName,
  userIconImageUrl,
  checkIconImageUrl,
  messageIconImageUrl,
  linkIconImageUrl,
  ellipseImageUrl2,
  contactRMName,
  agentBookName,
  checkIconImageUrl2,
  messageIconImageUrl2,
  linkIconImageUrl2,
  ellipseImageUrl22,
  agentBookName2,
  userLeadIconImageUrl,
  checkIconImageUrl22,
  messageIconImageUrl22,
  linkIconImageUrl22,
  userLeadIconImageUrl2,
  iconFileCheckImageUrl,
  iconMessageImageUrl,
  iconLinkImageUrl,
  ellipseImageUrl23,
  agentBookName3,
  userLeadIconImageUrl22,
  userStarIconImageUrl,
  iconFileCheckImageUrl2,
  iconMessageSvg2,
  iconLinkSvg2,
  propLeft,
  propDisplay,
  propDisplay1,
  propBackgroundColor,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propDisplay5,
  propDisplay6,
  propDisplay7,
  propDisplay8,
  propDisplay9,
  propDisplay10,
  propDisplay11,
  propDisplay12,
  propDisplay13,
  propDisplay14,
  propDisplay15,
  propDisplay16,
  propDisplay17,
  propDisplay18,
  propDisplay19,
  propDisplay20,
  propDisplay21,
  propDisplay22,
  propDisplay23,
  propDisplay24,
  propDisplay25,
  propDisplay26,
  propDisplay27,
  propDisplay28,
  propDisplay29,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const iconUserLeadStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const frameDiv3Style = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const frameDiv4Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv5Style = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const frameDiv6Style = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const frameDiv7Style = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const frameDiv8Style = useMemo(() => {
    return {
      display: propDisplay5,
    };
  }, [propDisplay5]);

  const iconUserLead1Style = useMemo(() => {
    return {
      display: propDisplay6,
    };
  }, [propDisplay6]);

  const frameDiv9Style = useMemo(() => {
    return {
      display: propDisplay7,
    };
  }, [propDisplay7]);

  const frameDiv10Style = useMemo(() => {
    return {
      display: propDisplay8,
    };
  }, [propDisplay8]);

  const frameDiv11Style = useMemo(() => {
    return {
      display: propDisplay9,
    };
  }, [propDisplay9]);

  const frameDiv12Style = useMemo(() => {
    return {
      display: propDisplay10,
    };
  }, [propDisplay10]);

  const frameDiv13Style = useMemo(() => {
    return {
      display: propDisplay11,
    };
  }, [propDisplay11]);

  const iconUserstar1Style = useMemo(() => {
    return {
      display: propDisplay12,
    };
  }, [propDisplay12]);

  const frameDiv14Style = useMemo(() => {
    return {
      display: propDisplay13,
    };
  }, [propDisplay13]);

  const frameDiv15Style = useMemo(() => {
    return {
      display: propDisplay14,
    };
  }, [propDisplay14]);

  const frameDiv16Style = useMemo(() => {
    return {
      display: propDisplay15,
    };
  }, [propDisplay15]);

  const frameDiv17Style = useMemo(() => {
    return {
      display: propDisplay16,
    };
  }, [propDisplay16]);

  const frameDiv18Style = useMemo(() => {
    return {
      display: propDisplay17,
    };
  }, [propDisplay17]);

  const iconUserstar2Style = useMemo(() => {
    return {
      display: propDisplay18,
    };
  }, [propDisplay18]);

  const frameDiv19Style = useMemo(() => {
    return {
      display: propDisplay19,
    };
  }, [propDisplay19]);

  const frameDiv20Style = useMemo(() => {
    return {
      display: propDisplay20,
    };
  }, [propDisplay20]);

  const frameDiv21Style = useMemo(() => {
    return {
      display: propDisplay21,
    };
  }, [propDisplay21]);

  const frameDiv22Style = useMemo(() => {
    return {
      display: propDisplay22,
    };
  }, [propDisplay22]);

  const frameDiv23Style = useMemo(() => {
    return {
      display: propDisplay23,
    };
  }, [propDisplay23]);

  const iconFileCheck1Style = useMemo(() => {
    return {
      display: propDisplay24,
    };
  }, [propDisplay24]);

  const frameDiv24Style = useMemo(() => {
    return {
      display: propDisplay25,
    };
  }, [propDisplay25]);

  const frameDiv25Style = useMemo(() => {
    return {
      display: propDisplay26,
    };
  }, [propDisplay26]);

  const frameDiv26Style = useMemo(() => {
    return {
      display: propDisplay27,
    };
  }, [propDisplay27]);

  const frameDiv27Style = useMemo(() => {
    return {
      display: propDisplay28,
    };
  }, [propDisplay28]);

  const frameDiv28Style = useMemo(() => {
    return {
      display: propDisplay29,
    };
  }, [propDisplay29]);

  return (
    <div className={styles.frameParent} style={frameDiv2Style}>
      <div className={styles.workflowCardWrapper}>
        <div className={styles.workflowCard}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src={ellipseImageUrl}
                />
                <div className={styles.contactrm}>{teamName}</div>
              </div>
              <div className={styles.iconuserLeadParent}>
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src={userIconImageUrl}
                  style={iconUserLeadStyle}
                />
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src="../iconuserstar68.svg"
                />
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src={checkIconImageUrl}
                />
              </div>
            </div>
            <div className={styles.designAWebsiteParent}>
              <div className={styles.designAWebsite}>Design a website</div>
              <div className={styles.frameDiv} style={frameDiv3Style}>
                <div className={styles.frameItem} style={frameDiv4Style} />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.frameParent1} style={frameDiv5Style}>
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
                    src="../icondescription.svg"
                  />
                  <div
                    className={styles.iconmessageParent}
                    style={frameDiv6Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={messageIconImageUrl}
                    />
                    <div className={styles.div}>12</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv7Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src="../iconchecklist-3.svg"
                    />
                    <div className={styles.div}>8/9</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv8Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={linkIconImageUrl}
                    />
                    <div className={styles.div}>2</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
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
      </div>
      <div className={styles.workflowCardWrapper}>
        <div className={styles.workflowCard}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src={ellipseImageUrl2}
                />
                <div className={styles.contactrm}>{contactRMName}</div>
              </div>
              <div className={styles.iconuserLeadParent}>
                <img
                  className={styles.icondescription}
                  alt=""
                  src={agentBookName}
                  style={iconUserLead1Style}
                />
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src="../iconuserstar68.svg"
                />
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src={checkIconImageUrl2}
                />
              </div>
            </div>
            <div className={styles.designAWebsiteParent}>
              <div className={styles.designAWebsite}>Design a website</div>
              <div className={styles.frameDiv} style={frameDiv9Style}>
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.frameParent1} style={frameDiv10Style}>
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
                    src="../icondescription.svg"
                  />
                  <div
                    className={styles.iconmessageParent}
                    style={frameDiv11Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={messageIconImageUrl2}
                    />
                    <div className={styles.div}>12</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv12Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src="../iconchecklist-3.svg"
                    />
                    <div className={styles.div}>8/9</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv13Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={linkIconImageUrl2}
                    />
                    <div className={styles.div}>2</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
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
      </div>
      <div className={styles.workflowCardWrapper}>
        <div className={styles.workflowCard}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src={ellipseImageUrl22}
                />
                <div className={styles.contactrm}>{agentBookName2}</div>
              </div>
              <div className={styles.iconuserLeadParent}>
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src={userLeadIconImageUrl}
                />
                <img
                  className={styles.icondescription}
                  alt=""
                  src="../iconuserstar68.svg"
                  style={iconUserstar1Style}
                />
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src={checkIconImageUrl22}
                />
              </div>
            </div>
            <div className={styles.designAWebsiteParent}>
              <div className={styles.designAWebsite}>Design a website</div>
              <div className={styles.frameDiv} style={frameDiv14Style}>
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.frameParent1} style={frameDiv15Style}>
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
                    src="../icondescription.svg"
                  />
                  <div
                    className={styles.iconmessageParent}
                    style={frameDiv16Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={messageIconImageUrl22}
                    />
                    <div className={styles.div}>12</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv17Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src="../iconchecklist-3.svg"
                    />
                    <div className={styles.div}>8/9</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv18Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={linkIconImageUrl22}
                    />
                    <div className={styles.div}>2</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
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
      </div>
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
                  src={userLeadIconImageUrl2}
                />
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src="../iconuserstar68.svg"
                  style={iconUserstar2Style}
                />
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src={iconFileCheckImageUrl}
                />
              </div>
            </div>
            <div className={styles.designAWebsiteParent}>
              <div className={styles.designAWebsite}>Design a website</div>
              <div className={styles.frameDiv} style={frameDiv19Style}>
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.frameParent1} style={frameDiv20Style}>
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
                    src="../icondescription.svg"
                  />
                  <div
                    className={styles.iconmessageParent}
                    style={frameDiv21Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={iconMessageImageUrl}
                    />
                    <div className={styles.div}>12</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv22Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src="../iconchecklist-3.svg"
                    />
                    <div className={styles.div}>8/9</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv23Style}
                  >
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
      </div>
      <div className={styles.workflowCardWrapper}>
        <div className={styles.workflowCard}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src={ellipseImageUrl23}
                />
                <div className={styles.contactrm}>{agentBookName3}</div>
              </div>
              <div className={styles.iconuserLeadParent}>
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src={userLeadIconImageUrl22}
                />
                <img
                  className={styles.iconuserLead}
                  alt=""
                  src={userStarIconImageUrl}
                />
                <img
                  className={styles.icondescription}
                  alt=""
                  src={iconFileCheckImageUrl2}
                  style={iconFileCheck1Style}
                />
              </div>
            </div>
            <div className={styles.designAWebsiteParent}>
              <div className={styles.designAWebsite}>Design a website</div>
              <div className={styles.frameDiv} style={frameDiv24Style}>
                <div className={styles.frameItem} />
                <div className={styles.frameInner} />
              </div>
              <div className={styles.frameParent1} style={frameDiv25Style}>
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
                    src="../icondescription27.svg"
                  />
                  <div
                    className={styles.iconmessageParent}
                    style={frameDiv26Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={iconMessageSvg2}
                    />
                    <div className={styles.div}>12</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv27Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src="../iconchecklist-332.svg"
                    />
                    <div className={styles.div}>8/9</div>
                  </div>
                  <div
                    className={styles.iconchecklist3Parent}
                    style={frameDiv28Style}
                  >
                    <img
                      className={styles.icondescription}
                      alt=""
                      src={iconLinkSvg2}
                    />
                    <div className={styles.div}>2</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
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
      </div>
      <div className={styles.addCardButton}>
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
  );
};

export default AddCardContainer;
