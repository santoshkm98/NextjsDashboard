'use client';
import React from 'react'
import { Card, Typography, Space, Flex } from 'antd';
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Link from 'next/link';
import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "../../app/component.module.scss"
    const jakartaSans = Plus_Jakarta_Sans({
      subsets: ["latin"],
      weight: ["400", "700"],
    });
const BoxWrapper = ({children}) => {
  return (
    <>
     <Card

      style={{
        color: '#fff',
        borderColor: '#6b6b6b',
        borderRadius: 12,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    
    >
      <Space direction="vertical" style={{ width: '100%' }}>

        <div>{children}</div>
      </Space>
    </Card>
    </>
  )
}

export default BoxWrapper