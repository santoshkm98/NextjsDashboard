import React from 'react'
import { Row, Col, Input, Form, Button } from 'antd';
import styles from "../../app/page.module.css";
import Title from 'antd/es/typography/Title';
import { Plus_Jakarta_Sans } from "next/font/google";
import FormItem from 'antd/es/form/FormItem';
import Header from '@/components/Header';

const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
const resetpassword = () => {
  return (
 <>
 <Header/>
 <div className={styles.resetMethodEmail}>
 <Row justify="center"  align="middle"
      style={{ height: '65vh' }}>
      <Col span={8} >
        <div className={styles.resetValues}>
            <Form>
               
         <Title className={jakartaSans.className}  level={4}>Reset Password</Title>
         <FormItem>
         <Input size="large" placeholder="E-Mail" />
         </FormItem>
         <FormItem className={styles.adjacentButtons}>
         <Button htmlType="button" size="small" style={{ margin: '0 8px' }} className={`${styles.secondaryBtn} ${jakartaSans.className}`} >
            Cancel
          </Button>
          <Button htmlType="submit" size="small" className={`${styles.primaryBtn} ${jakartaSans.className}`}>
            Send Reset Mail
          </Button>
         
        </FormItem>
         </Form>
        </div>
      </Col>
      </Row>
 </div>
 </>
  )
}

export default resetpassword