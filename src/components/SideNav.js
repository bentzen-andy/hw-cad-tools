import React from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";
// import videos from "../data/videos.json";

const titleToURL = (title) => title.toLowerCase().replace(/ /g, "-");

export default function SideNav({ sideNavTitle, links }) {
  links.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  links.sort((a, b) => {
    if (a.category < b.category) {
      return -1;
    }
    if (a.category > b.category) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={styles.sideNav}>
      <div className={styles.container}>
        <div className={styles.sideNav__title}>{sideNavTitle}</div>

        {links.map((link, i) => (
          <section key={link.id}>
            {i === 0 && (
              <div className={styles.sideNav__category}>{link.category}</div>
            )}
            {i > 0 && links[i].category !== links[i - 1].category && (
              <div className={styles.sideNav__category}>{link.category}</div>
            )}
            <Link
              className={styles.link}
              to={`/hw-cad-tools/${sideNavTitle.toLowerCase()}/${titleToURL(
                link.title
              )}`}
            >
              {link.title}
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
