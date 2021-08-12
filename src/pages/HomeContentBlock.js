import React from "react";
import styles from "./HomeContentBlock.module.css";
import { Link } from "react-router-dom";

export default function HomeContentBlock() {
  return (
    <div className={styles.homeContentBlock}>
      <h1>Getting Started</h1>
      <p>
        Get started with HW CAD Tools by downloading the scripts and installing
        the menu files found on the{" "}
        <Link to="/hw-cad-tools/downloads">downloads page</Link>.
      </p>
      <h1>Tutorial Videos</h1>
      <p>
        Check out the <Link to="/hw-cad-tools/videos">tutorial videos</Link> for
        step-by-step instructions for each custom command.
      </p>
    </div>
  );
}
