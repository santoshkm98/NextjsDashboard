'use client';
import React, { useState } from 'react';
import { Button, message, Steps, theme, Input } from 'antd';
import Header from '../Header';
import styles from "../../app/page.module.css";
import { ArrowLeft } from 'react-feather';
import Title from 'antd/es/typography/Title';
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from 'next/image';
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
const StepOneContent = () => {
    return (
      <div className={styles.stepsContainerDivision}>
        <Title className={jakartaSans.className}  level={5}>
          Install Google Authenticator App or Microsoft Authenticator App on your mobile. Go to your Google Authenticator App or Microsoft Authenticator App in your mobile and sign in to your account.
        </Title>
        <Image
          src="/assets/Authenticator-image.png"
          width={280}
          height={300}
          alt="Authenticator"
        />
      </div>
    );
  };

  const StepTwoContent = () => {
    return (
      <div className={styles.stepsContainerDivision}>
        <Title className={jakartaSans.className}  level={5}>
        Scan this QR code with your verification app
        </Title>
        <Image
          src="/assets/scanner-image.png"
          width={280}
          height={300}
          alt="Authenticator"
        />
      </div>
    );
  };
  const StepThreeContent = () => {
    return (
      <div className={styles.stepsContainerDivision}>
        <Title className={jakartaSans.className}  level={5}>
        Enter the 6-digit code generated in your mobile.
        </Title>
        <Input.OTP mask="🔒" />
      </div>
    );
  };

const steps = [
    {
      title: 'First',
      content: <StepOneContent/>,
 
    },
    {
      title: 'Second',
      content: <StepTwoContent/>,
    },
    {
      title: 'Last',
      content: <StepThreeContent/>,
    },
  ];
const ResetQrPage = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
      setCurrent(current + 1);
    };
    const prev = () => {
      setCurrent(current - 1);
    };
    const items = steps.map(item => ({ key: item.title, title: item.title }));
    const contentStyle = {
      lineHeight: '120px',
      textAlign: 'center',
    //   color: token.colorTextTertiary,
    //   backgroundColor: token.colorFillAlter,
    //   borderRadius: token.borderRadiusLG,
    //   border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    };
  return (
   <>
   <Header/>

   <div className={styles.qrConfigurationSteps}>
     <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div className={styles.resetQrButtons}>
      {current > 0 && (
          <Button className={`${styles.secondaryBtn} ${jakartaSans.className}`} style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button size="small" className={`${styles.primaryBtn} ${jakartaSans.className}`} onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button className={`${styles.primaryBtn} ${jakartaSans.className}`} >
            Done
          </Button>
        )}
      
      </div>
      </div>
   </>
  )
}


export default ResetQrPage