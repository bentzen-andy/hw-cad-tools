import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.topnav}>
      <a href="#">home</a>
      <a href="#">videos</a>
      <a href="#">downloads</a>
      <a href="#">about</a>
    </div>
  );
}
