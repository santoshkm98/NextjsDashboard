import React from 'react'
import {Row, Col, Form, Input, Select, DatePicker, Radio} from 'antd';
import styles from '../../../app/page.module.css'
import Title from 'antd/es/typography/Title';
import { Plus_Jakarta_Sans } from "next/font/google";
import FormItem from 'antd/es/form/FormItem';
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
  const { TextArea } = Input;
const StepTwo = () => {
  return (
  <>
  <Row gutter={30}>
    <Col span={12}>
     <div className={styles.projectCards}>
      <Title className={jakartaSans.className}  level={4}>Infrastructure Requirements</Title>
      <Form.Item label="Platform">
          <Radio.Group>
            <Radio value="Windows"> Windows </Radio>
            <Radio value="Linux"> Linux </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Core Requirements">
          <Select>
            <Select.Option value="12">12</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="RAM Requirements">
          <Select>
            <Select.Option value="demo">Custom</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="RAM">
 <Input size="large" placeholder="32 GB" />
 </Form.Item>
        <Form.Item label="Storage Requirements">
          <Select>
            <Select.Option value="demo">240 TB</Select.Option>
          </Select>
        </Form.Item>
     </div>
    </Col>
    <Col span={12}>
    <div className={styles.projectCards}>
    <Title className={jakartaSans.className}  level={4}>GPU Requirements</Title>
    <Form.Item label="GPU Requirements">
          <Select>
            <Select.Option value="demo">16 GB GDDR6 @ 320 GBps</Select.Option>
          </Select>
        </Form.Item>
  
    </div>
    <div className={styles.projectCards}>
    <Title className={jakartaSans.className}  level={4}>Backup Requirements</Title>
    <Form.Item label="Backup Requirements">
    <Radio.Group>
            <Radio value="Yes"> Yes </Radio>
            <Radio value="No"> No </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Retention(in days)">
          <Select>
            <Select.Option value="demo">30 Days</Select.Option>
          </Select>
        </Form.Item>
    </div>
    </Col>
    <Col span={24}>
    <div className={styles.projectCards}>
    <Title className={jakartaSans.className}  level={4}>Location</Title>
        <Form.Item label="Location">
          <Select>
            <Select.Option value="demo">Mumbai</Select.Option>
          </Select>
        </Form.Item>
    </div>
    </Col>
 </Row>
  </>
  )
}

export default StepTwo