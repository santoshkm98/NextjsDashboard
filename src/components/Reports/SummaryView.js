'use client';
import React, {useState,  useMemo} from 'react'
import SelectBox from '../Common/SelectBox'
import ReportTable from '../Common/Table'
import { tableData, tableConfig, dataMap, selectOptions } from '@/constants';
import TabsBox from '../Common/TabsBox';
const SummaryView = () => {
    const [selectedType, setSelectedType] = useState('Storage');
     const sortedData = useMemo(() => {
       return [...(dataMap[selectedType] || [])]; // no custom timestamp sort needed anymore
     }, [selectedType]);
    const currentTitle = selectOptions.find(opt => opt.value === selectedType)?.label || '';

  return (
    <>
    <TabsBox selectedType={selectedType} setSelectedType={setSelectedType}/>
    <ReportTable 
title={currentTitle}
        columns={tableConfig[selectedType]}
        data={sortedData} 
      />
    </>
  )
}

export default SummaryView