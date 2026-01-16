import React from 'react'
import {Row, Col} from 'antd';
import ProjectCard from '@/components/ProjectCard';
const page = () => {
  return (
    <>
 <Row>
    <Col span={8}>
  <ProjectCard/>
    </Col>
    <Col span={8}>
    grid 2
    </Col>
    <Col span={8}>
    grid 3
    </Col>
 </Row>

    </>
  )
}

export default page