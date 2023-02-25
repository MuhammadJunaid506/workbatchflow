import DesignWebsiteContainer from "../components/design-website-container";
import SearchContainer from "../components/search-container";
import styles from "./archive-container.module.css";

const ArchiveContainer = () => {
  return (
    <div className={styles.archive}>
      <div className={styles.maskGroupParent}>
        <DesignWebsiteContainer
          userImageUrl="ellipse-4732@2x.png"
          iconImageUrl="../ellipse-82.svg"
          userLeadImageUrl="../iconuser-lead48.svg"
          userStarImageUrl="iconuserstar48.svg"
          iconFileImageUrl="../iconfile-check46.svg"
          iconDescriptionImageUrl="../icondescription.svg"
          iconMessageImageUrl="../iconmessage27.svg"
          checklistImageUrl="../iconchecklist-327.svg"
          iconLinkImageUrl="iconlink32.svg"
          ellipseImageUrl="../ellipse-478@2x.png"
        />
        <DesignWebsiteContainer
          userImageUrl="ellipse-4732@2x.png"
          iconImageUrl="../ellipse-82.svg"
          userLeadImageUrl="../iconuser-lead49.svg"
          userStarImageUrl="iconuserstar48.svg"
          iconFileImageUrl="../iconfile-check47.svg"
          iconDescriptionImageUrl="../icondescription.svg"
          iconMessageImageUrl="../iconmessage27.svg"
          checklistImageUrl="../iconchecklist-327.svg"
          iconLinkImageUrl="iconlink32.svg"
          ellipseImageUrl="../ellipse-478@2x.png"
        />
        <DesignWebsiteContainer
          userImageUrl="ellipse-4732@2x.png"
          iconImageUrl="../ellipse-82.svg"
          userLeadImageUrl="../iconuser-lead50.svg"
          userStarImageUrl="iconuserstar48.svg"
          iconFileImageUrl="../iconfile-check48.svg"
          iconDescriptionImageUrl="../icondescription.svg"
          iconMessageImageUrl="../iconmessage27.svg"
          checklistImageUrl="../iconchecklist-327.svg"
          iconLinkImageUrl="iconlink32.svg"
          ellipseImageUrl="../ellipse-478@2x.png"
        />
        <DesignWebsiteContainer
          userImageUrl="ellipse-4732@2x.png"
          iconImageUrl="../ellipse-82.svg"
          userLeadImageUrl="../iconuser-lead51.svg"
          userStarImageUrl="iconuserstar48.svg"
          iconFileImageUrl="../iconfile-check49.svg"
          iconDescriptionImageUrl="../icondescription.svg"
          iconMessageImageUrl="../iconmessage27.svg"
          checklistImageUrl="../iconchecklist-327.svg"
          iconLinkImageUrl="iconlink32.svg"
          ellipseImageUrl="../ellipse-478@2x.png"
        />
        <DesignWebsiteContainer
          userImageUrl="ellipse-4740@2x.png"
          ellipseImageUrl="../ellipse-4710@2x.png"
        />
        <DesignWebsiteContainer
          userImageUrl="ellipse-4740@2x.png"
          ellipseImageUrl="../ellipse-4710@2x.png"
        />
        <DesignWebsiteContainer
          userImageUrl="ellipse-4740@2x.png"
          ellipseImageUrl="../ellipse-4710@2x.png"
        />
      </div>
      <div className={styles.archiveChild} />
      <SearchContainer
        iconImageUrls="../iconarchive1.svg"
        snoozeImageUrls="../iconsnooze1.svg"
        propBackgroundColor="#6248ff"
        propOpacity="unset"
        propOpacity1="unset"
        propColor="#fff"
        propBackgroundColor1="1px solid #e6e7e9"
        propOpacity2="0.5"
        propColor1="1px solid #070f21"
        propOpacity3="0.8"
      />
    </div>
  );
};

export default ArchiveContainer;
