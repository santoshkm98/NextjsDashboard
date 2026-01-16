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
const StepFour = () => {
  return (
   <>
   <Row>

    <Col span={6}>
    <div className={styles.pr}>

    </div>
    </Col>
   </Row>
   </>
  )
}

export default StepFour