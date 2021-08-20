import React from "react";
import styles from "./DocumentationContentBlock.module.css";
import data from "../data/docs.json";
import { v4 as uuid } from "uuid";

data.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

const rows = data.map((item, i) => {
  return (
    <tr className={i % 2 === 0 ? styles.odd : styles.even} key={item.id}>
      <td key={uuid().toString()}>{item.name}</td>
      <td key={uuid().toString()}>{item.shortcut}</td>
      <td key={uuid().toString()}>
        {item.inputs.map((input) => (
          <div key={input}>{input}</div>
        ))}
      </td>
      <td key={uuid().toString()}>{item.output}</td>
      <td>
        {item.commandUseCases.map((commandUseCase) => (
          <div key={commandUseCase}>{commandUseCase}</div>
        ))}
      </td>
    </tr>
  );
});

export default function DocumentationContentBlock() {
  return (
    <div className={styles.documentationContentBlock}>
      <h1>Documentation</h1>
      <table>
        <thead>
          <tr>
            <th className={styles.commandName}>Command Name</th>
            <th className={styles.shortcut}>Shortcut</th>
            <th className={styles.input}>Input(s)</th>
            <th className={styles.output}>Output / Result</th>
            <th className={styles.commandUseCases}>Use Case(s)</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
