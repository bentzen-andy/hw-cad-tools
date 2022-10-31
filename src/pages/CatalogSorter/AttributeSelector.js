import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import AttributeSelectorTableRow from "./AttributeSelectorTableRow";
import styles from "./index.module.css";

const AttributeSelector = ({
  catalogNumbers,
  lengthDepthFlag,
  setPrimaryAttributes,
  setSecondaryAttributes,
  setNonEssentialAttributes,
  setIncludedAttributes,
}) => {
  // console.log("----catalogNumbers");
  // console.log(catalogNumbers);

  const [catalogDigits, setCatalogDigits] = useState([]);
  useEffect(() => {
    setCatalogDigits(reduceToDigits(catalogNumbers));
  }, [catalogNumbers]);

  function reduceToDigits(catalogNumbers) {
    if (!catalogNumbers || catalogNumbers.length === 0) return [];
    if (lengthDepthFlag) return reduceToDigitsLengthDepth(catalogNumbers);

    const numDigits = catalogNumbers[0].length;
    const dummyArray = Array(numDigits).fill();

    let digits = dummyArray.map((n, i) => [
      ...new Set(catalogNumbers.map((catalogNumber) => catalogNumber[i])),
    ]);
    // console.log("----digits");
    // console.log(digits);

    let result = [];
    let i = 0;
    for (const group of digits) {
      let temp = [];
      for (const digit of group) {
        let tmp = "";
        let j = 0;
        for (const n of dummyArray) {
          if (j === i) tmp += digit;
          else if (digits[j][0] === "-") tmp += "-";
          else tmp += "#";
          j++;
        }

        let regex = /^#*-#*-#*$/g;
        if (!regex.test(tmp)) temp.push(tmp);
      }
      result.push(temp);
      i++;
    }

    // console.log("-***---result");
    // console.log(result);

    return result.flat();
  }

  function reduceToDigitsLengthDepth(catalogNumbers) {
    return [];
  }

  return (
    <Card className={styles["card"]}>
      <Card.Title>Select Attributes</Card.Title>
      <Card.Body>
        <table>
          <thead>
            <tr>
              <th scope="col">Primary</th>
              <th scope="col">Secondary</th>
              <th scope="col">Non Essential</th>
              <th scope="col">Include</th>
            </tr>
          </thead>
          <tbody>
            {catalogDigits.map((digit) => (
              <tr key={digit}>
                <AttributeSelectorTableRow
                  digit={digit}
                  setPrimaryAttributes={setPrimaryAttributes}
                  setSecondaryAttributes={setSecondaryAttributes}
                  setNonEssentialAttributes={setNonEssentialAttributes}
                  setIncludedAttributes={setIncludedAttributes}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};
export default AttributeSelector;
