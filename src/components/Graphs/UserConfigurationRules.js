"use client";
import React, {useState} from 'react'
import NetworkGraphs from '../Common/Graphs/NetworkGraphs'
import { Produser, Techvitouser } from '@/constants';
const levelOptions = [ 'Warnings', 'Attacks'];
import { Select } from 'antd';
const { Option } = Select;
const UserConfigurationRules = () => {
  const [selectedGraph, setSelectedGraph] = useState('Produser');

    const graphOptions = {
    Produser,
    Techvitouser,
  
  };

  const handleChange = (value) => {
    setSelectedGraph(value);
  };

  return (
<>
  <div  style={{ padding: '1rem', textAlign: 'end' }}>
        <label style={{ marginRight: 8 }}>Select User:</label>
        <Select
          defaultValue="Produser"
          style={{ width: 200 }}
          onChange={handleChange}
        >
          {Object.keys(graphOptions).map((key) => (
            <Option key={key} value={key}>
              {key}
            </Option>
          ))}
        </Select>
      </div>
<div style={{ height: '100vh', width: '100%' }}>
        <NetworkGraphs elements={graphOptions[selectedGraph]} levelOptions={levelOptions} />
      </div>
</>
  )
}
 
export default UserConfigurationRules