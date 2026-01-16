import React from 'react'
import Image from 'next/image';
import styles from "../../app/page.module.css";
import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import {Col, Row, Grid} from "antd";
import Title from 'antd/es/typography/Title';
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from '@/components/Header';
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
const help = () => {
  return (
 <>
     <Header/>
   
     <div className={styles.resetMethods}>
      <Row justify="center">
        <Col span={8}>
        <div className={styles.resetBoxes}>
            <Image 
               src="/assets/password-reset.png"
               width={490}
               height={400}
               alt="Password Reset"
            />
            <Title className={jakartaSans.className}  level={4}> Reset Password</Title>
      
        </div>
        </Col>
        <Col span={8}>
        <div className={styles.resetBoxes}>
        <Image 
               src="/assets/Qr-reset.png"
               width={490}
               height={400}
               alt="Qr Reset"
            />
           <Title className={jakartaSans.className}  level={4}> Reset QR Code</Title>
        </div>
        </Col>
      </Row>
     </div>
 
 </>
  )
}

export default help