import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.topnav}>
      <Link to="/" className={styles.topnav__brand}>
        HW CAD Tools
      </Link>
      <Link to="/tutorials">tutorials</Link>
      {/* <Link to="/downloads">downloads</Link> */}
      <Link to="/docs">docs</Link>
      <Link to="/catalog-sorter">catalog sorter</Link>
    </div>
  );
}
