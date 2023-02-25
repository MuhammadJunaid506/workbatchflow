import styles from "./workspace-section.module.css";

const WorkspaceSection = ({ groupSvgText, groupSvgText2423 }) => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.workspaceWrapper}>
            <div className={styles.workspace}>Workspace</div>
          </div>
          <div className={styles.groupParent}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.groupInner}
                alt=""
                src="../ellipse-47220@2x.png"
              />
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse-72.svg"
                />
                <div className={styles.div}>2</div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.groupInner}
                alt=""
                src="../ellipse-475@2x.png"
              />
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse-72.svg"
                />
                <div className={styles.div}>5</div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.groupInner}
                alt=""
                src="../ellipse-474@2x.png"
              />
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse-72.svg"
                />
                <div className={styles.div}>1</div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.groupInner}
                alt=""
                src="../ellipse-477@2x.png"
              />
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse-72.svg"
                />
                <div className={styles.div}>4</div>
              </div>
            </div>
            <div className={styles.ellipseParent}>
              <img
                className={styles.groupInner}
                alt=""
                src="../ellipse-47224@2x.png"
              />
              <div className={styles.ellipseGroup}>
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse-72.svg"
                />
                <div className={styles.div}>4</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.ellipseParent7}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="../ellipse-84.svg"
                />
                <div className={styles.project}>Project</div>
              </div>
              <img
                className={styles.chevronDown1Icon}
                alt=""
                src="../chevrondown-11.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.groupContainer}>
          <img className={styles.frameItem} alt="" src={groupSvgText} />
          <img className={styles.frameItem} alt="" src={groupSvgText2423} />
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent2}>
            <img className={styles.frameIcon} alt="" src="../frame27.svg" />
            <div className={styles.filter}>Filter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSection;
