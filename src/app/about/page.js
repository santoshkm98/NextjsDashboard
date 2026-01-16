// About.js
'use client';

import React, { useEffect, useState } from 'react';
import { Button, Card, Input } from 'antd';
import { darkTheme } from '@/config/theme';  
import styles from "../component.module.scss"
const About = () => {
  const [isClient, setIsClient] = useState(false);  

  useEffect(() => {
    setIsClient(true);  
  }, []);

  if (!isClient) {
    return null;  
  }

  return (
    <div style={{ padding: 24 }}>
      <Card title="Welcome" style={{ width: 300 }}>
        <Input placeholder="Enter your name" />
        <Button type="primary" block style={{ marginTop: 16 }}>
          Submit
        </Button>
        <div
          className={styles.testButton}        
         >
          Consume Design Token
        </div>
      </Card>
    </div>
  );
};

export default About;
