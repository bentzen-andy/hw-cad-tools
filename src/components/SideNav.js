import React from "react";
import styles from "./SideNav.module.css";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className={styles.sideNav}>
      <div className={styles.container}>
        <div className={styles.sideNav__title}>Tutorials</div>
        <Link
          className={styles.link}
          to="/hw-cad-tools/videos/hw-combine-mesh"
        >
          Combine Mesh
        </Link>
        <Link
          className={styles.link}
          to="/hw-cad-tools/videos/hw-cut-mesh"
        >
          Cut Mesh
        </Link>
        <Link
          className={styles.link}
          to="/hw-cad-tools/videos/hw-zap-mesh"
        >
          Zap Mesh
        </Link>
        <Link
          className={styles.link}
          to="/hw-cad-tools/videos/hw-bridge-mesh"
        >
          Bridge Mesh
        </Link>
      </div>
    </div>
  );
}
