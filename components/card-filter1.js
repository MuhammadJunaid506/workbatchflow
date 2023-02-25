import { useMemo } from "react";
import styles from "./card-filter1.module.css";

const CardFilter1 = ({
  sortIconUrl,
  userLeadIconUrl,
  userStarIconUrl,
  fileCheckIconUrl,
  descriptionIconUrl,
  messageIconUrl,
  checklistIconUrl,
  iconLinkUrl,
  userLeadIconUrl15,
  userStarIconUrl1,
  fileCheck14IconUrl,
  descriptionIcon2Url,
  message2IconUrl,
  checklist3IconUrl,
  iconLink8Url,
  userLead16IconUrl,
  userStarIconUrl12,
  fileCheck15IconUrl,
  iconDescriptionUrl,
  message2IconUrl2,
  checklist3IconUrl2,
  iconLink8Url2,
  userLead17IconUrl,
  userStarIcon1Url,
  fileCheckIconUrl16,
  iconDescription2Url,
  message2IconUrl3,
  checklist3IconUrl3,
  iconLink8Url3,
  userLead18IconUrl,
  userStar4IconUrl,
  fileCheck17IconUrl,
  iconDescription2Text,
  message2IconText,
  checklist3IconText,
  iconLink8Text,
  userLead19IconText,
  userStar4IconText,
  fileCheck18IconText,
  iconDescription2Text2,
  message2IconText2,
  checklist3IconText2,
  iconLink8Text2,
  userLead20IconText,
  userStar4IconText2,
  fileCheckIconText,
  iconDescription2Text3,
  message2IconText3,
  checklist3IconText3,
  iconLink8Text3,
  userLead21IconText,
  userStar4IconText3,
  check20IconText,
  group371IconText,
  sortIconText,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
}) => {
  const frameDiv90Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv91Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const frameDiv92Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const frameDiv93Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  return (
    <div className={styles.frameParent} style={frameDiv90Style}>
      <div className={styles.cardHeaderParent} style={frameDiv91Style}>
        <div className={styles.cardHeader}>
          <div className={styles.toDo3Parent}>
            <div className={styles.toDo3Container}>
              <span className={styles.inProcess}>
                <span>{`In Process `}</span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span className={styles.span1}>(150)</span>
            </div>
            <div className={styles.iconfilterParent}>
              <img
                className={styles.iconfilter}
                alt=""
                src="../iconfilter.svg"
              />
              <img className={styles.iconfilter} alt="" src={sortIconUrl} />
            </div>
          </div>
          <img className={styles.iconmenuDot} alt="" />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-821.svg"
                    />
                    <div className={styles.contactrm}>AgentBook</div>
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
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={fileCheckIconUrl}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
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
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
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
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={checklistIconUrl}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLinkUrl}
                        />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-821.svg"
                    />
                    <div className={styles.contactrm}>AgentBook</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userLeadIconUrl15}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userStarIconUrl1}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={fileCheck14IconUrl}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
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
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src={descriptionIcon2Url}
                      />
                      <div className={styles.iconmessageParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={message2IconUrl}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={checklist3IconUrl}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink8Url}
                        />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-821.svg"
                    />
                    <div className={styles.contactrm}>AgentBook</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userLead16IconUrl}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userStarIconUrl12}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={fileCheck15IconUrl}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
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
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src={iconDescriptionUrl}
                      />
                      <div className={styles.iconmessageParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={message2IconUrl2}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={checklist3IconUrl2}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink8Url2}
                        />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-821.svg"
                    />
                    <div className={styles.contactrm}>AgentBook</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userLead17IconUrl}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userStarIcon1Url}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={fileCheckIconUrl16}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
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
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src={iconDescription2Url}
                      />
                      <div className={styles.iconmessageParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={message2IconUrl3}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={checklist3IconUrl3}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink8Url3}
                        />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-821.svg"
                    />
                    <div className={styles.contactrm}>AgentBook</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userLead18IconUrl}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userStar4IconUrl}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={fileCheck17IconUrl}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
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
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src={iconDescription2Text}
                      />
                      <div className={styles.iconmessageParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={message2IconText}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={checklist3IconText}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink8Text}
                        />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-821.svg"
                    />
                    <div className={styles.contactrm}>AgentBook</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userLead19IconText}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userStar4IconText}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={fileCheck18IconText}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
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
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src={iconDescription2Text2}
                      />
                      <div className={styles.iconmessageParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={message2IconText2}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={checklist3IconText2}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink8Text2}
                        />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-821.svg"
                    />
                    <div className={styles.contactrm}>AgentBook</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={userLead20IconText}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userStar4IconText2}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={fileCheckIconText}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent31}>
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
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src={iconDescription2Text3}
                      />
                      <div className={styles.iconmessageParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={message2IconText3}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={checklist3IconText3}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink8Text3}
                        />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-821.svg"
                    />
                    <div className={styles.contactrm}>AgentBook</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userLead21IconText}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={userStar4IconText3}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={check20IconText}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent31}>
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
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img className={styles.iconfileCheck} alt="" />
                      <div className={styles.iconmessageParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard8}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img className={styles.frameChild} alt="" />
                    <div className={styles.contactrm}>AgentBook</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img className={styles.iconuserLead} alt="" />
                    <img className={styles.iconuserLead} alt="" />
                    <img className={styles.iconuserLead} alt="" />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent31}>
                    <div className={styles.apicontactrmcomWrapper}>
                      <div className={styles.apicontactrmcom}>
                        api.contactrm.com
                      </div>
                    </div>
                    <div className={styles.apicontactrmWrapper}>
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img className={styles.iconfileCheck} alt="" />
                      <div className={styles.iconmessageParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard8}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img className={styles.frameChild} alt="" />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img className={styles.iconuserLead} alt="" />
                    <img className={styles.iconuserLead} alt="" />
                    <img className={styles.iconfileCheck} alt="" />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent31}>
                    <div className={styles.apicontactrmcomWrapper}>
                      <div className={styles.apicontactrmcom}>
                        api.contactrm.com
                      </div>
                    </div>
                    <div className={styles.apicontactrmWrapper}>
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img className={styles.iconfileCheck} alt="" />
                      <div className={styles.iconmessageParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
          <div className={styles.workflowCardWrapper}>
            <div className={styles.workflowCard8}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img className={styles.frameChild} alt="" />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img className={styles.iconuserLead} alt="" />
                    <img className={styles.iconuserLead} alt="" />
                    <img className={styles.iconfileCheck} alt="" />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent31}>
                    <div className={styles.apicontactrmcomWrapper}>
                      <div className={styles.apicontactrmcom}>
                        api.contactrm.com
                      </div>
                    </div>
                    <div className={styles.apicontactrmWrapper}>
                      <div className={styles.apicontactrmcom}>
                        api.contactrm
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.icondescriptionParent}>
                      <img className={styles.iconfileCheck} alt="" />
                      <div className={styles.iconmessageParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img className={styles.iconfileCheck} alt="" />
                        <div className={styles.div}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
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
        </div>
      </div>
      <img className={styles.groupIcon} alt="" src={group371IconText} />
      <div className={styles.cardHeaderWrapper} style={frameDiv92Style}>
        <div className={styles.cardHeader1}>
          <div className={styles.toDo3Parent}>
            <div className={styles.toDo3Container}>
              <span className={styles.inProcess}>
                <span>In Process</span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span className={styles.span1}>(35)</span>
            </div>
            <div className={styles.iconfilterParent}>
              <img
                className={styles.iconfilter}
                alt=""
                src="../iconfilter.svg"
              />
              <img className={styles.iconfilter} alt="" src={sortIconText} />
            </div>
          </div>
          <img
            className={styles.iconmenuDot}
            alt=""
            src="../iconmenu-dot.svg"
          />
        </div>
      </div>
      <div className={styles.frameWrapper11} style={frameDiv93Style}>
        <div className={styles.frameWrapper12}>
          <div className={styles.buttonWrapper}>
            <div className={styles.button}>
              <img className={styles.frameIcon} alt="" src="../frame1.svg" />
              <div className={styles.addCard}>Add Card</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFilter1;
