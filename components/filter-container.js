import styles from "./filter-container.module.css";

const FilterContainer = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filtersChild} />
      <div className={styles.frameParent}>
        <div className={styles.projectParent}>
          <div className={styles.project}>Project</div>
          <div className={styles.frameGroup}>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkChild} />
              </div>
              <div className={styles.noProjectAssignedWrapper}>
                <div className={styles.noProjectAssigned}>
                  No Project Assigned
                </div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkItem} />
                <img className={styles.frameIcon} alt="" src="../frame18.svg" />
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-8242.svg"
                />
                <div className={styles.noProjectAssigned}>ContactRM</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-83.svg"
                />
                <div className={styles.noProjectAssigned}>AgentBook</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-84.svg"
                />
                <div className={styles.noProjectAssigned}>W4RTeam</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-81.svg"
                />
                <div className={styles.noProjectAssigned}>LeadBank</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.tagsParent}>
          <div className={styles.tags}>Tags</div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.checkMarkParent2}>
                <div className={styles.checkMark}>
                  <div className={styles.checkMarkChild} />
                </div>
                <div className={styles.noProjectAssignedWrapper}>
                  <div className={styles.noProjectAssigned}>No Tags Added</div>
                </div>
              </div>
              <div className={styles.checkMarkParent}>
                <div className={styles.checkMark}>
                  <div className={styles.checkMarkItem} />
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="../frame18.svg"
                  />
                </div>
                <div className={styles.apicontactrmcomWrapper}>
                  <div className={styles.apicontactrmcom}>
                    api.contactrm.com
                  </div>
                </div>
              </div>
              <div className={styles.checkMarkParent}>
                <div className={styles.checkMark}>
                  <div className={styles.checkMarkInner} />
                </div>
                <div className={styles.apicontactrmWrapper}>
                  <div className={styles.apicontactrmcom}>api.contactrm</div>
                </div>
              </div>
              <div className={styles.checkMarkParent}>
                <div className={styles.checkMark}>
                  <div className={styles.checkMarkInner} />
                </div>
                <div className={styles.restrictiveApisWrapper}>
                  <div className={styles.apicontactrmcom}>Restrictive APIs</div>
                </div>
              </div>
              <div className={styles.checkMarkParent}>
                <div className={styles.checkMark}>
                  <div className={styles.checkMarkInner} />
                </div>
                <div className={styles.apiagentbookcomWrapper}>
                  <div className={styles.apicontactrmcom}>
                    api.agentbook.com
                  </div>
                </div>
              </div>
              <div className={styles.showAll}>Show all...</div>
            </div>
          </div>
        </div>
        <div className={styles.projectParent}>
          <div className={styles.project}>Card</div>
          <div className={styles.frameGroup}>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkItem} />
                <img className={styles.frameIcon} alt="" src="../frame18.svg" />
              </div>
              <div className={styles.noProjectAssigned}>Cards I created</div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.noProjectAssigned}>
                Cards assigned to me
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.noProjectAssigned}>All Cards</div>
            </div>
          </div>
        </div>
        <div className={styles.projectParent}>
          <div className={styles.project}>Assigned To</div>
          <div className={styles.frameGroup}>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkChild} />
              </div>
              <div className={styles.noProjectAssignedWrapper}>
                <div className={styles.noProjectAssigned}>Nobody Assigned</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkItem} />
                <img className={styles.frameIcon} alt="" src="../frame21.svg" />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4515@2x.png"
                />
                <div className={styles.noProjectAssigned}>Savannah Nguyen</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4516@2x.png"
                />
                <div className={styles.noProjectAssigned}>Wade Warren</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4518@2x.png"
                />
                <div className={styles.noProjectAssigned}>Jane Cooper</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4531@2x.png"
                />
                <div className={styles.noProjectAssigned}>Jacob Jones</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4532@2x.png"
                />
                <div className={styles.noProjectAssigned}>Cody Fisher</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4516@2x.png"
                />
                <div className={styles.noProjectAssigned}>Wade Warren</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4534@2x.png"
                />
                <div className={styles.noProjectAssigned}>Jane Cooper</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4521@2x.png"
                />
                <div className={styles.noProjectAssigned}>Jane Cooper</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4521@2x.png"
                />
                <div className={styles.noProjectAssigned}>Jacob Jones</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4521@2x.png"
                />
                <div className={styles.noProjectAssigned}>Jacob Jones</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4521@2x.png"
                />
                <div className={styles.noProjectAssigned}>Cody Fisher</div>
              </div>
            </div>
            <div className={styles.checkMarkParent}>
              <div className={styles.checkMark}>
                <div className={styles.checkMarkInner} />
              </div>
              <div className={styles.ellipseParent2}>
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="../ellipse-4521@2x.png"
                />
                <div className={styles.noProjectAssigned}>Cody Fisher</div>
              </div>
            </div>
            <div className={styles.showAll}>Show less...</div>
          </div>
        </div>
      </div>
      <div className={styles.filtersItem} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameParent3}>
          <div className={styles.saveAsViewWrapper}>
            <div className={styles.project}>Save as View</div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameWrapper1}>
              <div className={styles.noProjectAssignedWrapper}>
                <div className={styles.clear}>Clear</div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.noProjectAssignedWrapper}>
                <div className={styles.project}>Apply</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.filtersInner}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.frameParent5}>
            <div className={styles.ellipseParent2}>
              <img className={styles.frameIcon4} alt="" src="../frame22.svg" />
              <div className={styles.filters1}>Filters</div>
            </div>
            <img className={styles.frameIcon5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterContainer;
