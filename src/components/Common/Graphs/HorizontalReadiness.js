"use client";
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
   import { Plus_Jakarta_Sans } from "next/font/google";
    const jakartaSans = Plus_Jakarta_Sans({
      subsets: ["latin"],
      weight: ["400", "700"],
    });

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import { Bar } from "react-chartjs-2";
import { Card, Typography } from "antd";
import LeftOutlined from "@ant-design/icons";
import Link from 'next/link';
const { Text } = Typography;
const HorizontalReadiness = () => {

    const data = {
        labels: ["SOC2", "HIPPA", "DPDPA", "DSPM", "DORA"],
        datasets: [
          {
          
            data: [80, 55, 70, 90, 60],
            backgroundColor: "#3f51b5",
            borderRadius: 8,
            barThickness: 38,
          },
        ],
      };
    
      const options = {
        indexAxis: "y", 
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
              size:16,
              color:'#FAFAFA',
            },
           
          },
          y: {
            ticks: {
                color:'#FAFAFA',
              font: {
                size: 16,
             
              },
            },
            
          },
        },
      };
  return (
  <>

      <div style={{ marginBottom: 16 }}>
        <Link href="/newdashboard">
          <Text className={jakartaSans.className} style={{ color: '#fafafa', fontSize: 16 }}>
            <LeftOutlined style={{ color: '#fafafa', fontSize: 18, marginRight: 6 }} />
            Back to Dashboard
          </Text>
        </Link>
        </div>
        <div style={{ height: 550 }}>
        <Bar data={data} options={options} />
        </div>
  </>
  )
}

export default HorizontalReadiness