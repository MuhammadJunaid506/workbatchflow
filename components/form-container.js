import styles from "./form-container.module.css";

const FormContainer = ({
  iconSortBy,
  iconUserLead,
  iconUserstar,
  iconFileCheck,
  iconMessage,
  iconChecklist3,
  iconLink,
  iconUserLead1,
  iconUserstar1,
  iconFileCheck1,
  iconMessage1,
  iconChecklist31,
  iconLink1,
  iconUserLead2,
  iconUserstar2,
  iconFileCheck2,
  iconMessage2,
  iconChecklist32,
  iconLink2,
  iconUserLead3,
  iconUserstar3,
  iconFileCheck3,
  iconMessage3,
  iconChecklist33,
  iconLink3,
  iconUserLead4,
  iconUserstar4,
  iconFileCheck4,
  iconMessage4,
  iconChecklist34,
  iconLink4,
  iconUserLead5,
  iconUserstar5,
  iconFileCheck5,
  iconMessage5,
  iconChecklist35,
  iconLink5,
  iconUserLead6,
  iconUserstar6,
  iconFileCheck6,
  iconMessage6,
  iconChecklist36,
  iconLink6,
  iconUserLead7,
  iconUserstar7,
  iconFileCheck7,
  iconMessage7,
  iconChecklist37,
  iconLink7,
  iconUserLead8,
  iconUserstar8,
  iconFileCheck8,
  iconMessage8,
  iconChecklist38,
  iconLink8,
  iconUserLead9,
  iconUserstar9,
  iconFileCheck9,
  iconMessage9,
  iconChecklist39,
  iconLink9,
  iconUserLead10,
  iconUserstar10,
  iconFileCheck10,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.cardHeaderParent}>
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
              <img className={styles.iconfilter} alt="" src={iconSortBy} />
            </div>
          </div>
          <img
            className={styles.iconmenuDot}
            alt=""
            src="../iconmenu-dot.svg"
          />
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
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Design</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription139.svg"
                      />
                      <div className={styles.iconmessageParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.iconchecklist3Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist3}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink}
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
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Design</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead1}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar1}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck1}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Design a mobile app
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription139.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage1}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist31}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.iconchecklist3Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink1}
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
          <div className={styles.workflowCardFrame}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead2}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar2}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck2}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Develope a app for the Zaan Corporation
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription139.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage2}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.iconchecklist3Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist32}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink2}
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
          <div className={styles.workflowCardFrame}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead3}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar3}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck3}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Develope a app for the Zaan Corporation
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription139.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage3}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist33}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink3}
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
          <div className={styles.workflowCardFrame}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead4}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar4}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck4}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Develope a app for the Zaan Corporation
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription139.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage4}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist34}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink4}
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
          <div className={styles.workflowCardFrame}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead5}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar5}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck5}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Develope a app for the Zaan Corporation
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription139.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage5}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist35}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink5}
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
          <div className={styles.workflowCardFrame}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead6}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar6}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck6}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Develope a app for the Zaan Corporation
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription158.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage6}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist36}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink6}
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
          <div className={styles.workflowCardFrame}>
            <div className={styles.workflowCard}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead7}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar7}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck7}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Develope a app for the Zaan Corporation
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription158.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage7}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist37}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink7}
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
          <div className={styles.workflowCardFrame}>
            <div className={styles.workflowCard8}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead8}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar8}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck8}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Develope a app for the Zaan Corporation
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription158.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage8}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist38}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink8}
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
          <div className={styles.workflowCardFrame}>
            <div className={styles.workflowCard8}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead9}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar9}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck9}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Develope a app for the Zaan Corporation
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                        src="../icondescription158.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconMessage9}
                        />
                        <div className={styles.div}>12</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconChecklist39}
                        />
                        <div className={styles.div}>8/9</div>
                      </div>
                      <div className={styles.ellipseParent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src={iconLink9}
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
          <div className={styles.workflowCardFrame}>
            <div className={styles.workflowCard8}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserLead10}
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src={iconUserstar10}
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src={iconFileCheck10}
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>
                    Develope a app for the Zaan Corporation
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameParent2}>
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
                      <div className={styles.iconmessageGroup}>
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
          <div className={styles.groupDiv}>
            <div className={styles.buttonWrapper}>
              <div className={styles.button}>
                <img className={styles.frameIcon} alt="" />
                <div className={styles.addCard}>Add Card</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" src="../polygon-4.svg" />
        <div className={styles.groupInner} />
      </div>
    </div>
  );
};

export default FormContainer;
