import React from "react";
import PenetrationResults from "../Graphs/PenetrationResults";
import CardWrapper from "../Common/CardWrapper";

const Alerts = () => {
  return (
    <>
      <CardWrapper
        title="Vulnerability Testing Reports"
        subtitle="By Project"
        seeAllHref="/reports/vulnerability"
      >
        <PenetrationResults />
      </CardWrapper>
    </>
  );
};

export default Alerts;
