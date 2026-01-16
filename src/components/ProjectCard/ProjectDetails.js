"use client";
import React, { useState } from 'react'
import {Row, Col, Input, Form, DatePicker} from 'antd';
import styles from "../../app/component.module.scss";
import Title from 'antd/es/typography/Title';
import {EditOutlined} from '@ant-design/icons';
import { Plus_Jakarta_Sans } from "next/font/google";
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
const ProjectDetails = () => {

    const [isEditing, setIsEditing] = useState([false, false]);

    const [projectData, setProjectData] = useState({
      projectName: 'Research Project',
      description: 'This project is Reserach Project.',
      startDate: '2024-05-01',
      endDate: '2024-10-01',
    });


  return (
    <>
    <Row align="middle" gutter={30}>
    <Col span={12}>
          <div className={styles.projectCards}>
            <Row>
              <Col span={23}>
                <Title className={jakartaSans.className} level={4}>
                  Project Details
                </Title>
              </Col>
              <Col span={1}>
               
              </Col>
            </Row>
            <div className={styles.displayResults}>
              <Form.Item  label="Project Name" name="projectName" labelAlign="left">
                 
                  <div className={styles.readOnly}>{projectData.projectName}</div>
             
              </Form.Item>

              <Form.Item label="Description" name="description" labelAlign="left">
               
                  <div className={styles.readOnly}>{projectData.description}</div>
               
              </Form.Item>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.projectCards}>
            <Row align="middle">
              <Col span={23}>
                <Title className={jakartaSans.className} level={4}>
                  Project Duration
                </Title>
              </Col>
              <Col span={1}>
              
              </Col>
            </Row>
            <div className={styles.displayResults}>
              <Form.Item label="Start Date" name="startDate" labelAlign="left">
                  <div className={styles.readOnly}>{projectData.startDate}</div>
              </Form.Item>

              <Form.Item label="End Date" name="endDate" labelAlign="left">
                  <div className={styles.readOnly}>{projectData.endDate}</div>
              </Form.Item>
            </div>
          </div>
        </Col>
    </Row>
    </>
  )
}

export default ProjectDetails