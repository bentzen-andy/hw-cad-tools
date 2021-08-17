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
          <h1>Custom Commands</h1>
          <p>
            AutoLisp is a scripting language used to write macros and custom
            commands for AutoCAD. You can view and download any of these custom
            commands by selecting one from the side-bar menu and clicking the
            Download button.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
