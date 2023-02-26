import Link from 'next/link';
import { useState } from 'react';
import styles from "./sidebar-container.module.css";
import Layout from '../components/Layout';
// const drawerToggle = document.querySelector('.drawer-toggle');
// const drawer = document.querySelector('.drawer');



const SidebarContainer = ({
  arrowIconUrl,
  dashboardIconUrl,
  calendarIconUrl,
  socialMediaIconUrl,
  analyticsIconUrl,
  dotIconUrl,
  userLeadIconUrl,
  dotIcon1Url,
  userStarIconUrl,
  notificationIconUrl,
  dotIcon1Url2,
  documentIconUrl,
  dotIcon2Url,
  segmentIconUrl,
  checkIconUrl,

}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  return (
    <>
    <Layout>
    <div className={styles.sidebar}>
      <div className={`${styles.drawer} ${isOpen ? styles.active : ''}`}>
      {/* <div className={styles.sideBar}> */}
      <div className={styles.drawercontent}>
        <div className={styles.sideBarChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.vectorWrapper}>
                <img className={styles.vectorIcon} alt="" src="../vector.svg" />
              </div>
              <div className={styles.zaanCorpParent}>
                <div className={styles.zaanCorp}>Zaan Corp</div>
                <img
                  className={styles.iconarrowChevron}
                  alt=""
                  src="../iconarrow-chevron1.svg"
                />
              </div>
            </div>
          </div>
          <button className={styles['icondoubleArrow']} onClick={() => setIsOpen(!isOpen)}>
          <img className={styles.icondoubleArrow} alt="" src={arrowIconUrl} />
          </button>
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
                  src={dashboardIconUrl}
                />
                <div className={styles.dashboard}>
                <Link href="/">Dashboard</Link>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupItem} />
              <div className={styles.frameDiv}>
                <div className={styles.iconworkflowParent}>
                  <div className={styles.icondashboad}>
                    <div className={styles.iconworkflowChild} />
                    <div className={styles.iconworkflowItem} />
                    <div className={styles.iconworkflowInner} />
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.dashboard}>
                  <Link href="/">Workflow</Link>
                  </div>
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
                    src={calendarIconUrl}
                  />
                  <div className={styles.dashboard}>
                  <Link href="/">Calendar</Link>
                  </div>
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
                    src={socialMediaIconUrl}
                  />
                  <div className={styles.dashboard}>
                  <Link href="/">SocialRM</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.icondashboadParent}>
                <img
                  className={styles.icondashboad}
                  alt=""
                  src={analyticsIconUrl}
                />
                <div className={styles.dashboard}>
                <Link href="/">Metrics</Link>
                </div>
              </div>
              <img className={styles.dot01Xs1Icon} alt="" src={dotIconUrl} />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.icondashboadParent}>
                <img
                  className={styles.icondashboad}
                  alt=""
                  src={userLeadIconUrl}
                />
                <div className={styles.dashboard}>
                <Link href="/">Leads</Link>
                </div>
              </div>
              <img className={styles.dot01Xs1Icon1} alt="" src={dotIcon1Url} />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.icondashboadParent}>
                <img
                  className={styles.icondashboad}
                  alt=""
                  src={userStarIconUrl}
                />
                <div className={styles.dashboard}>
                <Link href="/">Users</Link>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.icondashboadParent}>
                <img
                  className={styles.icondashboad}
                  alt=""
                  src={notificationIconUrl}
                />
                <div className={styles.dashboard}>
                <Link href="/">Notifications</Link>
                </div>
              </div>
              <img className={styles.dot01Xs1Icon2} alt="" src={dotIcon1Url2} />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.icondashboadParent}>
                <img
                  className={styles.icondashboad}
                  alt=""
                  src={documentIconUrl}
                />
                <div className={styles.dashboard}>
                <Link href="/">Documents</Link>
                </div>
              </div>
              <img className={styles.dot01Xs1Icon3} alt="" src={dotIcon2Url} />
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.icondashboadParent}>
                <img
                  className={styles.icondashboad}
                  alt=""
                  src={segmentIconUrl}
                />
                <div className={styles.dashboard}>
                <Link href="/">Segments</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.rectangleParent7}>
            <div className={styles.groupChild} />
            <div className={styles.iconfileCheckParent}>
              <img className={styles.icondashboad} alt="" src={checkIconUrl} />
              <div className={styles.dashboard}>
              <Link href="/">Company</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </Layout>
    </>
  );
};

export default SidebarContainer;
