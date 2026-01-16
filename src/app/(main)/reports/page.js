import React from 'react';
import ReportView from '@/components/Reports/ReportView'
import Title from 'antd/es/typography/Title'
import styles from '../../../app/page.module.css';
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowLeftOutlined } from '@ant-design/icons';
import ProjectCard from '@/components/ProjectCard';
import {Row, Col} from 'antd';
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

const page = () => {
  return (
    <>
    <Title className={`jakartaFont ${styles.reportsTitle}`} level={1}> <ArrowLeftOutlined /> Research on Diabetes</Title>
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