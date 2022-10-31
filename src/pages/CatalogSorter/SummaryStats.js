import React from "react";
import { Card } from "react-bootstrap";

import styles from "./index.module.css";

const SummaryStats = () => {
  return (
    <Card className={styles["card"]}>
      <Card.Title>Summary & Statistics</Card.Title>
      <Card.Body></Card.Body>
    </Card>
  );
};
export default SummaryStats;
