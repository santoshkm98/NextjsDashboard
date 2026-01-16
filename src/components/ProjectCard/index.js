'use client';
import React from 'react';
import { Card, Avatar, Tooltip } from 'antd';
import { ArrowUpRightOutlined, ArrowUpOutlined} from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import styles from '../../app/page.module.css'

const ProjectCard = () => {
  return (
    <>
  <div className={styles.cardWrapper}>
    <div className={styles.card}>
    <div className={styles.arrowButton}>
        <ArrowUpOutlined  size={16} color="#007BFF" />
      </div>
      <div className={styles.title}>
        Research on <br />Diabeties
      </div>
      {/* <div className={styles.avatarGroup}>
        {avatars.map((src, index) => (
          <img key={index} src={src} alt={`Avatar ${index}`} className={styles.avatar} />
        ))}
      </div> */}
    </div>
    </div>
    </>
  )
}

export default ProjectCard