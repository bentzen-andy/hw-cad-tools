import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import styles from "./index.module.css";

const SortOrderSelector = ({
  primaryAttributes,
  secondaryAttributes,
  nonEssentialAttributes,
  setSortOrderPrimary,
  setSortOrderSecondary,
  setSortOrderNonEssential,
}) => {
  const [primaryLabels, setPrimaryLabels] = useState(
    Array.from(new Set(primaryAttributes.map((item) => getDigitLabel(item))))
  );
  const [secondaryLabels, setSecondaryLabels] = useState(
    Array.from(new Set(secondaryAttributes.map((item) => getDigitLabel(item))))
  );
  const [nonEssentialLabels, setNonEssentialLabels] = useState(
    Array.from(
      new Set(nonEssentialAttributes.map((item) => getDigitLabel(item)))
    )
  );

  // useEffect(() => {
  //   setSortOrderPrimary(primaryLabels);
  // }, [primaryLabels]);
  // useEffect(() => {
  //   setSortOrderSecondary(secondaryLabels);
  // }, [secondaryLabels]);
  // useEffect(() => {
  //   setSortOrderNonEssential(nonEssentialLabels);
  // }, [nonEssentialLabels]);

  function getDigitLabel(digit) {
    let digitArr = digit.split("-");
    let base2Len = digitArr[1].length;
    let index1, index2;
    for (let i = 0; i < digitArr.length; i++) {
      for (let j = 0; j < digitArr[i].length; j++) {
        if (digitArr[i][j] !== "#") {
          index1 = i;
          index2 = j;
          break;
        }
      }
    }
    if (index1 === 0) return defBase1();
    else if (index1 === 1) return defBase2(base2Len, index2);
    else if (index1 === 2) return defFunctionalOption(index2);

    return null;
  }
  function defBase1() {
    return "base1";
  }
  function defBase2(base2Len, i) {
    if (base2Len === 4) {
      let indexPercent = (i + 1) / base2Len;
      if (indexPercent <= 0.5) {
        return "base2-{1,2}";
      } else {
        return "base2-{3,4})";
      }
    }

    return `base2-{${Math.floor(i + 1)}}`;
  }
  function defFunctionalOption(i) {
    return `func${i + 1}`;
  }

  console.log("----primaryLabels");
  console.log(primaryLabels);
  console.log("----secondaryLabels");
  console.log(secondaryLabels);
  console.log("----nonEssentialLabels");
  console.log(nonEssentialLabels);

  // TODO: create drag and drop options here.
  return (
    <Card className={styles["card"]}>
      <Card.Title>Select Sort Order</Card.Title>
      <Card.Body>
        <h6>Primary Attributes</h6>
        <div>
          {primaryLabels.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
        <h6>Secondary Attributes</h6>
        {secondaryLabels.map((item) => (
          <div key={item}>{item}</div>
        ))}
        <h6>Nonessential Attributes</h6>
        {nonEssentialLabels.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </Card.Body>
    </Card>
  );
};
export default SortOrderSelector;
