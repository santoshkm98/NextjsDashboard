'use client';

import React, { useState } from 'react';
import { Layout, Avatar, Dropdown, Menu, Badge,  } from 'antd';
import {
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  LeftOutlined,
  RightOutlined,
  EditOutlined,
} from '@ant-design/icons';
import SidebarMenu from '@/components/sidebarMenu';
import styles from "../../app/component.module.scss";
import Image from 'next/image';
const { Header, Sider, Content } = Layout;
import { Plus_Jakarta_Sans } from "next/font/google"; 
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});
export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    console.log('Logging out...');
   
  };

  const userMenu = {
    items: [
      {
        key: '1',
        label: 'Profile',
      },
      {
        key: '2',
        label: 'Logout',
      },
    ],
    onClick: ({ key }) => {
      if (key === '2') {
    
      }
    },
  };
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        
      >
        <div style={{ padding: 20, fontWeight: 'bold' }}>
          {collapsed ? (
      <>
        <Image src='/assets/Trustboxx-icon.png'
         width={50}
         height={50}
           alt="Trustboxx Logo"
        />
      </>
    ) : (
      <>
       <Image
            src="/assets/Trustcenter-logo.png"
            width={210}
            height={45}
            alt="Trustcenter Logo"
          />
      </>
    )}
        </div>
        <SidebarMenu collapsed={collapsed} />
      </Sider>

      <Layout>
        <Header style={{ background: '#060606', padding: '0 20px 0px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className={styles.collapsibleContainer} onClick={() => setCollapsed(!collapsed)} style={{ cursor: 'pointer', fontSize: 18 }}>
            {collapsed ? <span style={{ fontSize: '24px', color: '#fff' }}><RightOutlined /></span> : <span style={{ fontSize: '24px', color: '#fff' }}><LeftOutlined /></span>}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <Image width={24} height={24} src='/assets/Icons/EditIcon.svg' alt="Edit Icon"/>
          
            <Badge count={3}>
            <Image width={24} height={24} src='/assets/Icons/NotificationIcon.svg' alt="Edit Icon"/>
            </Badge>

            
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
    <Image src='/assets/Icons/ProfileIcon.svg' alt="Profile" width={28} height={28} className={styles.headerProfileIcon}/>
    <div style={{ marginLeft: '12px', display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontWeight: 500, fontSize:'20px', color:'#fafafa', lineHeight:'normal' }} className={jakartaSans.className}>Matt Chloe</span>
      <span style={{ fontSize: '16px', color: '#ADADAD', lineHeight:'normal' }} className={jakartaSans.className}>Project Manager</span>
    </div>
  </div>
          
          </div>
        </Header>

        <Content style={{  padding: '24px 30px', background: '#060606' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
