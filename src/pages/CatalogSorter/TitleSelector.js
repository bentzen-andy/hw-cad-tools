import React from "react";
import { Card } from "react-bootstrap";

import styles from "./index.module.css";

const TitleSelector = () => {
  return (
    <Card className={styles["card"]}>
      <Card.Title>Input Titles & Subtitles</Card.Title>
      <Card.Body></Card.Body>
    </Card>
  );
};
export default TitleSelector;
