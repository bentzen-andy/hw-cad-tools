import React from "react";
import styles from "./Error404.module.css";

export default function Error404() {
  return (
    <div className={styles.error404}>
      <h3>
        404 Error: Cannot find page for URL: {window.location.href}
      </h3>
    </div>
  );
}
