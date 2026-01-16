'use client';
import React, { useState } from 'react';
import { Steps, Button, Form, Input } from 'antd';
import { formSteps } from './formSteps';
import styles from '../../app/page.module.css';
import { Plus_Jakarta_Sans } from "next/font/google";
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
const MultiStepForm = () => {
    const [current, setCurrent] = useState(0);
    const CurrentComponent = formSteps[current].Component;
  
    const next = () => setCurrent(current + 1);
    const prev = () => setCurrent(current - 1);
  
    return (
        <>
      <div >
        <Steps current={current} items={formSteps.map(({ title, icon }) => ({ title, icon }))} />
        <div className={styles.formComponent} >
                  <Form className={styles.formMain}   layout="horizontal"
                    labelCol={{ flex: '230px' }} 
                    wrapperCol={{ flex: 1 }}>
          <CurrentComponent />
          </Form>
        </div>
        <div
  style={{
    marginTop: 24,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}
>
  {/* Previous on the left */}
  {current > 0 ? (
    <Button className={`${styles.secondaryBtn} ${jakartaSans.className}`} onClick={prev}>
      Previous
    </Button>
  ) : (
    <div /> 
  )}


  {current < formSteps.length - 1 ? (
    <Button
      size="small"
      className={`${styles.primaryFilledBtn} ${jakartaSans.className}`}
      onClick={next}
    >
      Next
    </Button>
  ) : (
    <Button type="primary" onClick={() => alert('Form submitted!')}>
      Submit
    </Button>
  )}
</div>

      </div>
      </>
    );
  };
export default MultiStepForm