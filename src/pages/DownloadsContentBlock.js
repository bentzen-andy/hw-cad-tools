import React from "react";
import SideNav from "../components/SideNav";
import styles from "./DownloadsContentBlock.module.css";
import downloads from "../data/lisp-scripts.json";

export default function DownloadsContentBlock() {
  return (
    <div className={styles.downloadsContentBlock}>
      <div className="row">
        <div className="column">
          <SideNav sideNavTitle="Downloads" links={downloads} />
        </div>
        <div className="column">
          <h1>Downloads</h1>
          <p>bla bla bla... </p>
        </div>
      </div>
    </div>
  );
}
