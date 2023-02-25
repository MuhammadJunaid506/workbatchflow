import styles from "./zaan-corp-container.module.css";

const ZaanCorpContainer = () => {
  return (
    <div className={styles.sideBar}>
      <p>my name is junaid</p>
      <div className={styles.sideBarChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <button className={styles.frameGroup}>
            <div className={styles.vectorWrapper}>
              {/* <img className={styles.vectorIcon} alt="" src="../vector.svg" /> */}
            </div>
            <div className={styles.zaanCorpParent}>
              <div className={styles.zaanCorp}>Zaan Corp</div>
              <img
                className={styles.iconarrowChevron}
                alt=""
                src="../iconarrow-chevron1.svg"
              />
            </div>
          </button>
        </div>
        <img
          className={styles.icondoubleArrow}
          alt=""
          src="../icondouble-arrow.svg"
        />
      </div>
      <div className={styles.sideBarItem} />
      <div className={styles.frameContainer}>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.icondashboadParent}>
              <img
                className={styles.icondashboad}
                alt=""
                src="../icondashboad.svg"
              />
              <div className={styles.dashboard}>Dashboard</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <div className={styles.frameDiv}>
              <div className={styles.iconworkflowParent}>
                <div className={styles.icondashboad}>
                  <div className={styles.iconworkflowChild} />
                  <input className={styles.iconworkflowItem} type="checkbox" />
                  <input className={styles.iconworkflowInner} type="checkbox" />
                  <input className={styles.rectangleInput} type="checkbox" />
                </div>
                <div className={styles.dashboard}>Workflow</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.frameWrapper1}>
              <div className={styles.iconworkflowParent}>
                <img
                  className={styles.icondashboad}
                  alt=""
                  src="../iconcalendar.svg"
                />
                <div className={styles.dashboard}>Calendar</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.frameWrapper1}>
              <div className={styles.iconworkflowParent}>
                <img
                  className={styles.icondashboad}
                  alt=""
                  src="../iconsocial-media.svg"
                />
                <div className={styles.dashboard}>SocialRM</div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.icondashboadParent}>
              <img
                className={styles.icondashboad}
                alt=""
                src="../iconanalytic.svg"
              />
              <div className={styles.dashboard}>Metrics</div>
            </div>
            <img
              className={styles.dot01Xs1Icon}
              alt=""
              src="../dot-01-xs-1.svg"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.icondashboadParent}>
              <img
                className={styles.icondashboad}
                alt=""
                src="../iconuser-lead.svg"
              />
              <div className={styles.dashboard}>Leads</div>
            </div>
            <img
              className={styles.dot01Xs1Icon1}
              alt=""
              src="../dot-01-xs-1.svg"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.icondashboadParent}>
              <img
                className={styles.icondashboad}
                alt=""
                src="../iconuserstar.svg"
              />
              <div className={styles.dashboard}>Users</div>
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.icondashboadParent}>
              <img
                className={styles.icondashboad}
                alt=""
                src="../iconnotifications.svg"
              />
              <div className={styles.dashboard}>Notifications</div>
            </div>
            <img
              className={styles.dot01Xs1Icon2}
              alt=""
              src="../dot-01-xs-1.svg"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.icondashboadParent}>
              <img
                className={styles.icondashboad}
                alt=""
                src="../icondocuments.svg"
              />
              <div className={styles.dashboard}>Documents</div>
            </div>
            <img
              className={styles.dot01Xs1Icon3}
              alt=""
              src="../dot-01-xs-1.svg"
            />
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.icondashboadParent}>
              <img
                className={styles.icondashboad}
                alt=""
                src="../iconsegments.svg"
              />
              <div className={styles.dashboard}>Segments</div>
            </div>
          </div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.rectangleParent7}>
          <div className={styles.groupChild} />
          <div className={styles.iconfileCheckParent}>
            <img
              className={styles.icondashboad}
              alt=""
              src="../iconfile-check.svg"
            />
            <div className={styles.dashboard}>Company</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZaanCorpContainer;
