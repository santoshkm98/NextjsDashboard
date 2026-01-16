"use client";
import React, { useState } from "react";
import styles from "../../app/component.module.scss"
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AlertRules = () => {
  
  const allData = {
    7: {
      labels: ["25", "26", "27", "28", "29", "30", "31"], 
      datasets: [
        {
          label: "Not Resolved",
          data: [13, 15, 16, 18, 16, 11, 7],
          borderColor: "red",
          backgroundColor: "red",
          fill: false,
        },
        {
          label: "Resolved",
          data: [11, 14, 11, 10, 8, 5, 3],
          borderColor: "green",
          backgroundColor: "green",
          fill: false,
        },
      ],
    },
    14: {
      labels: Array.from({ length: 14 }, (_, i) => (18 + i).toString()), 
      datasets: [
        {
          label: "Not Resolved",
          data: [20, 18, 22, 21, 17, 19, 20, 13, 15, 16, 18, 19, 21, 23],
          borderColor: "red",
          backgroundColor: "red",
          fill: false,
        },
        {
          label: "Resolved",
          data: [8, 10, 9, 11, 12, 14, 15, 11, 14, 11, 10, 8, 5, 3],
          borderColor: "green",
          backgroundColor: "green",
          fill: false,
        },
      ],
    },
    31: {
      labels:  Array.from({ length: 31 }, (_, i) => (i + 1).toString()), 
      datasets: [
        {
          label: "Not Resolved",
          data: [
            25, 23, 22, 20, 19, 21, 24, 22, 20, 19, 18, 17, 20, 22, 23, 21, 19,
            20, 18, 22, 21, 17, 19, 20, 13, 15, 16, 18, 19, 21, 23
          ],
          borderColor: "red",
          backgroundColor: "red",
          fill: false,
        },
        {
          label: "Resolved",
          data: [
            6, 7, 8, 9, 10, 12, 11, 10, 12, 13, 14, 13, 12, 11, 10, 9, 8,
            8, 10, 9, 11, 12, 14, 15, 11, 14, 11, 10, 8, 5, 3
          ],
          borderColor: "green",
          backgroundColor: "green",
          fill: false,
        },
      ],
    }
  };
  
  const [selectedRange, setSelectedRange] = useState(7);
  const chartData = allData[selectedRange];

  return (
    <div>
      <div className={styles.toggleGroup}>
        <button
          onClick={() => setSelectedRange(7)}
          className={`${styles.toggleButton} ${selectedRange === 7 ? styles.active : ''}`}
        >
          7 Days
        </button>
        <button
          onClick={() => setSelectedRange(14)}
          className={`${styles.toggleButton} ${selectedRange === 14 ? styles.active : ''}`}
        >
          14 Days
        </button>
        <button
          onClick={() => setSelectedRange(31)}
          className={`${styles.toggleButton} ${selectedRange === 31 ? styles.active : ''}`}
        >
          31 Days
        </button>
      </div>
      <div style={{ width: '100%', height: '218px' }}>
      <Line
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
           
            legend: {
              position: "bottom",
              labels: {
                boxWidth: 20,  
                padding: 15,   
                usePointStyle: true,  
                backgroundColor: (context) => {
                  return context.datasetIndex === 0 ? "red" : "green"; 
                },
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Days",
              },
            },
            y: {
              title: {
                display: true,
                text: "Values",
              },
            },
          },
        }}
      />
      </div>
    </div>
  );
};

export default AlertRules;
