import React from "react";
import styles from "./VideoLandingPage.module.css";

// helper function for title of video on the page
const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

const getVideoName = () => {
  let videoName = window.location.href.split("/").pop();
  videoName = videoName.split("-");
  videoName.shift();
  videoName = videoName.reduce(
    (x, y) => titleCase(x) + " " + titleCase(y)
  );
  return videoName;
};

export default function VideoLandingPage({ url }) {
  return (
    <div className={styles.videoLandingPage}>
      <div className={styles.container}>
        <iframe
          width="840"
          height="470"
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
        <h3>{getVideoName()}</h3>
      </div>
    </div>
  );
}
