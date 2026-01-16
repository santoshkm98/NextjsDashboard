// components/ConfigurationScores.jsx
import React from "react";
import { Row, Col } from "antd";
import ContainerBox from "../Common/ContainerBox";
import { analysis } from "@/constants";

const ConfigurationScores = () => {
  return (
    <Row gutter={[16, 16]}>
      {analysis.map((item) => (
        <Col key={item.key} flex="1">
          <ContainerBox label={item.label} value={item.value} />
        </Col>
      ))}
    </Row>
  );
};

export default ConfigurationScores;
