import ReadinessWrapper from '@/components/Dashboard/ReadinessWrapper'
import React from 'react'
import {Row, Col} from 'antd';
import Title from 'antd/es/typography/Title';
import Tickets from '@/components/Dashboard/jiraTickets';
import { analysis } from '@/constants';
import ConfigurationScores from '@/components/Dashboard/ConfigurationScores';

const page = () => {
  return (
    <>
    <Row gutter={20}>
  <Col span={16}>
        <ReadinessWrapper />
        <ConfigurationScores/>
  </Col>
 <Col span={8}>
<Tickets/>
 </Col>

</Row>
<Row>
     {/* <Col span={16}>
        <ConfigurationScores/>
  </Col> */}
</Row>

    </>
  )
}

export default page