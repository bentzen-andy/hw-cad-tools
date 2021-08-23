import React from "react";
import styles from "./EmbeddedVideo.module.css";

// helper function for title of video on the page
const titleCase = (str) => {
  return str
    .split(" ")
    .map(function (word) {
      return word.length <= 2 || isPreposition(word)
        ? word
        : word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

const isPreposition = (word) => {
  const prepositions = [
    "the",
    "and",
    "but",
    "aboard",
    "about",
    "above",
    "across",
    "after",
    "against",
    "along",
    "amid",
    "among",
    "around",
    "as",
    "at",
    "before",
    "behind",
    "below",
    "beneath",
    "beside",
    "between",
    "beyond",
    "but",
    "by",
    "concerning",
    "considering",
    "despite",
    "down",
    "during",
    "except",
    "following",
    "for",
    "from",
    "in",
    "inside",
    "into",
    "like",
    "minus",
    "near",
    "next",
    "of",
    "off",
    "on",
    "onto",
    "opposite",
    "out",
    "outside",
    "over",
    "past",
    "per",
    "plus",
    "regarding",
    "round",
    "since",
    "than",
    "through",
    "till",
    "to",
    "toward",
    "under",
    "underneath",
    "unlike",
    "until",
    "up",
    "upon",
    "versus",
    "via",
    "with",
    "within",
    "without",
  ];
  return prepositions.includes(word);
};

const getVideoName = () => {
  let videoName = window.location.href
    .split("/")
    .pop()
    .split("-")
    // .slice(1)
    .join(" ");
  videoName = titleCase(videoName).replace(/3d/g, "3D");
  videoName = videoName.replace(/hw /g, "HW ");
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
