import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./index.module.css";

const AttributeSelectorTableRow = ({
  digit,
  setPrimaryAttributes,
  setSecondaryAttributes,
  setNonEssentialAttributes,
  setIncludedAttributes,
}) => {
  const [radio, setRadio] = useState(null);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (radio) {
      if (radio === "primary") {
        appendDigit(digit, setPrimaryAttributes);
        removeDigit(digit, setSecondaryAttributes);
        removeDigit(digit, setNonEssentialAttributes);
      } else if (radio === "secondary") {
        removeDigit(digit, setPrimaryAttributes);
        appendDigit(digit, setSecondaryAttributes);
        removeDigit(digit, setNonEssentialAttributes);
      } else if (radio === "non-essential") {
        removeDigit(digit, setPrimaryAttributes);
        removeDigit(digit, setSecondaryAttributes);
        appendDigit(digit, setNonEssentialAttributes);
      }
    }
  }, [radio]);

  useEffect(() => {
    if (checked) appendDigit(digit, setIncludedAttributes);
    else {
      removeDigit(digit, setIncludedAttributes);
      setRadio("non-essential");
    }
  }, [checked]);

  function appendDigit(d, fn) {
    // append digit
    fn((current) => {
      let curr = [...current];
      curr.push(d);
      curr = new Set(curr);
      curr = Array.from(curr);
      return curr;
    });
  }

  function removeDigit(d, fn) {
    // remove digit
    fn((current) => {
      let curr = [...current];
      curr = curr.filter((item) => {
        return item !== digit;
      });
      return curr;
    });
  }

  return (
    <>
      <td>
        <Form>
          <div key="primary" className={styles["radio-btn"]}>
            <Form.Check
              type="radio"
              id="primary"
              label=""
              onChange={() => setRadio("primary")}
              checked={radio === "primary"}
            />
          </div>
        </Form>
      </td>
      <td>
        <Form>
          <div key="secondary" className={styles["radio-btn"]}>
            <Form.Check
              type="radio"
              id="secondary"
              label=""
              onChange={() => setRadio("secondary")}
              checked={radio === "secondary"}
            />
          </div>
        </Form>
      </td>
      <td>
        <Form>
          <div key="non-essential" className={styles["radio-btn"]}>
            <Form.Check
              type="radio"
              id="non-essential"
              label=""
              onChange={() => setRadio("non-essential")}
              checked={radio === "non-essential"}
            />
          </div>
        </Form>
      </td>
      <td>
        <Form>
          <div key="include" className={styles["checkbox"]}>
            <Form.Check
              type="checkbox"
              id="include"
              label=""
              onChange={() => setChecked(!checked)}
              checked={checked}
            />
          </div>
        </Form>
      </td>

      <td>
        <pre className={styles["catalog-number"]}>{digit}</pre>
      </td>
    </>
  );
};
export default AttributeSelectorTableRow;
