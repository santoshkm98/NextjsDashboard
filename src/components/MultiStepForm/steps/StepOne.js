import React from 'react'
import {Row, Col, Form, Input, DatePicker} from 'antd';
import styles from '../../../app/page.module.css'
import Title from 'antd/es/typography/Title';
import { Plus_Jakarta_Sans } from "next/font/google";
import FormItem from 'antd/es/form/FormItem';
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
  const { TextArea } = Input;
const StepOne = () => {
  return (
 <>
 <Row>
    <Col span={12}>
     <div className={styles.projectCards}>
      <Title className={jakartaSans.className}  level={4}>Project Details</Title>
  <Form.Item
    label="Project Name"
    name="projectName"
    labelAlign="left"
  >
    <Input placeholder="Project Name" />
  </Form.Item>
  <Form.Item
    label="Description"
    name="description"
    labelAlign="left"
  >
    <Input.TextArea rows={4} placeholder="Description" />
  </Form.Item>
     </div>
    </Col>
    <Col span={12}>
    <div className={styles.projectCards}>
    <Title className={jakartaSans.className}  level={4}>Project Duration</Title>
    <Form.Item    label="DatePicker"
        name="DatePicker"  labelAlign="left">
<DatePicker />
    </Form.Item>
    <Form.Item  label="End Date" name="endDate"  labelAlign="left">
    <DatePicker />
    </Form.Item>
    </div>
    </Col>
 </Row>
 </>
  )
}

export default StepOne