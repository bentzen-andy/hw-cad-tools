import React from "react";
import styles from "./SideNav.module.css";

export default function SideNav() {
  return (
    <div className={styles.sideNav}>
      <div className={styles.container}>
        <div className={styles.sideNav__title}>Tutorials</div>
        <a href="#">Combine Mesh</a>
        <a href="#">Cut Mesh</a>
        <a href="#">Zap Mesh</a>
        <a href="#">Bridge Mesh</a>
      </div>
    </div>
  );
}
