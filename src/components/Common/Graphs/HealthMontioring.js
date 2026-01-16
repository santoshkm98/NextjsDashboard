'use client';
import React from 'react'
import { Line } from 'react-chartjs-2';
import { Layout, Card, Typography } from 'antd';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'CPU Usage (%)',
        data: [40, 55, 60, 45, 70, 65, 90],
        fill: false,
        borderColor: '#1890ff',
        backgroundColor: '#3f51b5',
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };
  
  
  
const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false, 
      },
    // legend: { position: 'top' },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 140,
      title: {
        display: true,
        text: 'Usage (%)',
        color: '#FEFEFEC7',
      },
      ticks: {
        color: '#FEFEFEC7', 
      },
    },
    x: {
      title: {
        display: false,
        text: 'Day',
        color: '#FEFEFEC7',
      },
      ticks: {
        color: '#FEFEFEC7', 
      },
    },
  },
};
const HealthMonitoring = () => {
  return (
    <>
    <Line data={data} options={options} />
    </>
  )
}

export default HealthMonitoring