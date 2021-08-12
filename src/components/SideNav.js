import React from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";
// import videos from "../data/videos.json";

const titleToURL = (title) => title.toLowerCase().replace(/ /g, "-");

export default function SideNav({ sideNavTitle, links }) {
  console.log(links);
  return (
    <div className={styles.sideNav}>
      <div className={styles.container}>
        <div className={styles.sideNav__title}>{sideNavTitle}</div>

        {links.map((link) => (
          <Link
            className={styles.link}
            key={link.id}
            to={`/hw-cad-tools/${sideNavTitle.toLowerCase()}/${titleToURL(
              link.title
            )}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
