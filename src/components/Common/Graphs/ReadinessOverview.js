"use client";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  Plugin,
} from "chart.js";
import { Flex, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import styles from "../../../app/component.module.scss";
   import { Plus_Jakarta_Sans } from "next/font/google";
    const jakartaSans = Plus_Jakarta_Sans({
      subsets: ["latin"],
      weight: ["400", "700"],
    });

ChartJS.register(ArcElement, Tooltip, Legend);

const CenterTextPlugin = (text, label) => ({
  id: "centerText",
  beforeDraw: (chart) => {
    const { width } = chart;
    const { ctx } = chart;
    const { top, height } = chart.chartArea;
    ctx.save();
    ctx.font = "bold 16px Plus Jakarta Sans";
    ctx.fillStyle = "#fff";
    ctx.textBaseline = "middle";

    const percentX = Math.round((width - ctx.measureText(text).width) / 2);
    const percentY = top + height / 2 - 10; 
    ctx.fillText(text, percentX, percentY);

    // Draw label (optional)
    if (label) {
      ctx.font = "normal 12px 'Plus Jakarta Sans'";
      const labelX = Math.round((width - ctx.measureText(label).width) / 2);
      const labelY = top + height / 2 + 12; 
      ctx.fillText(label, labelX, labelY);
    }

    ctx.restore();
  },
});

const ReadinessOverview = ({ percent = 85, label = "", size = 130, responsive = false,}) => {
  const data = {
    labels: ["Filled", "Remaining"],
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: ["#3f51b5", "#2e2e2e"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    responsive: responsive,
    plugins: {
      legend: {
        display: false,
        tooltip: { enabled: false },
      },
    },
  };

  return (
    <Flex align="center" justify="space-around" style={{marginBottom: '20px',   flexDirection:"column-reverse"}}>
       <div
        style={{
      flexDirection:"column-reverse"
        }}
      >
     <Doughnut data={data} options={options} plugins={[CenterTextPlugin(`${percent}%`, label)]} />
      </div>
      {/* <Typography>
        <Paragraph className={`${jakartaSans.className} ${styles.graphText}`}>{label}</Paragraph>
      </Typography> */}
      {/* <div style={{ marginTop: 5, marginBottom: 10, fontWeight: 500 }}>{label}</div> */}

    </Flex>
  );
};

export default ReadinessOverview;
