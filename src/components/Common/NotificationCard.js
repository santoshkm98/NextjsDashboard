import React from 'react'
import { Flex, Divider } from 'antd';
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {BellOutlined } from "@ant-design/icons";
import styles from '../../app/component.module.scss';
import { jakartaSans } from '@/utils/font';

const NotificationCard = ({ type, title, description, date, iconColorClass }) => {
  return (
 
<>
<div className={styles.notificationCards}>
<Flex justify="space-between" align="center">
<div>
        <span className={`${jakartaSans.className} ${styles[iconColorClass]}`}>
          <span style={{ marginRight: 6 }}>
            <BellOutlined />
          </span>
          {type}
        </span>
        <Title level={4} className={`${jakartaSans.className} ${styles.notificationTitle}`}>
          {title}
        </Title>
        <Paragraph className={`${jakartaSans.className} ${styles.notificationDescription}`}>
          {description}
        </Paragraph>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Paragraph className={`${jakartaSans.className} ${styles.notificationdate}`}>
          {date}
        </Paragraph>
      </div>
</Flex>
<Divider style={{ borderColor: '#6d6d6d', margin: '8px 0' }} />
</div>
</>

  )
}

export default NotificationCard