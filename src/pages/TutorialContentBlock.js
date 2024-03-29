import React from "react";
import styles from "./TutorialContentBlock.module.css";
import videos from "../data/videos.json";
import SideNav from "../components/SideNav";

// const videoThumbnailList = videos.map((video) => (
//   <div>
//     <EmbeddedVideo
//       url={`https://www.youtube.com/embed/${video.id}`}
//       width="320"
//       height="250"
//       showTitle={false}
//     />
//   </div>
// ));

export default function TutorialContentBlock() {
  return (
    <div className={styles.tutorialContentBlock}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="column">
          <SideNav sideNavTitle="Tutorials" links={videos} />
        </div>
        <div className="column">
          <h1>Video Tutorials</h1>
          <p>
            Click on any of the custom commands in the side-bar to get started.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
