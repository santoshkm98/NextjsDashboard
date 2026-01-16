'use client';
import React from 'react'
import { Grid, Input } from "antd";
import {Col, Row} from "antd";
import styles from "../../app/page.module.css";
import Image from 'next/image';
import { Typography } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Title from 'antd/es/typography/Title';
import Form from "antd";
import {  Button, Space } from "antd";
import { useState } from 'react';
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from 'next/link';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Login = () => {

  return (
   <>
   <div className={styles.loginContainer}>
    <div className={styles.logoContainer}>
   <Image
      src="/assets/Trustboxx-logo.png"
      width={210}
      height={50}
      alt="Trustboxx Logo"
    />
    </div>
    <div className={styles.loginFlex}>
     <Row className={styles.signinRow}>
     <Col span={12}>
     <Image 
     className={styles.loginImage}
      src="/assets/Login-page-image.png"
      width={500}
      height={500}
      alt="login"
    />
     </Col>
     <Col span={12}>
     <div className={styles.signinOptions}>
     <Title className={jakartaSans.className} level={1}>SIGN IN</Title>
 <Title className={jakartaSans.className}  level={5}>Sigin with email address</Title>
 <div className={styles.inputContainers}>
 <Input size="large" placeholder="E-Mail" />

 <Input.Password placeholder="Password" />

 </div>
 <Link className={`${jakartaSans.className} ${styles.loggintrouble}`}  href="/help">Trouble logging in?</Link>
<div className={`${styles.submitBtnSignin} ${jakartaSans.className}`} >
        <Button size="large" className={`${styles.primaryBtn} ${jakartaSans.className}`} >
      Sign in
        </Button>
   <Typography className={`${styles.submitBtnSignup} ${jakartaSans.className}`}><p>Don't have an account? <Link href="/signup">Sign Up</Link></p></Typography>
        </div>
     </div>
     </Col>
     </Row>
    </div>
   
      </div>
   </>
  )
}

export default Login;