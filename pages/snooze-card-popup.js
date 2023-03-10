import Header from "../components/header";
import SidebarContainer from "../components/sidebar-container";
import WorkflowSection from "../components/workflow-section";
import AddContainer from "../components/add-container";
import CardContainer from "../components/card-container";
import CardForm from "../components/card-form";
import CardFilter1 from "../components/card-filter1";
import ContainerDesignWebsite from "../components/container-design-website";
import SearchContainer from "../components/search-container";
import styles from "./snooze-card-popup.module.css";

const SnoozeCardPopup = () => {
  return (
    <div className={styles.snoozeCardPopup}>
      <Header
        groupImageUrl="../group-195.svg"
        groupImageUrl195="../group-201.svg"
      />
      <SidebarContainer
        arrowIconUrl="../icondouble-arrow.svg"
        dashboardIconUrl="../icondashboad.svg"
        calendarIconUrl="../iconcalendar.svg"
        socialMediaIconUrl="../iconsocial-media.svg"
        analyticsIconUrl="../iconanalytic.svg"
        dotIconUrl="../dot-01-xs-1.svg"
        userLeadIconUrl="../iconuser-lead.svg"
        dotIcon1Url="../dot-01-xs-1.svg"
        userStarIconUrl="../iconuserstar.svg"
        notificationIconUrl="../iconnotifications.svg"
        dotIcon1Url2="../dot-01-xs-1.svg"
        documentIconUrl="../icondocuments.svg"
        dotIcon2Url="../dot-01-xs-1.svg"
        segmentIconUrl="../iconsegments.svg"
        checkIconUrl="../iconfile-check.svg"
      />
      <div className={styles.frameParent}>
        <div className={styles.groupParent}>
          <img className={styles.frameChild} alt="" src="../group-12997.svg" />
          <div className={styles.panOut}>
            <div className={styles.panOutChild} />
            <img
              className={styles.iconarrowChevron}
              alt=""
              src="../iconarrow-chevron2.svg"
            />
          </div>
        </div>
        <img className={styles.frameChild} alt="" src="../group-2028.svg" />
      </div>
      <div className={styles.groupContainer}>
        <WorkflowSection
          ellipseImageUrl="../ellipse-47.svg"
          ellipse72ImageUrl="../ellipse-72.svg"
          ellipse471ImageUrl="../ellipse-471.svg"
          iconDesignImageUrl="../icondesign.svg"
          iconCodeImageUrl="../ellipse-72.svg"
          ellipse472ImageUrl="../ellipse-472.svg"
          iconCodeSvgUrl="../iconcode.svg"
          ellipse72SvgUrl="../ellipse-72.svg"
          iconDesign1ImageUrl="../ellipse-471.svg"
          iconAnnouncementImageUrl="../iconannoucement.svg"
          ellipse72SvgUrl2="../ellipse-72.svg"
          iconCode1ImageUrl="../ellipse-474@2x.png"
          ellipse472SvgUrl="../ellipse-72.svg"
          iconAnnouncementImageUrl2="../ellipse-475@2x.png"
          ellipse72SvgUrl3="../ellipse-72.svg"
          iconCode1SvgUrl="../ellipse-476@2x.png"
          ellipse72Text="../ellipse-72.svg"
          iconCode1SvgUrl2="../ellipse-477@2x.png"
          ellipse72Text2="../ellipse-72.svg"
          iconPinnedText="../iconpinned.svg"
          group242Text="../group-242.svg"
          iconSaveText="../iconsave.svg"
          frameSvgUrl="../frame.svg"
          propWidth="1174px"
          propHeight="68px"
          propLeft="4px"
          propHeight1="68px"
          propTop="19px"
          propLeft1="0px"
          propBorder="1.2px solid var(--shade)"
          propBackgroundColor="#fff"
          propBackgroundColor1="#fff"
          propBackgroundColor2="#fff"
          propOpacity2="0.1"
          propOpacity3="0.8"
          propOpacity4="0.1"
          propOpacity5="0.8"
          propTop1="16px"
          propLeft2="525px"
        />
        <AddContainer
          sortByText="(2)"
          sortByIconUrl="../iconsort-by.svg"
          userLeadIconUrl="../iconuser-lead1.svg"
          userStarText="../iconuserstar1.svg"
          checkIconUrl="../iconfile-check1.svg"
          descriptionText="../icondescription.svg"
          messageText="../iconmessage.svg"
          checklistIconUrl="../iconchecklist-3.svg"
          iconLinkText="../iconlink.svg"
          ellipseText="../ellipse-821.svg"
          agentBookText="AgentBook"
          userLeadIconUrl2="../iconuser-lead2.svg"
          userStarText2="../iconuserstar1.svg"
          checkIconUrl2="../iconfile-check2.svg"
          descriptionText2="../icondescription.svg"
          messageIconUrl="../iconmessage.svg"
          checklistIconText="../iconchecklist-3.svg"
          iconLinkText2="../iconlink.svg"
          closeText="../iconclose.svg"
          propTop="92px"
          propLeft="0px"
          propJustifyContent="space-between"
          propDisplay1="none"
          propDisplay2="none"
        />
        <CardContainer
          completionStatus="Completed"
          sortIconUrl="../iconsort-by1.svg"
          userLeadIconUrl="../iconuser-lead3.svg"
          userStarIconUrl="../iconuserstar3.svg"
          descriptionIconUrl="../icondescription.svg"
          messageIconUrl="../iconmessage2.svg"
          checklistIconUrl="../iconchecklist-3.svg"
          iconLinkUrl="../iconlink2.svg"
          propTop="92px"
          propLeft="618px"
          propBackgroundColor="rgba(7, 15, 33, 0.04)"
          propDisplay="none"
        />
        <CardForm
          statusText="In Review"
          sortIconUrl="../iconsort-by1.svg"
          statusIconUrl="../ellipse-821.svg"
          teamName="AgentBook"
          userLeadIconUrl="../iconuser-lead4.svg"
          userStarIconUrl="iconuserstar4.svg"
          checkIconUrl="../iconfile-check3.svg"
          taskName="Design a website"
          iconDescriptionText="../icondescription.svg"
          messageIconUrl="../iconmessage2.svg"
          checklistIconUrl="../iconchecklist-3.svg"
          iconLinkUrl="../iconlink2.svg"
          ellipseIconUrl="../ellipse-82.svg"
          contactRMText="ContactRM"
          userLeadIconText="../iconuser-lead5.svg"
          userStarText="iconuserstar4.svg"
          checkIconText="../iconfile-check4.svg"
          taskDescriptionText="Design a website"
          iconDescriptionText2="../icondescription.svg"
          messageIconText="../iconmessage2.svg"
          checklistIconText="../iconchecklist-3.svg"
          iconLinkText="../iconlink2.svg"
          ellipseIconText="../ellipse-821.svg"
          agentBookText="AgentBook"
          userLead6Text="../iconuser-lead6.svg"
          userStarText2="iconuserstar4.svg"
          check5IconText="../iconfile-check5.svg"
          designTaskText="Design a website"
          iconDescriptionText3="../icondescription.svg"
          messageIcon2Url="../iconmessage2.svg"
          checklist3IconUrl="../iconchecklist-3.svg"
          iconLink2Text="../iconlink2.svg"
          contactRMText2="ContactRM"
          userLead7Text="../iconuser-lead7.svg"
          userStar4Text="iconuserstar4.svg"
          check6IconText="../iconfile-check6.svg"
          designTaskDescriptionText="Design a website"
          iconDescriptionUrl="../icondescription.svg"
          messageIcon2Text="../iconmessage2.svg"
          checklist3IconText="../iconchecklist-3.svg"
          iconLink2Text2="../iconlink2.svg"
          ellipseIconText2="../ellipse-821.svg"
          agentBookText2="AgentBook"
          userLead8Text="../iconuser-lead8.svg"
          userStar4Text2="iconuserstar4.svg"
          check7IconText="../iconfile-check7.svg"
          designTaskTitle="Design a website"
          iconDescriptionUrl2="../icondescription.svg"
          message2IconText="../iconmessage2.svg"
          checklist3IconText2="../iconchecklist-3.svg"
          iconLink2Text3="../iconlink2.svg"
          propLeft="464px"
          propTop="92px"
          propBackgroundColor="rgba(7, 15, 33, 0.04)"
          propJustifyContent="space-between"
          propDisplay="none"
          propDisplay1="none"
          propDisplay2="none"
          propBackgroundColor1="#ffc690"
          propDisplay3="flex"
          propDisplay4="none"
          propDisplay5="none"
          propDisplay6="none"
          propDisplay8="none"
          propDisplay9="none"
          propDisplay10="flex"
          propDisplay11="none"
          propDisplay12="none"
          propDisplay13="none"
          propDisplay15="none"
          propDisplay16="none"
          propDisplay17="flex"
          propDisplay18="none"
          propDisplay19="none"
          propDisplay20="none"
          propDisplay21="none"
          propDisplay22="none"
          propDisplay23="none"
          propDisplay24="flex"
          propDisplay25="none"
          propDisplay26="none"
          propDisplay27="none"
          propDisplay29="none"
          propDisplay30="flex"
          propDisplay31="none"
          propDisplay32="none"
          propDisplay33="none"
        />
        <CardForm
          statusText="To Do"
          sortIconUrl="../iconsort-by1.svg"
          statusIconUrl="../ellipse-828.svg"
          teamName="DW4RTeam"
          userLeadIconUrl="../iconuser-lead9.svg"
          userStarIconUrl="iconuserstar4.svg"
          checkIconUrl="../iconfile-check8.svg"
          taskName="Design a website"
          iconDescriptionText="../icondescription.svg"
          messageIconUrl="../iconmessage.svg"
          checklistIconUrl="../iconchecklist-3.svg"
          iconLinkUrl="iconlink8.svg"
          ellipseIconUrl="../ellipse-829.svg"
          contactRMText="Asteler.io"
          userLeadIconText="../iconuser-lead10.svg"
          userStarText="iconuserstar4.svg"
          checkIconText="../iconfile-check9.svg"
          taskDescriptionText="Design a website"
          iconDescriptionText2="../icondescription.svg"
          messageIconText="../iconmessage.svg"
          checklistIconText="../iconchecklist-3.svg"
          iconLinkText="iconlink8.svg"
          ellipseIconText="../ellipse-82.svg"
          agentBookText="ContactRM"
          userLead6Text="../iconuser-lead11.svg"
          userStarText2="iconuserstar4.svg"
          check5IconText="../iconfile-check10.svg"
          designTaskText="Design a website"
          iconDescriptionText3="../icondescription.svg"
          messageIcon2Url="../iconmessage.svg"
          checklist3IconUrl="../iconchecklist-3.svg"
          iconLink2Text="iconlink8.svg"
          contactRMText2="ContactRM"
          userLead7Text="../iconuser-lead12.svg"
          userStar4Text="iconuserstar4.svg"
          check6IconText="../iconfile-check11.svg"
          designTaskDescriptionText="Design a website"
          iconDescriptionUrl="../icondescription.svg"
          messageIcon2Text="../iconmessage.svg"
          checklist3IconText="../iconchecklist-3.svg"
          iconLink2Text2="iconlink8.svg"
          ellipseIconText2="../ellipse-82.svg"
          agentBookText2="ContactRM"
          userLead8Text="../iconuser-lead13.svg"
          userStar4Text2="iconuserstar4.svg"
          check7IconText="../iconfile-check12.svg"
          designTaskTitle="Design a website"
          iconDescriptionUrl2="../icondescription.svg"
          message2IconText="../iconmessage.svg"
          checklist3IconText2="../iconchecklist-3.svg"
          iconLink2Text3="iconlink8.svg"
          propLeft="154px"
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
          sortIconUrl="../iconsort-by1.svg"
          userLeadIconUrl="../iconuser-lead14.svg"
          userStarIconUrl="iconuserstar4.svg"
          fileCheckIconUrl="../iconfile-check13.svg"
          descriptionIconUrl="../icondescription.svg"
          messageIconUrl="../iconmessage2.svg"
          checklistIconUrl="../iconchecklist-3.svg"
          iconLinkUrl="iconlink8.svg"
          userLeadIconUrl15="../iconuser-lead15.svg"
          userStarIconUrl1="iconuserstar4.svg"
          fileCheck14IconUrl="../iconfile-check14.svg"
          descriptionIcon2Url="../icondescription.svg"
          message2IconUrl="../iconmessage2.svg"
          checklist3IconUrl="../iconchecklist-3.svg"
          iconLink8Url="iconlink8.svg"
          userLead16IconUrl="../iconuser-lead16.svg"
          userStarIconUrl12="iconuserstar4.svg"
          fileCheck15IconUrl="../iconfile-check15.svg"
          iconDescriptionUrl="../icondescription.svg"
          message2IconUrl2="../iconmessage2.svg"
          checklist3IconUrl2="../iconchecklist-3.svg"
          iconLink8Url2="iconlink8.svg"
          userLead17IconUrl="../iconuser-lead17.svg"
          userStarIcon1Url="iconuserstar4.svg"
          fileCheckIconUrl16="../iconfile-check16.svg"
          iconDescription2Url="../icondescription.svg"
          message2IconUrl3="../iconmessage2.svg"
          checklist3IconUrl3="../iconchecklist-3.svg"
          iconLink8Url3="iconlink8.svg"
          userLead18IconUrl="../iconuser-lead18.svg"
          userStar4IconUrl="iconuserstar4.svg"
          fileCheck17IconUrl="../iconfile-check17.svg"
          iconDescription2Text="../icondescription.svg"
          message2IconText="../iconmessage2.svg"
          checklist3IconText="../iconchecklist-3.svg"
          iconLink8Text="iconlink8.svg"
          userLead19IconText="../iconuser-lead19.svg"
          userStar4IconText="iconuserstar4.svg"
          fileCheck18IconText="../iconfile-check18.svg"
          iconDescription2Text2="../icondescription.svg"
          message2IconText2="../iconmessage2.svg"
          checklist3IconText2="../iconchecklist-3.svg"
          iconLink8Text2="iconlink8.svg"
          userLead20IconText="../iconuser-lead20.svg"
          userStar4IconText2="iconuserstar4.svg"
          fileCheckIconText="../iconfile-check19.svg"
          iconDescription2Text3="../icondescription.svg"
          message2IconText3="../iconmessage2.svg"
          checklist3IconText3="../iconchecklist-3.svg"
          iconLink8Text3="iconlink8.svg"
          userLead21IconText="../iconuser-lead21.svg"
          userStar4IconText3="iconuserstar4.svg"
          check20IconText="../iconfile-check20.svg"
          group371IconText="../group-371.svg"
          sortIconText="../iconsort-by1.svg"
          propBackgroundColor1="rgba(7, 15, 33, 0.04)"
          propBackgroundColor2="#eff2f5"
          propBackgroundColor3="#eff2f5"
        />
      </div>
      <div className={styles.snooze}>
        <div className={styles.archive}>
          <div className={styles.frameGroup}>
            <div className={styles.maskGroupParent}>
              <ContainerDesignWebsite
                svgImageUrl="ellipse-4732@2x.png"
                ellipseSvgImageUrl="ellipse-8221.svg"
                userLeadSvgImageUrl="../iconuser-lead22.svg"
                userStarSvgImageUrl="iconuserstar22.svg"
                checkSvgImageUrl="../iconfile-check21.svg"
                descriptionSvgImageUrl="icondescription20.svg"
                messageSvgImageUrl="iconmessage20.svg"
                checklistSvgImageUrl="iconchecklist-320.svg"
                iconLinkSvgImageUrl="iconlink20.svg"
                svgImageUrl2="ellipse-4733@2x.png"
              />
              <ContainerDesignWebsite
                svgImageUrl="ellipse-4734@2x.png"
                ellipseSvgImageUrl="../ellipse-82.svg"
                userLeadSvgImageUrl="../iconuser-lead23.svg"
                userStarSvgImageUrl="iconuserstar4.svg"
                checkSvgImageUrl="../iconfile-check22.svg"
                descriptionSvgImageUrl="../icondescription.svg"
                messageSvgImageUrl="../iconmessage2.svg"
                checklistSvgImageUrl="../iconchecklist-3.svg"
                iconLinkSvgImageUrl="iconlink8.svg"
                svgImageUrl2="../ellipse-478@2x.png"
              />
              <ContainerDesignWebsite
                svgImageUrl="ellipse-4736@2x.png"
                ellipseSvgImageUrl="ellipse-8223.svg"
                userLeadSvgImageUrl="../iconuser-lead24.svg"
                userStarSvgImageUrl="../iconuserstar24.svg"
                checkSvgImageUrl="../iconfile-check23.svg"
                descriptionSvgImageUrl="icondescription22.svg"
                messageSvgImageUrl="iconmessage22.svg"
                checklistSvgImageUrl="iconchecklist-322.svg"
                iconLinkSvgImageUrl="iconlink22.svg"
                svgImageUrl2="ellipse-4737@2x.png"
              />
              <ContainerDesignWebsite
                svgImageUrl="ellipse-4738@2x.png"
                ellipseSvgImageUrl="ellipse-8224.svg"
                userLeadSvgImageUrl="../iconuser-lead25.svg"
                userStarSvgImageUrl="iconuserstar25.svg"
                checkSvgImageUrl="../iconfile-check24.svg"
                descriptionSvgImageUrl="icondescription23.svg"
                messageSvgImageUrl="iconmessage23.svg"
                checklistSvgImageUrl="iconchecklist-323.svg"
                iconLinkSvgImageUrl="iconlink23.svg"
                svgImageUrl2="ellipse-4739@2x.png"
              />
              <ContainerDesignWebsite
                svgImageUrl="ellipse-4740@2x.png"
                svgImageUrl2="../ellipse-4710@2x.png"
              />
              <ContainerDesignWebsite
                svgImageUrl="ellipse-4740@2x.png"
                svgImageUrl2="../ellipse-4710@2x.png"
              />
              <ContainerDesignWebsite
                svgImageUrl="ellipse-4740@2x.png"
                svgImageUrl2="../ellipse-4710@2x.png"
              />
            </div>
            <div className={styles.groupChild} />
          </div>
        </div>
        <SearchContainer
          iconImageUrls="../iconarchive.svg"
          snoozeImageUrls="../iconsnooze.svg"
          propBackgroundColor="1px solid #e6e7e9"
          propOpacity="0.8"
          propOpacity1="0.5"
          propColor="1px solid #070f21"
          propBackgroundColor1="#6248ff"
          propColor1="#fff"
        />
      </div>
    </div>
  );
};

export default SnoozeCardPopup;
