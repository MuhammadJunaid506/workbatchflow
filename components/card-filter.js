import { useMemo } from "react";
import styles from "./card-filter.module.css";

const CardFilter = ({
  statusText,
  statusIconUrl,
  sortIconUrl,
  filterIconUrl,
  teamText,
  userIconUrl,
  checkIconUrl,
  iconDescriptionUrl,
  iconMessageUrl,
  iconChecklistUrl,
  iconLinkUrl,
  ellipseIconUrl,
  contactText,
  userLeadIconUrl,
  checkIconOneUrl,
  iconMessageUrl2,
  iconChecklistUrl2,
  iconFileCheckTwoUrl,
  iconLinkOneUrl,
  ellipseText,
  agentBookText,
  userLeadIconOneUrl,
  iconFileCheckOneUrl,
  iconDescriptionText,
  iconMessageText,
  iconChecklistText,
  iconLinkOneText,
  ellipseText2,
  userLeadIconOneText,
  iconFileCheckOneText,
  iconDescriptionText2,
  iconMessageText2,
  iconChecklistText2,
  iconLinkOneText2,
  ellipseText3,
  agentBookText2,
  carBrandText,
  iconFileCheckOneText2,
  iconDescriptionText3,
  carBrandText2,
  iconChecklistText3,
  carBrandText3,
  carBrandText4,
  propLeft,
  propHeight,
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
  const frameDiv29Style = useMemo(() => {
    return {
      left: propLeft,
      height: propHeight,
    };
  }, [propLeft, propHeight]);

  const iconUserLead2Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const frameDiv30Style = useMemo(() => {
    return {
      display: propDisplay1,
    };
  }, [propDisplay1]);

  const frameDiv31Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDiv32Style = useMemo(() => {
    return {
      display: propDisplay2,
    };
  }, [propDisplay2]);

  const frameDiv33Style = useMemo(() => {
    return {
      display: propDisplay3,
    };
  }, [propDisplay3]);

  const frameDiv34Style = useMemo(() => {
    return {
      display: propDisplay4,
    };
  }, [propDisplay4]);

  const frameDiv35Style = useMemo(() => {
    return {
      display: propDisplay5,
    };
  }, [propDisplay5]);

  const iconUserLead3Style = useMemo(() => {
    return {
      display: propDisplay6,
    };
  }, [propDisplay6]);

  const frameDiv36Style = useMemo(() => {
    return {
      display: propDisplay7,
    };
  }, [propDisplay7]);

  const frameDiv37Style = useMemo(() => {
    return {
      display: propDisplay8,
    };
  }, [propDisplay8]);

  const frameDiv38Style = useMemo(() => {
    return {
      display: propDisplay9,
    };
  }, [propDisplay9]);

  const frameDiv39Style = useMemo(() => {
    return {
      display: propDisplay10,
    };
  }, [propDisplay10]);

  const frameDiv40Style = useMemo(() => {
    return {
      display: propDisplay11,
    };
  }, [propDisplay11]);

  const iconUserstar3Style = useMemo(() => {
    return {
      display: propDisplay12,
    };
  }, [propDisplay12]);

  const frameDiv41Style = useMemo(() => {
    return {
      display: propDisplay13,
    };
  }, [propDisplay13]);

  const frameDiv42Style = useMemo(() => {
    return {
      display: propDisplay14,
    };
  }, [propDisplay14]);

  const frameDiv43Style = useMemo(() => {
    return {
      display: propDisplay15,
    };
  }, [propDisplay15]);

  const frameDiv44Style = useMemo(() => {
    return {
      display: propDisplay16,
    };
  }, [propDisplay16]);

  const frameDiv45Style = useMemo(() => {
    return {
      display: propDisplay17,
    };
  }, [propDisplay17]);

  const iconUserstar4Style = useMemo(() => {
    return {
      display: propDisplay18,
    };
  }, [propDisplay18]);

  const frameDiv46Style = useMemo(() => {
    return {
      display: propDisplay19,
    };
  }, [propDisplay19]);

  const frameDiv47Style = useMemo(() => {
    return {
      display: propDisplay20,
    };
  }, [propDisplay20]);

  const frameDiv48Style = useMemo(() => {
    return {
      display: propDisplay21,
    };
  }, [propDisplay21]);

  const frameDiv49Style = useMemo(() => {
    return {
      display: propDisplay22,
    };
  }, [propDisplay22]);

  const frameDiv50Style = useMemo(() => {
    return {
      display: propDisplay23,
    };
  }, [propDisplay23]);

  const iconFileCheck2Style = useMemo(() => {
    return {
      display: propDisplay24,
    };
  }, [propDisplay24]);

  const frameDiv51Style = useMemo(() => {
    return {
      display: propDisplay25,
    };
  }, [propDisplay25]);

  const frameDiv52Style = useMemo(() => {
    return {
      display: propDisplay26,
    };
  }, [propDisplay26]);

  const frameDiv53Style = useMemo(() => {
    return {
      display: propDisplay27,
    };
  }, [propDisplay27]);

  const frameDiv54Style = useMemo(() => {
    return {
      display: propDisplay28,
    };
  }, [propDisplay28]);

  const frameDiv55Style = useMemo(() => {
    return {
      display: propDisplay29,
    };
  }, [propDisplay29]);

  return (
    <div className={styles.cardHeaderParent} style={frameDiv29Style}>
      <div className={styles.cardHeader}>
        <div className={styles.toDo3Parent}>
          <div className={styles.toDo3Container}>
            <span className={styles.inReview}>
              <span>{statusText}</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span1}>(5)</span>
          </div>
          <div className={styles.iconfilterParent}>
            <img className={styles.iconfilter} alt="" src={statusIconUrl} />
            <img className={styles.iconfilter} alt="" src={sortIconUrl} />
          </div>
        </div>
        <img
          className={styles.iconmenuDot}
          alt=""
          src="../iconmenu-dot17.svg"
        />
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
                    src={filterIconUrl}
                  />
                  <div className={styles.contactrm}>{teamText}</div>
                </div>
                <div className={styles.iconuserLeadParent}>
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userIconUrl}
                    style={iconUserLead2Style}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src="../iconuserstar91.svg"
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={checkIconUrl}
                  />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameDiv} style={frameDiv30Style}>
                  <div className={styles.frameItem} style={frameDiv31Style} />
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.frameParent1} style={frameDiv32Style}>
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
                      src={iconDescriptionUrl}
                    />
                    <div
                      className={styles.iconmessageParent}
                      style={frameDiv33Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconMessageUrl}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv34Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconChecklistUrl}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv35Style}
                    >
                      <img
                        className={styles.icondescription}
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
                    src="../ellipse-47134@2x.png"
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
                    src={ellipseIconUrl}
                  />
                  <div className={styles.contactrm}>{contactText}</div>
                </div>
                <div className={styles.iconuserLeadParent}>
                  <img
                    className={styles.icondescription}
                    alt=""
                    src={userLeadIconUrl}
                    style={iconUserLead3Style}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src="../iconuserstar91.svg"
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={checkIconOneUrl}
                  />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameDiv} style={frameDiv36Style}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.frameParent1} style={frameDiv37Style}>
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
                      src={iconMessageUrl2}
                    />
                    <div
                      className={styles.iconmessageParent}
                      style={frameDiv38Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconChecklistUrl2}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv39Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconFileCheckTwoUrl}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv40Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconLinkOneUrl}
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
                    src="../ellipse-47134@2x.png"
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
                  <img className={styles.frameChild} alt="" src={ellipseText} />
                  <div className={styles.contactrm}>{agentBookText}</div>
                </div>
                <div className={styles.iconuserLeadParent}>
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userLeadIconOneUrl}
                  />
                  <img
                    className={styles.icondescription}
                    alt=""
                    src="../iconuserstar91.svg"
                    style={iconUserstar3Style}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={iconFileCheckOneUrl}
                  />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameDiv} style={frameDiv41Style}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.frameParent1} style={frameDiv42Style}>
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
                      src={iconDescriptionText}
                    />
                    <div
                      className={styles.iconmessageParent}
                      style={frameDiv43Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconMessageText}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv44Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconChecklistText}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv45Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconLinkOneText}
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
                    src="../ellipse-47134@2x.png"
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
                    src={ellipseText2}
                  />
                  <div className={styles.contactrm}>ContactRM</div>
                </div>
                <div className={styles.iconuserLeadParent}>
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={userLeadIconOneText}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src="../iconuserstar91.svg"
                    style={iconUserstar4Style}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={iconFileCheckOneText}
                  />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameDiv} style={frameDiv46Style}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.frameParent1} style={frameDiv47Style}>
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
                      src={iconDescriptionText2}
                    />
                    <div
                      className={styles.iconmessageParent}
                      style={frameDiv48Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconMessageText2}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv49Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconChecklistText2}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv50Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconLinkOneText2}
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
                    src="../ellipse-47134@2x.png"
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
                    src={ellipseText3}
                  />
                  <div className={styles.contactrm}>{agentBookText2}</div>
                </div>
                <div className={styles.iconuserLeadParent}>
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src={carBrandText}
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src="../iconuserstar91.svg"
                  />
                  <img
                    className={styles.icondescription}
                    alt=""
                    src={iconFileCheckOneText2}
                    style={iconFileCheck2Style}
                  />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameDiv} style={frameDiv51Style}>
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.frameParent1} style={frameDiv52Style}>
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
                      src={iconDescriptionText3}
                    />
                    <div
                      className={styles.iconmessageParent}
                      style={frameDiv53Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={carBrandText2}
                      />
                      <div className={styles.div}>12</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv54Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={iconChecklistText3}
                      />
                      <div className={styles.div}>8/9</div>
                    </div>
                    <div
                      className={styles.iconchecklist3Parent}
                      style={frameDiv55Style}
                    >
                      <img
                        className={styles.icondescription}
                        alt=""
                        src={carBrandText3}
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
                    src="../ellipse-47134@2x.png"
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
                <img className={styles.iconplus} alt="" src={carBrandText4} />
                <div className={styles.addCard}>Add Card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFilter;
