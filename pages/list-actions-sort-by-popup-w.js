import Header from "../components/header";
import SidebarContainer from "../components/sidebar-container";
import WorkflowSection from "../components/workflow-section";
import CardContainer from "../components/card-container";
import CardForm from "../components/card-form";
import CardFilter1 from "../components/card-filter1";
import SortContainer from "../components/sort-container";
import styles from "./list-actions-sort-by-popup-w.module.css";

const ListActionsSortByPopupW = () => {
  return (
    <div className={styles.listActionsSortByPopupW}>
      <Header
        groupImageUrl="../group-19510.svg"
        groupImageUrl195="../group-2017.svg"
      />
      <SidebarContainer
        arrowIconUrl="../icondouble-arrow2.svg"
        dashboardIconUrl="../icondashboad10.svg"
        calendarIconUrl="../iconcalendar2.svg"
        socialMediaIconUrl="../iconsocial-media10.svg"
        analyticsIconUrl="../iconanalytic2.svg"
        dotIconUrl="../dot-01-xs-18.svg"
        userLeadIconUrl="../iconuser-lead52.svg"
        dotIcon1Url="../dot-01-xs-18.svg"
        userStarIconUrl="iconuserstar52.svg"
        notificationIconUrl="../iconnotifications2.svg"
        dotIcon1Url2="../dot-01-xs-18.svg"
        documentIconUrl="../icondocuments2.svg"
        dotIcon2Url="../dot-01-xs-18.svg"
        segmentIconUrl="../iconsegments2.svg"
        checkIconUrl="../iconfile-check236.svg"
      />
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="../group-12991.svg" />
          <div className={styles.panOut}>
            <div className={styles.panOutChild} />
            <img
              className={styles.iconarrowChevron}
              alt=""
              src="../iconarrow-chevron2.svg"
            />
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="../group-2022.svg" />
      </div>
      <div className={styles.groupContainer}>
        <WorkflowSection
          ellipseImageUrl="../ellipse-471.svg"
          ellipse72ImageUrl="../ellipse-72.svg"
          ellipse471ImageUrl="ellipse-47344.svg"
          iconDesignImageUrl="../icondesign6.svg"
          iconCodeImageUrl="../ellipse-72.svg"
          ellipse472ImageUrl="../ellipse-472.svg"
          iconCodeSvgUrl="../iconcode6.svg"
          ellipse72SvgUrl="../ellipse-72.svg"
          iconDesign1ImageUrl="../ellipse-471.svg"
          iconAnnouncementImageUrl="../iconannoucement2.svg"
          ellipse72SvgUrl2="../ellipse-72.svg"
          iconCode1ImageUrl="../ellipse-474@2x.png"
          ellipse472SvgUrl="../ellipse-72.svg"
          iconAnnouncementImageUrl2="../ellipse-475@2x.png"
          ellipse72SvgUrl3="../ellipse-72.svg"
          iconCode1SvgUrl="../ellipse-476@2x.png"
          ellipse72Text="../ellipse-72.svg"
          iconCode1SvgUrl2="../ellipse-477@2x.png"
          ellipse72Text2="../ellipse-72.svg"
          iconPinnedText="iconpinned5.svg"
          group242Text="../group-2427.svg"
          iconSaveText="../iconsave10.svg"
          frameSvgUrl="../frame.svg"
          propOpacity="0.1"
          propOpacity1="0.8"
          propBorder="1.2px solid var(--text-color)"
          propBackgroundColor="1px solid #070f21"
          propBackgroundColor1="1px solid #070f21"
          propBackgroundColor2="1px solid #070f21"
          propOpacity2="unset"
          propOpacity3="unset"
        />
        <div className={styles.cardHeaderParent}>
          <div className={styles.cardHeader}>
            <div className={styles.toDo3Parent}>
              <div className={styles.toDo3Container}>
                <span className={styles.backlog}>
                  <span>Backlog</span>
                  <span className={styles.span}>{` `}</span>
                </span>
                <span className={styles.span1}>(2)</span>
              </div>
              <div className={styles.iconfilterParent}>
                <img
                  className={styles.iconfilter}
                  alt=""
                  src="../iconfilter.svg"
                />
                <img
                  className={styles.iconfilter}
                  alt=""
                  src="../iconsort-by12.svg"
                />
              </div>
            </div>
            <img
              className={styles.iconmenuDot}
              alt=""
              src="../iconmenu-dot.svg"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.workflowCardParent}>
              <div className={styles.workflowCard}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.ellipseParent}>
                      <img
                        className={styles.frameInner}
                        alt=""
                        src="../ellipse-82.svg"
                      />
                      <div className={styles.contactrm}>ContactRM</div>
                    </div>
                    <div className={styles.iconuserLeadParent}>
                      <img
                        className={styles.iconuserLead}
                        alt=""
                        src="../iconuser-lead44.svg"
                      />
                      <img
                        className={styles.iconuserstar}
                        alt=""
                        src="../iconuserstar44.svg"
                      />
                      <img
                        className={styles.iconuserLead}
                        alt=""
                        src="../iconfile-check43.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.designAWebsiteParent}>
                    <div className={styles.designAWebsite}>
                      Design a website
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameChild1} />
                      <div className={styles.frameChild2} />
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
                          className={styles.iconuserstar}
                          alt=""
                          src="../icondescription.svg"
                        />
                        <div className={styles.iconmessageParent}>
                          <img
                            className={styles.iconuserstar}
                            alt=""
                            src="../iconmessage40.svg"
                          />
                          <div className={styles.div}>12</div>
                        </div>
                        <div className={styles.iconchecklist3Parent}>
                          <img
                            className={styles.iconuserstar}
                            alt=""
                            src="../iconchecklist-340.svg"
                          />
                          <div className={styles.div}>8/9</div>
                        </div>
                        <div className={styles.iconchecklist3Parent}>
                          <img
                            className={styles.iconuserstar}
                            alt=""
                            src="../iconlink40.svg"
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
              <div className={styles.workflowCard}>
                <div className={styles.frameContainer}>
                  <div className={styles.frameDiv}>
                    <div className={styles.ellipseParent}>
                      <img
                        className={styles.frameInner}
                        alt=""
                        src="../ellipse-821.svg"
                      />
                      <div className={styles.contactrm}>AgentBook</div>
                    </div>
                    <div className={styles.iconuserLeadParent}>
                      <img
                        className={styles.iconuserLead}
                        alt=""
                        src="../iconuser-lead45.svg"
                      />
                      <img
                        className={styles.iconuserLead}
                        alt=""
                        src="../iconuserstar44.svg"
                      />
                      <img
                        className={styles.iconuserstar}
                        alt=""
                        src="../iconfile-check44.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.designAWebsiteParent}>
                    <div className={styles.designAWebsite}>
                      Design a website
                    </div>
                    <div className={styles.frameParent1}>
                      <div className={styles.frameChild4} />
                      <div className={styles.frameChild2} />
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
                          className={styles.iconuserstar}
                          alt=""
                          src="../icondescription.svg"
                        />
                        <div className={styles.iconmessageParent}>
                          <img
                            className={styles.iconuserstar}
                            alt=""
                            src="../iconmessage40.svg"
                          />
                          <div className={styles.div}>12</div>
                        </div>
                        <div className={styles.ellipseParent}>
                          <img
                            className={styles.iconuserstar}
                            alt=""
                            src="../iconchecklist-340.svg"
                          />
                          <div className={styles.div}>8/9</div>
                        </div>
                        <div className={styles.iconchecklist3Parent}>
                          <img
                            className={styles.iconuserstar}
                            alt=""
                            src="../iconlink40.svg"
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
            <div className={styles.addCardButton}>
              <div className={styles.addCardButtonInner}>
                <div className={styles.buttonWrapper}>
                  <div className={styles.button}>
                    <img
                      className={styles.iconplus}
                      alt=""
                      src="../iconplus.svg"
                    />
                    <div className={styles.addCard}>Add Card</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardContainer
          completionStatus="Completed"
          sortIconUrl="../iconsort-by12.svg"
          userLeadIconUrl="../iconuser-lead248.svg"
          userStarIconUrl="iconuserstar179.svg"
          descriptionIconUrl="icondescription48.svg"
          messageIconUrl="iconmessage48.svg"
          checklistIconUrl="iconchecklist-348.svg"
          iconLinkUrl="../iconlink2.svg"
          propBackgroundColor="#eeecfa"
        />
        <CardForm
          statusText="In Review"
          sortIconUrl="../iconsort-by12.svg"
          statusIconUrl="../ellipse-821.svg"
          teamName="AgentBook"
          userLeadIconUrl="../iconuser-lead249.svg"
          userStarIconUrl="iconuserstar53.svg"
          checkIconUrl="../iconfile-check239.svg"
          taskName="Design a website"
          iconDescriptionText="icondescription48.svg"
          messageIconUrl="iconmessage48.svg"
          checklistIconUrl="iconchecklist-348.svg"
          iconLinkUrl="../iconlink2.svg"
          ellipseIconUrl="../ellipse-82.svg"
          contactRMText="ContactRM"
          userLeadIconText="../iconuser-lead250.svg"
          userStarText="iconuserstar53.svg"
          checkIconText="../iconfile-check240.svg"
          taskDescriptionText="Design a website"
          iconDescriptionText2="icondescription48.svg"
          messageIconText="iconmessage48.svg"
          checklistIconText="iconchecklist-348.svg"
          iconLinkText="../iconlink2.svg"
          ellipseIconText="../ellipse-821.svg"
          agentBookText="AgentBook"
          userLead6Text="../iconuser-lead251.svg"
          userStarText2="iconuserstar53.svg"
          check5IconText="../iconfile-check241.svg"
          designTaskText="Design a website"
          iconDescriptionText3="icondescription48.svg"
          messageIcon2Url="iconmessage48.svg"
          checklist3IconUrl="iconchecklist-348.svg"
          iconLink2Text="../iconlink2.svg"
          contactRMText2="ContactRM"
          userLead7Text="../iconuser-lead252.svg"
          userStar4Text="iconuserstar53.svg"
          check6IconText="../iconfile-check242.svg"
          designTaskDescriptionText="Design a website"
          iconDescriptionUrl="icondescription48.svg"
          messageIcon2Text="iconmessage48.svg"
          checklist3IconText="iconchecklist-348.svg"
          iconLink2Text2="../iconlink2.svg"
          ellipseIconText2="../ellipse-821.svg"
          agentBookText2="AgentBook"
          userLead8Text="../iconuser-lead253.svg"
          userStar4Text2="iconuserstar53.svg"
          check7IconText="../iconfile-check243.svg"
          designTaskTitle="Design a website"
          iconDescriptionUrl2="icondescription48.svg"
          message2IconText="iconmessage48.svg"
          checklist3IconText2="iconchecklist-348.svg"
          iconLink2Text3="../iconlink2.svg"
          propBackgroundColor="#eeecfa"
        />
        <CardForm
          statusText="To Do"
          sortIconUrl="../iconsort-by12.svg"
          statusIconUrl="../ellipse-828.svg"
          teamName="DW4RTeam"
          userLeadIconUrl="../iconuser-lead254.svg"
          userStarIconUrl="iconuserstar53.svg"
          checkIconUrl="../iconfile-check244.svg"
          taskName="Design a website"
          iconDescriptionText="icondescription48.svg"
          messageIconUrl="iconmessage48.svg"
          checklistIconUrl="iconchecklist-348.svg"
          iconLinkUrl="iconlink8.svg"
          ellipseIconUrl="../ellipse-829.svg"
          contactRMText="Asteler.io"
          userLeadIconText="../iconuser-lead255.svg"
          userStarText="iconuserstar53.svg"
          checkIconText="../iconfile-check245.svg"
          taskDescriptionText="Design a website"
          iconDescriptionText2="icondescription48.svg"
          messageIconText="iconmessage48.svg"
          checklistIconText="iconchecklist-348.svg"
          iconLinkText="iconlink8.svg"
          ellipseIconText="../ellipse-82.svg"
          agentBookText="ContactRM"
          userLead6Text="../iconuser-lead256.svg"
          userStarText2="iconuserstar53.svg"
          check5IconText="../iconfile-check246.svg"
          designTaskText="Design a website"
          iconDescriptionText3="icondescription48.svg"
          messageIcon2Url="iconmessage48.svg"
          checklist3IconUrl="iconchecklist-348.svg"
          iconLink2Text="iconlink8.svg"
          contactRMText2="ContactRM"
          userLead7Text="../iconuser-lead257.svg"
          userStar4Text="iconuserstar53.svg"
          check6IconText="../iconfile-check247.svg"
          designTaskDescriptionText="Design a website"
          iconDescriptionUrl="icondescription48.svg"
          messageIcon2Text="iconmessage48.svg"
          checklist3IconText="iconchecklist-348.svg"
          iconLink2Text2="iconlink8.svg"
          ellipseIconText2="../ellipse-82.svg"
          agentBookText2="ContactRM"
          userLead8Text="iconuser-lead258.svg"
          userStar4Text2="iconuserstar53.svg"
          check7IconText="../iconfile-check248.svg"
          designTaskTitle="Design a website"
          iconDescriptionUrl2="icondescription48.svg"
          message2IconText="iconmessage48.svg"
          checklist3IconText2="iconchecklist-348.svg"
          iconLink2Text3="iconlink8.svg"
          propLeft="154px"
          propBackgroundColor="#eeecfa"
          propDisplay="unset"
          propDisplay2="flex"
          propBackgroundColor1="#deefff"
          propDisplay3="none"
          propDisplay4="flex"
          propDisplay5="flex"
          propDisplay6="flex"
          propDisplay7="none"
          propDisplay9="flex"
          propDisplay10="none"
          propDisplay11="flex"
          propDisplay12="flex"
          propDisplay13="flex"
          propDisplay14="none"
          propDisplay16="flex"
          propDisplay17="none"
          propDisplay18="flex"
          propDisplay19="flex"
          propDisplay20="flex"
          propDisplay21="unset"
          propDisplay23="flex"
          propDisplay24="none"
          propDisplay25="flex"
          propDisplay26="flex"
          propDisplay27="flex"
          propDisplay28="none"
          propDisplay29="flex"
          propDisplay30="none"
          propDisplay31="flex"
          propDisplay32="flex"
          propDisplay33="flex"
        />
        <CardFilter1
          sortIconUrl="../iconsort-by12.svg"
          userLeadIconUrl="../iconuser-lead259.svg"
          userStarIconUrl="iconuserstar53.svg"
          fileCheckIconUrl="../iconfile-check249.svg"
          descriptionIconUrl="icondescription48.svg"
          messageIconUrl="iconmessage48.svg"
          checklistIconUrl="iconchecklist-348.svg"
          iconLinkUrl="iconlink8.svg"
          userLeadIconUrl15="../iconuser-lead260.svg"
          userStarIconUrl1="iconuserstar53.svg"
          fileCheck14IconUrl="../iconfile-check250.svg"
          descriptionIcon2Url="icondescription48.svg"
          message2IconUrl="iconmessage48.svg"
          checklist3IconUrl="iconchecklist-348.svg"
          iconLink8Url="iconlink8.svg"
          userLead16IconUrl="../iconuser-lead261.svg"
          userStarIconUrl12="iconuserstar53.svg"
          fileCheck15IconUrl="../iconfile-check251.svg"
          iconDescriptionUrl="icondescription48.svg"
          message2IconUrl2="iconmessage48.svg"
          checklist3IconUrl2="iconchecklist-348.svg"
          iconLink8Url2="iconlink8.svg"
          userLead17IconUrl="../iconuser-lead262.svg"
          userStarIcon1Url="iconuserstar53.svg"
          fileCheckIconUrl16="../iconfile-check252.svg"
          iconDescription2Url="icondescription48.svg"
          message2IconUrl3="iconmessage48.svg"
          checklist3IconUrl3="iconchecklist-348.svg"
          iconLink8Url3="iconlink8.svg"
          userLead18IconUrl="../iconuser-lead263.svg"
          userStar4IconUrl="iconuserstar53.svg"
          fileCheck17IconUrl="../iconfile-check253.svg"
          iconDescription2Text="icondescription48.svg"
          message2IconText="iconmessage48.svg"
          checklist3IconText="iconchecklist-348.svg"
          iconLink8Text="iconlink8.svg"
          userLead19IconText="../iconuser-lead264.svg"
          userStar4IconText="iconuserstar53.svg"
          fileCheck18IconText="../iconfile-check254.svg"
          iconDescription2Text2="icondescription48.svg"
          message2IconText2="iconmessage48.svg"
          checklist3IconText2="iconchecklist-348.svg"
          iconLink8Text2="iconlink8.svg"
          userLead20IconText="../iconuser-lead265.svg"
          userStar4IconText2="iconuserstar53.svg"
          fileCheckIconText="../iconfile-check255.svg"
          iconDescription2Text3="icondescription48.svg"
          message2IconText3="iconmessage48.svg"
          checklist3IconText3="iconchecklist-348.svg"
          iconLink8Text3="iconlink8.svg"
          userLead21IconText="../iconuser-lead266.svg"
          userStar4IconText3="iconuserstar53.svg"
          check20IconText="../iconfile-check256.svg"
          group371IconText="../group-371.svg"
          sortIconText="../iconsort-by12.svg"
          propBackgroundColor="#eeecfa"
          propBackgroundColor1="#eeecfa"
          propBackgroundColor2="#eeecfa"
          propBackgroundColor3="#eeecfa"
        />
      </div>
      <div className={styles.listActions}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.frameParent9}>
            <div className={styles.moveAllCardsInThisListWrapper}>
              <div className={styles.moveAllCards}>
                Move all cards in this list
              </div>
            </div>
            <div className={styles.moveAllCardsInThisListWrapper}>
              <div className={styles.moveAllCards}>
                Archive all cards in this list
              </div>
            </div>
          </div>
          <img className={styles.groupItem} alt="" src="../group-258.svg" />
          <div className={styles.listActionsParent}>
            <div className={styles.addCard}>List Actions</div>
            <img className={styles.frameIcon} alt="" src="../frame6.svg" />
          </div>
        </div>
      </div>
      <SortContainer propTop="134px" propLeft="823px" />
    </div>
  );
};

export default ListActionsSortByPopupW;
