import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.footer}>
      <Link to="/">home</Link>
      <Link to="/tutorials">tutorials</Link>
      {/* <Link to="/downloads">downloads</Link> */}
      <Link to="/docs">docs</Link>
    </div>
  );
}
