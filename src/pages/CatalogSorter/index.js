import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AttributeSelector from "./AttributeSelector";
import CatalogInput from "./CatalogInput";
import SortOrderSelector from "./SortOrderSelector";
import SummaryStats from "./SummaryStats";
import TitleSelector from "./TitleSelector";

const CatalogSorter = () => {
  const [data, setData] = useState(null);
  const [lengthDepthFlag, setLengthDepthFlag] = useState(false);
  const [catalogNumbers, setCatalogNumbers] = useState([]);
  const [primaryAttributes, setPrimaryAttributes] = useState([]);
  const [secondaryAttributes, setSecondaryAttributes] = useState([]);
  const [nonEssentialAttributes, setNonEssentialAttributes] = useState([]);
  const [includedAttributes, setIncludedAttributes] = useState([]);
  const [sortOrderPrimary, setSortOrderPrimary] = useState([]);
  const [sortOrderSecondary, setSortOrderSecondary] = useState([]);
  const [sortOrderNonEssential, setSortOrderNonEssential] = useState([]);

  // console.log("----data");
  // console.log(data);
  // console.log("----lengthDepthFlag");
  // // console.log(lengthDepthFlag);

  console.log("----primaryAttributes");
  console.log(primaryAttributes);
  console.log("----secondaryAttributes");
  console.log(secondaryAttributes);
  console.log("----nonEssentialAttributes");
  console.log(nonEssentialAttributes);
  console.log("----includedAttributes");
  console.log(includedAttributes);

  console.log("----sortOrderPrimary");
  console.log(sortOrderPrimary);
  console.log("----sortOrderSecondary");
  console.log(sortOrderSecondary);
  console.log("----sortOrderNonEssential");
  console.log(sortOrderNonEssential);

  useEffect(() => {
    if (data) {
      setCatalogNumbers(data.map((row) => row[5]));
    }
  }, [data]);

  return (
    <Container>
      <CatalogInput setData={setData} setLengthDepthFlag={setLengthDepthFlag} />
      <AttributeSelector
        catalogNumbers={catalogNumbers}
        lengthDepthFlag={lengthDepthFlag}
        setPrimaryAttributes={setPrimaryAttributes}
        setSecondaryAttributes={setSecondaryAttributes}
        setNonEssentialAttributes={setNonEssentialAttributes}
        setIncludedAttributes={setIncludedAttributes}
      />
      <SortOrderSelector
        primaryAttributes={primaryAttributes}
        secondaryAttributes={secondaryAttributes}
        nonEssentialAttributes={nonEssentialAttributes}
        includedAttributes={includedAttributes}
        setSortOrderPrimary={setSortOrderPrimary}
        setSortOrderSecondary={setSortOrderSecondary}
        setSortOrderNonEssential={setSortOrderNonEssential}
      />
      <SummaryStats />
      <TitleSelector />
    </Container>
  );
};
export default CatalogSorter;
