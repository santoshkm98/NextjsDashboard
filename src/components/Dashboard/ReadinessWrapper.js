import React from 'react'
import CardWrapper from '../Common/CardWrapper'
import ReadinessOverview from '../Common/Graphs/ReadinessOverview'
import { Row, Col, Flex } from "antd";
const ReadinessWrapper = () => {
  return (
  <>
  <CardWrapper
  title="Readiness Overview"
   subtitle="By Project"
seeAllHref="/newdashboard/detailedoverview"
  >
  <Flex justify="space-around" align="center" style={{ flexWrap: 'nowrap' }}>
  <div style={{ flex: 1, maxWidth: 'clamp(200px, 30vw, 350px)'}}>
   <ReadinessOverview percent={85} responsive/>
   </div>
  <Flex vertical align="center" gap={12}>
  <ReadinessOverview percent={30} label="SOC2"    />
  <ReadinessOverview percent={85} label="DPDPA"  />
  <ReadinessOverview percent={100} label="HIPPA"  />
  </Flex>

  </Flex>
  </CardWrapper>
  </>
  )
}

export default ReadinessWrapper