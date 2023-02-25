import WebsiteDesignContaine from "../components/website-design-containe";
import styles from "./pin-container.module.css";

const PinContainer = () => {
  return (
    <div className={styles.pinCard}>
      <div className={styles.maskGroupParent}>
        <WebsiteDesignContaine
          svgIconUrl="../ellipse-82.svg"
          userLeadIconUrl="../iconuser-lead74.svg"
          userStarIconUrl="iconuserstar56.svg"
          checkIconUrl="../iconfile-check71.svg"
          descriptionIconUrl="icondescription48.svg"
          messageIconUrl="iconmessage50.svg"
          checklistIconUrl="iconchecklist-350.svg"
          ellipseIconUrl="iconlink8.svg"
          svgImageUrl="../ellipse-478@2x.png"
          propBorderRadius="0px var(--br-lg) 8px 0px"
          propDisplay="none"
          propDisplay1="none"
        />
        <WebsiteDesignContaine
          svgIconUrl="../ellipse-82.svg"
          userLeadIconUrl="../iconuser-lead75.svg"
          userStarIconUrl="iconuserstar56.svg"
          checkIconUrl="../iconfile-check72.svg"
          descriptionIconUrl="icondescription48.svg"
          messageIconUrl="iconmessage50.svg"
          checklistIconUrl="iconchecklist-350.svg"
          ellipseIconUrl="iconlink8.svg"
          svgImageUrl="../ellipse-478@2x.png"
        />
        <WebsiteDesignContaine
          svgIconUrl="../ellipse-82.svg"
          userLeadIconUrl="../iconuser-lead76.svg"
          userStarIconUrl="iconuserstar56.svg"
          checkIconUrl="../iconfile-check73.svg"
          descriptionIconUrl="icondescription48.svg"
          messageIconUrl="iconmessage50.svg"
          checklistIconUrl="iconchecklist-350.svg"
          ellipseIconUrl="iconlink8.svg"
          svgImageUrl="../ellipse-478@2x.png"
          propBorderRadius="unset"
          propDisplay1="unset"
        />
        <WebsiteDesignContaine
          svgIconUrl="../ellipse-82.svg"
          userLeadIconUrl="../iconuser-lead77.svg"
          userStarIconUrl="iconuserstar56.svg"
          checkIconUrl="../iconfile-check74.svg"
          descriptionIconUrl="icondescription48.svg"
          messageIconUrl="iconmessage50.svg"
          checklistIconUrl="iconchecklist-350.svg"
          ellipseIconUrl="iconlink8.svg"
          svgImageUrl="../ellipse-478@2x.png"
        />
        <WebsiteDesignContaine
          svgIconUrl="../ellipse-82.svg"
          userLeadIconUrl="../iconuser-lead78.svg"
          userStarIconUrl="iconuserstar56.svg"
          checkIconUrl="../iconfile-check75.svg"
          descriptionIconUrl="icondescription48.svg"
          messageIconUrl="iconmessage50.svg"
          checklistIconUrl="iconchecklist-350.svg"
          ellipseIconUrl="iconlink8.svg"
          svgImageUrl="../ellipse-47128@2x.png"
          propBorderRadius="unset"
          propDisplay1="unset"
        />
        <WebsiteDesignContaine
          svgImageUrl="../ellipse-4710@2x.png"
          propBorderRadius="unset"
          propDisplay1="unset"
        />
        <WebsiteDesignContaine
          svgImageUrl="../ellipse-4710@2x.png"
          propBorderRadius="unset"
          propDisplay="unset"
        />
        <WebsiteDesignContaine
          svgImageUrl="../ellipse-4710@2x.png"
          propBorderRadius="unset"
          propDisplay1="unset"
        />
      </div>
      <div className={styles.pinCardChild} />
      <div className={styles.pinCardItem} />
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="" src="../group-2581.svg" />
        <div className={styles.frameParent}>
          <div className={styles.iconpinnedParent}>
            <img
              className={styles.iconpinned}
              alt=""
              src="../iconpinned6.svg"
            />
            <div className={styles.pinnedCard}>Pinned Card</div>
          </div>
          <img className={styles.iconclose} alt="" src="../iconclose4.svg" />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.search1Parent}>
            <img className={styles.iconclose} alt="" src="../search-1.svg" />
            <div className={styles.search}>Search</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinContainer;
