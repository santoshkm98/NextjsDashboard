'use client';
import React from 'react';
import { Form } from 'antd';
import CustomTabs from '@/components/ProjectCard/CustomTabs';
import ProjectDetails from '@/components/ProjectCard/ProjectDetails';
import styles from '../../../../app/page.module.css';
import { Plus_Jakarta_Sans } from "next/font/google";
import SystemConfiguration from '@/components/ProjectCard/SystemConfiguration';
import Securityandfeatures from '@/components/ProjectCard/Securityandfeatures';
import ToolsConfiguration from '@/components/ProjectCard/Tools';
import UsersConfiguration from '@/components/ProjectCard/UsersConfiguration';
import RequestConfiguration from '@/components/ProjectCard/RequestConfiguration';

const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });
const DetailedProject = () => {
  const [form] = Form.useForm();

  const tabItems = [
    {
      key: '1',
      label: 'Project Details',
      children: <ProjectDetails form={form} />,
    },
    {
      key: '2',
      label: 'System Configuration',
      children: <SystemConfiguration form={form}/>,
    },
    {
      key: '3',
      label: 'Security and Features',
      children: <Securityandfeatures form={form}/>,
    },
    {
      key: '4',
      label: 'Tools',
      children: <ToolsConfiguration form={form}/>,
    },
    {
      key: '5',
      label: 'User',
      children: <UsersConfiguration form={form}/>,
    },
    {
      key: '6',
      label: 'Request',
      children: <RequestConfiguration form={form}/>,
    },
  ];

  return (
    <div className={styles.projectsLayouts} >
      <CustomTabs
        defaultActiveKey="1"
        tabs={tabItems.map(tab => ({
          ...tab,
          children: <Form  className={`jakartaFont ${styles.defaultentries}`}
          form={form} layout="horizontal"
          labelCol={{ flex: '270px' }} 
          wrapperCol={{ flex: 1 }} initialValues={{
            projectName: 'Research on Diabetes',
            description: 'Study to analyze the effect of diet on blood sugar levels.',
            DatePicker: '23-07-2022',
            endDate: '31-12-2024',
       
          }}>{tab.children}</Form>,
        }))}
      />
    </div>
  );
};

export default DetailedProject;
