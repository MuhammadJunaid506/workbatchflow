import Header from "../components/header";
import WorkflowContainer from "../components/workflow-container";
import AddCardContainer from "../components/add-card-container";
import SidebarContainer from "../components/sidebar-container";
import SortContainer from "../components/sort-container";
import styles from "./sort-by-popup-with-space-color.module.css";

const SortByPopupWithSpaceColor = () => {
  return (
    <div className={styles.sortByPopupWithSpaceColor}>
      <img className={styles.bgIcon} alt="" src="../bg.svg" />
      <Header
        groupImageUrl="../group-1959.svg"
        groupImageUrl195="../group-2018.svg"
      />
      <div className={styles.sortByPopupWithSpaceColorChild} />
      <div className={styles.sortByPopupWithSpaceColorInner}>
        <div className={styles.frameParent}>
          <div className={styles.workflowWrapper}>
            <div className={styles.workflow}>Workflow</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.component26Parent}>
              <div className={styles.component26}>
                <img
                  className={styles.component26Child}
                  alt=""
                  src="../ellipse-471.svg"
                />
                <div className={styles.iconworkflow}>
                  <div className={styles.iconworkflowChild} />
                  <div className={styles.iconworkflowItem} />
                  <div className={styles.iconworkflowInner} />
                  <div className={styles.rectangleDiv} />
                </div>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="../ellipse-72.svg"
                  />
                  <div className={styles.div}>2</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.component26Child}
                  alt=""
                  src="../ellipse-471.svg"
                />
                <img
                  className={styles.icondesign}
                  alt=""
                  src="../icondesign3.svg"
                />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="../ellipse-72.svg"
                  />
                  <div className={styles.div}>5</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.groupChild}
                  alt=""
                  src="../ellipse-4798.svg"
                />
                <img
                  className={styles.iconcode}
                  alt=""
                  src="../iconcode3.svg"
                />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="../ellipse-72.svg"
                  />
                  <div className={styles.div}>1</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.component26Child}
                  alt=""
                  src="../ellipse-471.svg"
                />
                <img
                  className={styles.icondesign}
                  alt=""
                  src="../iconannoucement1.svg"
                />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="../ellipse-72.svg"
                  />
                  <div className={styles.div}>4</div>
                </div>
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.component26Parent}>
              <div className={styles.component26}>
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="../ellipse-474@2x.png"
                />
                <div className={styles.ellipseParent2}>
                  <img
                    className={styles.groupChild2}
                    alt=""
                    src="../ellipse-72.svg"
                  />
                  <div className={styles.div4}>2</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="../ellipse-475@2x.png"
                />
                <div className={styles.ellipseParent2}>
                  <img
                    className={styles.groupChild2}
                    alt=""
                    src="../ellipse-72.svg"
                  />
                  <div className={styles.div4}>5</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="../ellipse-476@2x.png"
                />
                <div className={styles.ellipseParent2}>
                  <img
                    className={styles.groupChild2}
                    alt=""
                    src="../ellipse-72.svg"
                  />
                  <div className={styles.div4}>1</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.groupChild1}
                  alt=""
                  src="../ellipse-477@2x.png"
                />
                <div className={styles.ellipseParent2}>
                  <img
                    className={styles.groupChild2}
                    alt=""
                    src="../ellipse-72.svg"
                  />
                  <div className={styles.div4}>4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild9} />
          <img className={styles.iconpinned} alt="" src="../iconpinned3.svg" />
        </div>
        <img
          className={styles.rectangleParent}
          alt=""
          src="../group-2423.svg"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.iconsaveParent}>
            <img className={styles.iconsave} alt="" src="../iconsave3.svg" />
            <div className={styles.views}>Views</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <img className={styles.frameIcon} alt="" src="../frame.svg" />
            <div className={styles.views}>Filter</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <img className={styles.frameIcon} alt="" />
            <div className={styles.views}>Sort by</div>
          </div>
        </div>
      </div>
      <div className={styles.cardHeader}>
        <div className={styles.toDo3Parent}>
          <div className={styles.views}>
            <span className={styles.backlog}>
              <span>Backlog</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span1}>(2)</span>
          </div>
          <div className={styles.iconfilterParent}>
            <img className={styles.iconfilter} alt="" src="../iconfilter.svg" />
            <img
              className={styles.iconfilter}
              alt=""
              src="../iconsort-by6.svg"
            />
          </div>
        </div>
        <img className={styles.iconmenuDot} alt="" src="../iconmenu-dot.svg" />
      </div>
      <WorkflowContainer
        ellipseImageUrl="../ellipse-82.svg"
        contactRMAgentBookText="ContactRM"
        userLeadIconText="../iconuser-lead220.svg"
        checkIconText="../iconfile-check212.svg"
        propTop="204px"
        propDisplay1="none"
        propDisplay3="none"
      />
      <WorkflowContainer
        ellipseImageUrl="../ellipse-821.svg"
        contactRMAgentBookText="AgentBook"
        userLeadIconText="../iconuser-lead221.svg"
        checkIconText="../iconfile-check213.svg"
        propTop="327px"
        propDisplay="none"
        propDisplay1="unset"
        propDisplay2="none"
        propDisplay3="flex"
      />
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
      <div className={styles.cardHeader1}>
        <div className={styles.toDo3Parent}>
          <div className={styles.views}>
            <span className={styles.backlog}>
              <span>Completed</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span1}>(1)</span>
          </div>
          <div className={styles.iconfilterParent}>
            <img className={styles.iconfilter} alt="" src="../iconfilter.svg" />
            <img
              className={styles.iconfilter}
              alt=""
              src="../iconsort-by20.svg"
            />
          </div>
        </div>
        <img className={styles.iconmenuDot} alt="" />
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.workflowCardWrapper}>
          <div className={styles.workflowCard}>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.component26Parent}>
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
                    src="../iconuser-lead67.svg"
                  />
                  <img
                    className={styles.iconuserLead}
                    alt=""
                    src="../iconuserstar67.svg"
                  />
                  <img className={styles.iconfileCheck} alt="" />
                </div>
              </div>
              <div className={styles.designAWebsiteParent}>
                <div className={styles.designAWebsite}>Design a website</div>
                <div className={styles.frameParent4}>
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.apicontactrmcomWrapper}>
                    <div className={styles.apicontactrmcom}>
                      api.contactrm.com
                    </div>
                  </div>
                  <div className={styles.apicontactrmWrapper}>
                    <div className={styles.apicontactrmcom}>api.contactrm</div>
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.icondescriptionParent}>
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../icondescription.svg"
                    />
                    <div className={styles.iconmessageParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../iconmessage62.svg"
                      />
                      <div className={styles.div8}>12</div>
                    </div>
                    <div className={styles.iconchecklist3Parent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../iconchecklist-3.svg"
                      />
                      <div className={styles.div8}>8/9</div>
                    </div>
                    <div className={styles.iconchecklist3Parent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../iconlink40.svg"
                      />
                      <div className={styles.div8}>2</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.created3DaysAgoWrapper}>
                    <div className={styles.created3Days}>
                      Created 3 days ago
                    </div>
                  </div>
                  <img
                    className={styles.frameChild3}
                    alt=""
                    src="../ellipse-4710@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addCardButton1}>
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
      <div className={styles.cardHeader2}>
        <div className={styles.toDo3Parent}>
          <div className={styles.views}>
            <span className={styles.backlog}>
              <span>In Review</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span1}>(5)</span>
          </div>
          <div className={styles.iconfilterParent}>
            <img className={styles.iconfilter} alt="" src="../iconfilter.svg" />
            <img
              className={styles.iconfilter}
              alt=""
              src="../iconsort-by20.svg"
            />
          </div>
        </div>
        <img className={styles.iconmenuDot} alt="" src="../iconmenu-dot.svg" />
      </div>
      <AddCardContainer
        ellipseImageUrl="../ellipse-821.svg"
        teamName="AgentBook"
        userIconImageUrl="../iconuser-lead223.svg"
        checkIconImageUrl="../iconfile-check214.svg"
        messageIconImageUrl="iconmessage199.svg"
        linkIconImageUrl="../iconlink2.svg"
        ellipseImageUrl2="../ellipse-82.svg"
        contactRMName="ContactRM"
        agentBookName="../iconuser-lead224.svg"
        checkIconImageUrl2="../iconfile-check215.svg"
        messageIconImageUrl2="iconmessage199.svg"
        linkIconImageUrl2="../iconlink2.svg"
        ellipseImageUrl22="../ellipse-821.svg"
        agentBookName2="AgentBook"
        userLeadIconImageUrl="../iconuser-lead225.svg"
        checkIconImageUrl22="../iconfile-check216.svg"
        messageIconImageUrl22="iconmessage199.svg"
        linkIconImageUrl22="../iconlink2.svg"
        userLeadIconImageUrl2="../iconuser-lead226.svg"
        iconFileCheckImageUrl="../iconfile-check217.svg"
        iconMessageImageUrl="iconmessage199.svg"
        iconLinkImageUrl="../iconlink2.svg"
        ellipseImageUrl23="../ellipse-821.svg"
        agentBookName3="AgentBook"
        userLeadIconImageUrl22="../iconuser-lead227.svg"
        userStarIconImageUrl="iconuserstar4.svg"
        iconFileCheckImageUrl2="../iconfile-check218.svg"
        iconMessageSvg2="../iconmessage2.svg"
        iconLinkSvg2="../iconlink2.svg"
        propLeft="694px"
        propDisplay="none"
        propDisplay1="none"
        propBackgroundColor="#ffc690"
        propDisplay2="flex"
        propDisplay3="none"
        propDisplay4="none"
        propDisplay5="none"
        propDisplay7="none"
        propDisplay8="flex"
        propDisplay9="none"
        propDisplay10="none"
        propDisplay11="none"
        propDisplay13="none"
        propDisplay14="flex"
        propDisplay15="none"
        propDisplay16="none"
        propDisplay17="none"
        propDisplay18="none"
        propDisplay19="none"
        propDisplay20="flex"
        propDisplay21="none"
        propDisplay22="none"
        propDisplay23="none"
        propDisplay25="none"
        propDisplay26="flex"
        propDisplay27="none"
        propDisplay28="none"
        propDisplay29="none"
      />
      <div className={styles.cardHeader3}>
        <div className={styles.toDo3Parent}>
          <div className={styles.views}>
            <span className={styles.backlog}>
              <span>To Do</span>
              <span className={styles.span}>{` `}</span>
            </span>
            <span className={styles.span1}>(5)</span>
          </div>
          <div className={styles.iconfilterParent}>
            <img className={styles.iconfilter} alt="" src="../iconfilter.svg" />
            <img
              className={styles.iconfilter}
              alt=""
              src="../iconsort-by20.svg"
            />
          </div>
        </div>
        <img className={styles.iconmenuDot} alt="" src="../iconmenu-dot.svg" />
      </div>
      <AddCardContainer
        ellipseImageUrl="../ellipse-828.svg"
        teamName="DW4RTeam"
        userIconImageUrl="../iconuser-lead228.svg"
        checkIconImageUrl="../iconfile-check219.svg"
        messageIconImageUrl="iconmessage197.svg"
        linkIconImageUrl="iconlink8.svg"
        ellipseImageUrl2="../ellipse-829.svg"
        contactRMName="Asteler.io"
        agentBookName="../iconuser-lead229.svg"
        checkIconImageUrl2="../iconfile-check220.svg"
        messageIconImageUrl2="iconmessage197.svg"
        linkIconImageUrl2="iconlink8.svg"
        ellipseImageUrl22="../ellipse-82.svg"
        agentBookName2="ContactRM"
        userLeadIconImageUrl="../iconuser-lead230.svg"
        checkIconImageUrl22="../iconfile-check221.svg"
        messageIconImageUrl22="iconmessage197.svg"
        linkIconImageUrl22="iconlink8.svg"
        userLeadIconImageUrl2="iconuser-lead231.svg"
        iconFileCheckImageUrl="../iconfile-check222.svg"
        iconMessageImageUrl="iconmessage197.svg"
        iconLinkImageUrl="iconlink8.svg"
        ellipseImageUrl23="../ellipse-82.svg"
        agentBookName3="ContactRM"
        userLeadIconImageUrl22="../iconuser-lead232.svg"
        userStarIconImageUrl="iconuserstar223.svg"
        iconFileCheckImageUrl2="../iconfile-check223.svg"
        iconMessageSvg2="../iconmessage.svg"
        iconLinkSvg2="iconlink8.svg"
        propLeft="384px"
        propDisplay="unset"
        propDisplay1="flex"
        propBackgroundColor="#deefff"
        propDisplay2="none"
        propDisplay3="flex"
        propDisplay4="flex"
        propDisplay5="flex"
        propDisplay6="none"
        propDisplay7="flex"
        propDisplay8="none"
        propDisplay9="flex"
        propDisplay10="flex"
        propDisplay11="flex"
        propDisplay12="none"
        propDisplay13="flex"
        propDisplay14="none"
        propDisplay15="flex"
        propDisplay16="flex"
        propDisplay17="flex"
        propDisplay18="unset"
        propDisplay19="flex"
        propDisplay20="none"
        propDisplay21="flex"
        propDisplay22="flex"
        propDisplay23="flex"
        propDisplay24="none"
        propDisplay25="flex"
        propDisplay26="none"
        propDisplay27="flex"
        propDisplay28="flex"
        propDisplay29="flex"
      />
      <div className={styles.cardHeaderParent}>
        <div className={styles.cardHeader4}>
          <div className={styles.toDo3Parent}>
            <div className={styles.views}>
              <span className={styles.backlog}>
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
              <img
                className={styles.iconfilter}
                alt=""
                src="../iconsort-by20.svg"
              />
            </div>
          </div>
          <img
            className={styles.iconmenuDot}
            alt=""
            src="../iconmenu-dot.svg"
          />
        </div>
        <div className={styles.frameParent7}>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
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
                      src="../iconuser-lead78.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar68.svg"
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../iconfile-check75.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent4}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage62.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-3.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
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
                      src="../iconuser-lead79.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar68.svg"
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../iconfile-check76.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent4}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage62.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-3.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
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
                      src="../iconuser-lead80.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar68.svg"
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../iconfile-check77.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent4}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage62.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-3.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
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
                      src="../iconuser-lead81.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar68.svg"
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../iconfile-check78.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent4}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage62.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-3.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
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
                      src="../iconuser-lead82.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar68.svg"
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../iconfile-check79.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent4}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage62.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-3.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
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
                      src="../iconuser-lead83.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar72.svg"
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../iconfile-check80.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent4}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription27.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage67.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-332.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="../ellipse-821.svg"
                    />
                    <div className={styles.contactrm}>AgentBook</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../iconuser-lead84.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar72.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconfile-check81.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent5}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent4}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription27.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage67.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-332.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard1}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
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
                      src="../iconuser-lead85.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar72.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconfile-check82.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent5}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent4}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription27.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage67.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-332.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard9}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
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
                      src="../iconuser-lead86.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar72.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconfile-check83.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent5}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription27.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage67.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-332.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard9}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuser-lead87.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar72.svg"
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../iconfile-check84.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent5}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription27.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage67.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-332.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.workflowCardContainer}>
            <div className={styles.workflowCard9}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.component26Parent}>
                    <img
                      className={styles.frameInner}
                      alt=""
                      src="../ellipse-82.svg"
                    />
                    <div className={styles.contactrm}>Development</div>
                  </div>
                  <div className={styles.iconuserLeadParent}>
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuser-lead88.svg"
                    />
                    <img
                      className={styles.iconuserLead}
                      alt=""
                      src="../iconuserstar72.svg"
                    />
                    <img
                      className={styles.iconfileCheck}
                      alt=""
                      src="../iconfile-check85.svg"
                    />
                  </div>
                </div>
                <div className={styles.designAWebsiteParent}>
                  <div className={styles.designAWebsite}>Design a website</div>
                  <div className={styles.frameParent4}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent5}>
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
                  <div className={styles.frameWrapper2}>
                    <div className={styles.icondescriptionParent}>
                      <img
                        className={styles.iconfileCheck}
                        alt=""
                        src="../icondescription27.svg"
                      />
                      <div className={styles.iconmessageGroup}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconmessage67.svg"
                        />
                        <div className={styles.div8}>12</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconchecklist-332.svg"
                        />
                        <div className={styles.div8}>8/9</div>
                      </div>
                      <div className={styles.component26Parent}>
                        <img
                          className={styles.iconfileCheck}
                          alt=""
                          src="../iconlink48.svg"
                        />
                        <div className={styles.div8}>2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.created3DaysAgoWrapper}>
                      <div className={styles.created3Days}>
                        Created 3 days ago
                      </div>
                    </div>
                    <img
                      className={styles.frameChild3}
                      alt=""
                      src="../ellipse-478@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.sortByPopupWithSpaceColorItem}
        alt=""
        src="../group-3713.svg"
      />
      <div className={styles.cardHeaderWrapper}>
        <div className={styles.cardHeader5}>
          <div className={styles.toDo3Parent}>
            <div className={styles.views}>
              <span className={styles.backlog}>
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
              <img
                className={styles.iconfilter}
                alt=""
                src="../iconsort-by20.svg"
              />
            </div>
          </div>
          <img
            className={styles.iconmenuDot}
            alt=""
            src="../iconmenu-dot.svg"
          />
        </div>
      </div>
      <div className={styles.sortByPopupWithSpaceColorInner1}>
        <div className={styles.frameWrapper14}>
          <div className={styles.buttonFrame}>
            <div className={styles.button}>
              <img className={styles.iconplus} alt="" src="../frame1.svg" />
              <div className={styles.addCard}>Add Card</div>
            </div>
          </div>
        </div>
      </div>
      <SidebarContainer
        arrowIconUrl="icondouble-arrow8.svg"
        dashboardIconUrl="../icondashboad9.svg"
        calendarIconUrl="iconcalendar8.svg"
        socialMediaIconUrl="../iconsocial-media9.svg"
        analyticsIconUrl="../iconanalytic.svg"
        dotIconUrl="dot-01-xs-132.svg"
        userLeadIconUrl="../iconuser-lead.svg"
        dotIcon1Url="dot-01-xs-132.svg"
        userStarIconUrl="iconuserstar219.svg"
        notificationIconUrl="iconnotifications8.svg"
        dotIcon1Url2="dot-01-xs-132.svg"
        documentIconUrl="icondocuments8.svg"
        dotIcon2Url="dot-01-xs-132.svg"
        segmentIconUrl="iconsegments8.svg"
        checkIconUrl="../iconfile-check235.svg"
      />
      <div className={styles.myBoard}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild10} />
          <div className={styles.groupChild11} />
          <div className={styles.groupChild12} />
          <div className={styles.myBoard1}>My Board</div>
          <div className={styles.development}>Development</div>
          <div className={styles.core}>Core</div>
          <div className={styles.general}>General</div>
          <div className={styles.content}>Content</div>
          <div className={styles.contentWriting}>Content Writing</div>
        </div>
      </div>
      <div className={styles.frameParent63}>
        <div className={styles.groupParent1}>
          <img className={styles.groupIcon} alt="" src="../group-12991.svg" />
          <div className={styles.panOut}>
            <div className={styles.panOutChild} />
            <img
              className={styles.iconarrowChevron}
              alt=""
              src="../iconarrow-chevron2.svg"
            />
          </div>
        </div>
        <img className={styles.groupIcon} alt="" src="../group-2023.svg" />
      </div>
      <SortContainer frame="../frame29.svg" propTop="197px" propLeft="447px" />
    </div>
  );
};

export default SortByPopupWithSpaceColor;
