import React from "react";
import styles from "./EmbeddedVideo.module.css";

// helper function for title of video on the page
const titleCase = (str) => {
  return str
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

const getVideoName = () => {
  let videoName = window.location.href
    .split("/")
    .pop()
    .split("-")
    .slice(1)
    .join(" ");
  videoName = titleCase(videoName).replace(/3d/g, "3D");
  return videoName;
};

export default function EmbeddedVideo({ url, width, height, showTitle }) {
  return (
    <div className={styles.embeddedVideo}>
      <div className={styles.container}>
        <iframe
          width={width}
          height={height}
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
        <h1>{showTitle && getVideoName()}</h1>
      </div>
    </div>
  );
}
