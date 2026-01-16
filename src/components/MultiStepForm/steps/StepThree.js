import React from 'react'
import {Row, Col, Form, Input, DatePicker, Radio} from 'antd';
import styles from '../../../app/page.module.css'
import Title from 'antd/es/typography/Title';
import { Plus_Jakarta_Sans } from "next/font/google";
import FormItem from 'antd/es/form/FormItem';
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
const StepThree = () => {
  return (
<>
<Row gutter={30}>
    <Col span={12}>
     <div className={styles.projectCards} id='security-features'>
      <Title className={jakartaSans.className}  level={4}>Security Requirements</Title>
  <Form.Item label="Autoblock DDOS attack?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Weekly penetration testing?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Monitor user activity?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Folder monitoring?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Unauthorized port scans?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Setup Honey Pots?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
     </div>
    </Col>
    <Col span={12}>
    <div className={styles.projectCards} id='security-features'>
    <Title className={jakartaSans.className}  level={4}>Features Requirements</Title>
    <Form.Item label="Block internet access?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Block clipboard access?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Monitor compliance?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Secret detection in code?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Incident management?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
         <Form.Item label="Phishing simulations?">
           <Radio.Group>
             <Radio value="Yes"> Yes </Radio>
             <Radio value="No"> No </Radio>
           </Radio.Group>
         </Form.Item>
    </div>
    </Col>
 </Row>
</>
  )
}

export default StepThree