import React from "react";
import AlertsRules from "../Graphs/AlertsRules";
import CardWrapper from "../Common/CardWrapper";

const AlertsService = () => {
  return (
    <>
      <CardWrapper
        title=" Open vs Resolved Tickets"
        subtitle="By Project"
       
      >
        <AlertsRules />
      </CardWrapper>
    </>
  );
};

export default AlertsService;
