"use client";
import React from "react";
import NotificationCard from "../Common/NotificationCard";
import { notifications } from "@/constants";
import CardWrapper from "../Common/CardWrapper";

const Inventory = () => {
  return (
    <>
      <CardWrapper
        title="Alerts"
        subtitle="By Target Type"
     
      >
        {notifications.map(({ key, ...rest }) => (
          <NotificationCard key={key} {...rest} />
        ))}
      </CardWrapper>
    </>
  );
};

export default Inventory;
