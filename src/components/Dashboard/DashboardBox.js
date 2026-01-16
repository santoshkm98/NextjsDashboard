import React from 'react'
import {Row, Col} from 'antd'
import { newAnalysis } from '@/constants'
import ContainerBox from '../Common/ContainerBox'
const DashboardBox = () => {
  return (
   <>
   <Row gutter={[16, 16]}>
    {newAnalysis.map((item) => (
         <Col key={item.key} flex="1">
        <ContainerBox label={item.label} value={item.value} />
       </Col>
    ))}
   </Row>
   </>
  )
}

export default DashboardBox