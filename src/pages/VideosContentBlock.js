import React from "react";
import EmbeddedVideo from "../components/EmbeddedVideo";
import styles from "./VideosContentBlock.module.css";
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
// const videoThumbnailList = videos.map((video) => <div>{video.id}</div>);

export default function VideosContentBlock() {
  return <div className={styles.videosContentBlock}>{videoThumbnailList}</div>;
}
