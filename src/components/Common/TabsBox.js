'use client';
import React from 'react';
import { Tabs } from 'antd';
import styles from '../../app/component.module.scss';
import { selectOptions } from '@/constants';
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const TabsBox = ({ selectedType, setSelectedType }) => {
  const items = selectOptions.map(option => ({
    label: option.label,
    key: option.value,
  }));

  return (
    <div className={`${jakartaSans.className} ${styles.tabsBoxContainer}`}>
      <Tabs
        defaultActiveKey={selectedType}
        activeKey={selectedType}
        onChange={key => setSelectedType(key)}
        items={items}
        className="custom-tabs"
      />
    </div>
  );
};

export default TabsBox;
