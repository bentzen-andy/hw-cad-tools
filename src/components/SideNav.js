import React from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";
import videos from "../data/videos.json";

const titleToURL = (title) => title.toLowerCase().replace(/ /g, "-");

export default function SideNav() {
  return (
    <div className={styles.sideNav}>
      <div className={styles.container}>
        <div className={styles.sideNav__title}>Tutorials</div>

        {videos.map((video) => (
          <Link
            className={styles.link}
            key={video.id}
            to={`/hw-cad-tools/videos/${titleToURL(video.title)}`}
          >
            {video.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
