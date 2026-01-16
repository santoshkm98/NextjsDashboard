'use client';
import { useState } from 'react';
import { Tabs } from 'antd';
import dynamic from 'next/dynamic';
import InfrastructureGraph from '../Graphs/InfrastructureGraph';

const RadialTreeChart = dynamic(() => import('../Graphs/RadialGraphs'));
const ForceGraph = dynamic(() => import('../Graphs/UserConfigurationRules'));
const MultiCloud = dynamic(() => import('../Graphs/MultiCloud'));
const { TabPane } = Tabs;

const TabButton = () => {
      const [activeKey, setActiveKey] = useState('1');
      const items = [
        {
          key: '1',
          label: 'Infrastructure',
          children: <InfrastructureGraph/>,
        },
        {
            key: '2',
            label: 'User Configuration',
            children: <ForceGraph />,
          },
        {
          key: '3',
          label: 'Multi Cloud',
          children: <MultiCloud />,
        },
      
      ];
  return (
   <>
   
   <div className="p-6">
      <Tabs activeKey={activeKey} onChange={setActiveKey} items={items} />
    </div>
   </>
  )
}

export default TabButton