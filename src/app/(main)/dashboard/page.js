import React from "react";
import { Row, Col } from "antd";
import Alerts from "@/components/Dashboard/Alerts";
import AlertsService from "@/components/Dashboard/AlertsService";
import MajorInsights from "@/components/Dashboard/MajorInsights";
import News from "@/components/Dashboard/News";
import AttackPaths from "@/components/Dashboard/AttackPaths";
import Inventory from "@/components/Dashboard/Inventory";
import Attack from "@/components/Dashboard/Attack";

const page = () => {
  return (
    <>
      <Row gutter={20} wrap style={{ rowGap: 20 }}>
        <Col span={8}>
          <Alerts />
        </Col>

        <Col span={8}>
          <AlertsService />
        </Col>
        <Col span={8}>
          <MajorInsights />
        </Col>
        <Col span={16}>
          <News />
        </Col>
        <Col span={8}>
          <AttackPaths />
        </Col>
        <Col span={16}>
          <Inventory />
        </Col>
        <Col span={8}>
          <Attack />
        </Col>
      </Row>
    </>
  );
};

export default page;
