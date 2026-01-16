'use client';
import React from 'react'
import ReportTable from '../Common/Table'
import { penetrationResultsData, penetrationTableConfig } from '@/constants';
const PenetrationReports = () => {
  return (
  <>
  
  <ReportTable title="Vulnerability Testing Reports" columns={penetrationTableConfig}
          data={penetrationResultsData}  />
  </>
  )
}

export default PenetrationReports