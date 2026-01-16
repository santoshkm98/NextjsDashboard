import React from 'react'
import NetworkGraphs from '../Common/Graphs/NetworkGraphs'
import { infrastructureGraph } from '@/constants';
const levelOptions = ['Warnings', 'Attacks']; // or ["Level 1", "Mis_Configurations", etc.]
// const initialVisibleLevels = [1, 2];
const InfrastructureGraph = () => {
  return (
  <>
  <div style={{ padding: '1rem', textAlign: 'end' }}>
    
  </div>
  <NetworkGraphs elements={infrastructureGraph}  levelOptions={levelOptions}/>
  </>
  )
}

export default InfrastructureGraph