'use client';
import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
import { Plus_Jakarta_Sans } from "next/font/google";
const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
  const CustomTabs = ({ tabs, defaultActiveKey }) => {
    const items = tabs.map(tab => ({
      key: tab.key,
      label: tab.label,
      children: tab.children,
    }));
  
    return <Tabs className={jakartaSans.className} defaultActiveKey={defaultActiveKey} items={items} />;
  };
  


export default CustomTabs;
