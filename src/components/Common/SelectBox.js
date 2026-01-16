'use client';
import React, { useState } from 'react';
import { Select, Flex } from 'antd';
import styles from '../../app/component.module.scss'
import { selectOptions } from '@/constants';
import { Plus_Jakarta_Sans } from "next/font/google";
const { Option } = Select;

const jakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

const SelectBox = ({ selectedType, setSelectedType }) => {

  return (
   <>
  <Flex className={styles.selectBoxContainers}>
   <label className={`${jakartaSans.className} ${styles.labelClass}`}   htmlFor="my-select" style={{ minWidth: '120px', marginRight:"12px" }}>Report Type</label>
   <Select
  className={`${jakartaSans.className} custom-select`}
  style={{ width: 340, height: 45 }}
  placeholder="Select an option"
  value={selectedType}
  onChange={value => setSelectedType(value)}
 popupClassName="custom-dropdown"
>
  {selectOptions.map(option => (
    <Option key={option.value} value={option.value}>
      {option.label}
    </Option>
  ))}
</Select>
    </Flex>
   </>
  )
}

export default SelectBox;