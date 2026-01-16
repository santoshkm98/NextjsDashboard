import React from 'react'
import NetworkGraphs from '../Common/Graphs/NetworkGraphs'
const levelOptions = [ 'Warnings', 'Attacks'];
import { multiCloudGraphs } from '@/constants';
const  ForceGraph = () => {

  return (
    <>
     <div style={{ padding: '1rem', textAlign: 'end' }}>
    
  </div>
     <div style={{ height: '100vh', width: '100%' }}>
      <NetworkGraphs
        elements={multiCloudGraphs} levelOptions={levelOptions}
       
      />
    </div>
    </>
  );
}
  export default ForceGraph
