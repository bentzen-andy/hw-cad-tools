import React from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className={styles.sideNav}>
      <div className={styles.container}>
        <div className={styles.sideNav__title}>Tutorials</div>
        <Link to="/hw-cad-tools/videos/hw-combine-mesh">
          Combine Mesh
        </Link>
        <Link to="#">Cut Mesh</Link>
        <Link to="#">Zap Mesh</Link>
        <Link to="#">Bridge Mesh</Link>
      </div>
    </div>
  );
}
