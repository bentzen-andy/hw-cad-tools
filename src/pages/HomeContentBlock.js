import React from "react";
import styles from "./HomeContentBlock.module.css";
import { Link } from "react-router-dom";

export default function HomeContentBlock() {
  return (
    <div className={styles.homeContentBlock}>
      <h1>Getting Started</h1>
      <p>
        Check out the <Link to="/hw-cad-tools/tutorials">tutorial videos</Link>{" "}
        for step-by-step instructions for each custom command.
      </p>
    </div>
  );
}
