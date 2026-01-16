"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PenetrationResults = () => {
  const data = {
    labels: ["Critical", "High", "Medium", "Low", "Info"],
    datasets: [
      {
        data: [1,2,2,3,2],
        backgroundColor: ["#F7423D","#F66B6B", "#FF7F00", "#FFB50A", "#8ecae6"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "60%",
    responsive: true, 
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#fff",
          font: {
            size: 14,
            family: "Plus Jakarta Sans, sans-serif",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}`,
        },
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        titleFont: {
          family: "Plus Jakarta Sans, sans-serif",
          size: 14,
        },
        bodyFont: {
          family: "Plus Jakarta Sans, sans-serif",
          size: 14,
        },
        borderColor: "#ccc",
        borderWidth: 1,
      },

      datalabels: {
        display: true,
        color: "#fff",
        font: {
          family: "Plus Jakarta Sans, sans-serif",
          size: 14,
        },
        formatter: (value) => {
          return `${value}`;
        },
        anchor: "center",
        align: "center",
      },
    },
  };

  const centerText = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height } = chart;
      const ctx = chart.ctx;
      ctx.restore();
      const fontSize = 18;
      ctx.font = `${fontSize}px Plus Jakarta Sans`;
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#fff";
      const text = "10";
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2.7;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "273px",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
      }}
    >
   <div style={{ width: "100%", height: "100%" }}>
        <Doughnut data={data} options={options} plugins={[centerText]} />
      </div>
    </div>
  );
};

export default PenetrationResults;
