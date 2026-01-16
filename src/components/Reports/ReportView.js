'use client';
import React, {useState,  useMemo} from 'react'
import SelectBox from '../Common/SelectBox'
import ReportTable from '../Common/Table'
import { tableData, tableConfig, dataMap } from '@/constants';
const ReportView = () => {
    const [selectedType, setSelectedType] = useState('Login');
    const sortedData = useMemo(() => {
      return [...(dataMap[selectedType] || [])].sort((a, b) => {
        const parseDate = (item) => {
          if (!item.timestamp) return null;
          const cleaned = item.timestamp.replace('T:', ' ').replace(':', '');
          const date = new Date(cleaned);
          return isNaN(date.getTime()) ? null : date;
        };
    
        const dateA = parseDate(a);
        const dateB = parseDate(b);
    
        if (dateA && dateB) return dateB - dateA;
        if (!dateA && dateB) return 1;
        if (dateA && !dateB) return -1;
        return 0;
      });
    }, [selectedType]);
    
  return (
    <>
    <SelectBox selectedType={selectedType} setSelectedType={setSelectedType}/>
    <ReportTable 
        title={selectedType === 'Login' ? "User Login Activity" : "User Activity"}
        columns={tableConfig[selectedType]}
        data={sortedData} 
      />
    </>
  )
}

export default ReportView