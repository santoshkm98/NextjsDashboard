import React from 'react'
import CardWrapper from '../Common/CardWrapper';
import HealthMonitoring from '../Common/Graphs/HealthMontioring';
const SystemHealth = () => {
  return (
    <>
       <CardWrapper
        title="System Health"
        subtitle="By Project"
        seeAllHref="/"
      >
       <HealthMonitoring/>
      </CardWrapper>
    </>
  )
}

export default SystemHealth