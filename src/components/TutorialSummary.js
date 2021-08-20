import React from "react";
import styles from "./TutorialSummary.module.css";

export default function TutorialSummary({ video }) {
  if (video.summary)
    return <div className={styles.videoSummary}>{video.summary}</div>;
}
