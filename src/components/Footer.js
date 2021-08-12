import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.footer}>
      <Link to="/hw-cad-tools/">home</Link>
      <Link to="/hw-cad-tools/tutorials">tutorials</Link>
      <Link to="/hw-cad-tools/downloads">downloads</Link>
      <Link to="/hw-cad-tools/about">about</Link>
    </div>
  );
}
