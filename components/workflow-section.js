import { useMemo } from "react";
import styles from "./workflow-section.module.css";

const WorkflowSection = ({
  ellipseImageUrl,
  ellipse72ImageUrl,
  ellipse471ImageUrl,
  iconDesignImageUrl,
  iconCodeImageUrl,
  ellipse472ImageUrl,
  iconCodeSvgUrl,
  ellipse72SvgUrl,
  iconDesign1ImageUrl,
  iconAnnouncementImageUrl,
  ellipse72SvgUrl2,
  iconCode1ImageUrl,
  ellipse472SvgUrl,
  iconAnnouncementImageUrl2,
  ellipse72SvgUrl3,
  iconCode1SvgUrl,
  ellipse72Text,
  iconCode1SvgUrl2,
  ellipse72Text2,
  iconPinnedText,
  group242Text,
  iconSaveText,
  frameSvgUrl,
  iconPinnedText2,
  propWidth,
  propHeight,
  propLeft,
  propHeight1,
  propTop,
  propLeft1,
  propOpacity,
  propOpacity1,
  propBorder,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propOpacity2,
  propOpacity3,
  propOpacity4,
  propOpacity5,
  propTop1,
  propLeft2,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      left: propLeft,
      height: propHeight1,
    };
  }, [propLeft, propHeight1]);

  const frameDiv58Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft1,
    };
  }, [propTop, propLeft1]);

  const ellipseIconStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  const iconWorkflowStyle = useMemo(() => {
    return {
      opacity: propOpacity1,
    };
  }, [propOpacity1]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const rectangleDiv4Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const ellipseIcon1Style = useMemo(() => {
    return {
      opacity: propOpacity2,
    };
  }, [propOpacity2]);

  const iconDesignStyle = useMemo(() => {
    return {
      opacity: propOpacity3,
    };
  }, [propOpacity3]);

  const ellipseIcon2Style = useMemo(() => {
    return {
      opacity: propOpacity4,
    };
  }, [propOpacity4]);

  const iconAnnoucementStyle = useMemo(() => {
    return {
      opacity: propOpacity5,
    };
  }, [propOpacity5]);

  const frameDiv59Style = useMemo(() => {
    return {
      top: propTop1,
      left: propLeft2,
    };
  }, [propTop1, propLeft2]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.groupChild} style={rectangleDivStyle} />
      <div className={styles.frameWrapper} style={frameDiv58Style}>
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
                  src={ellipseImageUrl}
                  style={ellipseIconStyle}
                />
                <div className={styles.iconworkflow} style={iconWorkflowStyle}>
                  <div
                    className={styles.iconworkflowChild}
                    style={rectangleDiv1Style}
                  />
                  <div
                    className={styles.iconworkflowItem}
                    style={rectangleDiv2Style}
                  />
                  <div
                    className={styles.iconworkflowInner}
                    style={rectangleDiv3Style}
                  />
                  <div
                    className={styles.rectangleDiv}
                    style={rectangleDiv4Style}
                  />
                </div>
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.component26Child}
                    alt=""
                    src={ellipse72ImageUrl}
                  />
                  <div className={styles.div}>2</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.component27Child}
                  alt=""
                  src={ellipse471ImageUrl}
                  style={ellipseIcon1Style}
                />
                <img
                  className={styles.icondesign}
                  alt=""
                  src={iconDesignImageUrl}
                  style={iconDesignStyle}
                />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.component26Child}
                    alt=""
                    src={iconCodeImageUrl}
                  />
                  <div className={styles.div}>5</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.component26Child}
                  alt=""
                  src={ellipse472ImageUrl}
                />
                <img
                  className={styles.icondesign}
                  alt=""
                  src={iconCodeSvgUrl}
                />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.component26Child}
                    alt=""
                    src={ellipse72SvgUrl}
                  />
                  <div className={styles.div}>1</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.component27Child}
                  alt=""
                  src={iconDesign1ImageUrl}
                  style={ellipseIcon2Style}
                />
                <img
                  className={styles.icondesign}
                  alt=""
                  src={iconAnnouncementImageUrl}
                  style={iconAnnoucementStyle}
                />
                <div className={styles.ellipseParent}>
                  <img
                    className={styles.component26Child}
                    alt=""
                    src={ellipse72SvgUrl2}
                  />
                  <div className={styles.div}>4</div>
                </div>
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.component26Parent}>
              <div className={styles.component26}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src={iconCode1ImageUrl}
                />
                <div className={styles.ellipseParent2}>
                  <img
                    className={styles.groupChild3}
                    alt=""
                    src={ellipse472SvgUrl}
                  />
                  <div className={styles.div4}>2</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src={iconAnnouncementImageUrl2}
                />
                <div className={styles.ellipseParent2}>
                  <img
                    className={styles.groupChild3}
                    alt=""
                    src={ellipse72SvgUrl3}
                  />
                  <div className={styles.div4}>5</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src={iconCode1SvgUrl}
                />
                <div className={styles.ellipseParent2}>
                  <img
                    className={styles.groupChild3}
                    alt=""
                    src={ellipse72Text}
                  />
                  <div className={styles.div4}>1</div>
                </div>
              </div>
              <div className={styles.component26}>
                <img
                  className={styles.groupChild2}
                  alt=""
                  src={iconCode1SvgUrl2}
                />
                <div className={styles.ellipseParent2}>
                  <img
                    className={styles.groupChild3}
                    alt=""
                    src={ellipse72Text2}
                  />
                  <div className={styles.div4}>4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupContainer} style={frameDiv59Style}>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupChild10} />
          <img className={styles.iconpinned} alt="" src={iconPinnedText} />
        </div>
        <img className={styles.rectangleGroup} alt="" src={group242Text} />
        <div className={styles.frameContainer}>
          <div className={styles.iconsaveParent}>
            <img className={styles.iconsave} alt="" src={iconSaveText} />
            <div className={styles.views}>Views</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.iconsortByParent}>
            <img className={styles.frameIcon} alt="" src={frameSvgUrl} />
            <div className={styles.views}>Filter</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.iconsortByParent}>
            <img className={styles.frameIcon} alt="" />
            <div className={styles.views}>Sort by</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
