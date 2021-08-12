import React from "react";
import EmbeddedVideo from "../components/EmbeddedVideo";
import styles from "./TutorialContentBlock.module.css";
import videos from "../data/videos.json";

const videoThumbnailList = videos.map((video) => (
  <div>
    <EmbeddedVideo
      url={`https://www.youtube.com/embed/${video.id}`}
      width="320"
      height="250"
      showTitle={false}
    />
  </div>
));

export default function TutorialContentBlock() {
  return (
    <div className={styles.tutorialContentBlock}>
      <h1>Video Tutorials</h1>
      <p>bla bla bla... </p>
    </div>
  );
}
