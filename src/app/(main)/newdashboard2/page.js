import React from "react";
import { Row, Col } from "antd";
import DashboardBox from "@/components/Dashboard/DashboardBox";
import EngineerTickets from "@/components/Dashboard/EngineerTickets";
import Alerts from "@/components/Dashboard/Alerts";
import AlertsService from "@/components/Dashboard/AlertsService";
import WeakConfig from "@/components/Dashboard/WeakConfig";
import HealthMonitoring from "@/components/Common/Graphs/HealthMontioring";
import SystemHealth from "@/components/Dashboard/SystemHealth";
const page = () => {
  return (
    <>
      <Row gutter={20}>
        <Col span={16}>
          <DashboardBox />
          <Row gutter={20} align="top" justify="start">
            <Col span={12}>
             <SystemHealth/>
              <AlertsService />
            </Col>
            <Col span={12}>
             <WeakConfig/>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <EngineerTickets />
        </Col>
      </Row>
    </>
  );
};

export default page;
