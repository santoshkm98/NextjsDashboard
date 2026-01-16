'use client';
import React from 'react';
import { Table, Flex, Tooltip, Dropdown, Menu } from 'antd';
import styles from '../../app/component.module.scss'
import Title from 'antd/es/typography/Title';
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from 'next/image';
import * as XLSX from 'xlsx';

const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });



const ReportTable = ({ title, columns, data }) => {
  const exportToExcel = (data) => {
    if (!data.length) return;
    const keys = Object.keys(data[0]);
    const keyToExclude = keys[0];
    const filteredData = data.map(({ [keyToExclude]: _, ...rest }) => rest);
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'table_data.xlsx');
  };
const enhancedColumns = Array.isArray(columns)
  ? columns.map((col) => {
      const hasRender = !!col.render;
      return {
        ...col,
        ellipsis: col.ellipsis ?? true,
        width: col.width ?? 200,
        render: hasRender
          ? col.render
          : (text) => (
              <Tooltip placement="topLeft" title={text}>
                {text}
              </Tooltip>
            ),
      };
    })
  : [];

  const menu = (
    <Menu
      className="Table-dropdown"
      items={[
        {
          key: '1',
          label: 'Export to Excel',
          onClick: () => exportToExcel(data),
        },
       
      ]}
    />
  );
  return (
    <>
    <div className={styles.tableContainer}>
      <Flex justify="space-between" align="center" style={{ marginBottom: 16 }}>
        <Title className={jakartaSans.className} level={3}>{title}</Title>
        <Flex gap={18}>
      <Dropdown
  menu={{
    items: [
      {
        key: '1',
        label: 'Export to Excel',
        onClick: () => exportToExcel(data),
      },
      {
        key: '2',
        label: 'Export to CSV',
        onClick: () => exportToExcel(data),
      },
      {
        key: '3',
        label: 'Export to PDF',
        onClick: () => exportToExcel(data),
      },
    ],
  }}
  trigger={['click']}
  dropdownRender={(menuNode) => (
    <div style={{ width: 200 }}>
      {menuNode}
    </div>
  )}
>
  <Image
    src="/assets/Icons/DownloadIcon.svg"
    alt="Download Icon"
    width={24}
    height={24}
    style={{ cursor: 'pointer', marginBottom: '1rem' }}
  />
</Dropdown>
          <Image src='/assets/Icons/FilterIcon.svg' width={24} height={24} alt="Filter Icon"/>
        </Flex>
      </Flex>
       <div className={styles.scrollContainer}>
      <Table columns={enhancedColumns}
       dataSource={data}
       pagination={data.length > 10 ? { pageSize: 10 } : false}
        rowKey="key" className={styles.tableCustom} scroll={{ x: 1000 }} /></div>
      </div>
    </>
  );
};

export default ReportTable;
