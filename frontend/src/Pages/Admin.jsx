import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale, // Register this scale
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Required scales and plugins ko register karein
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Admin = () => {
  const data = {
    labels: ["Users", "Sales", "Revenue", "Feedback"],
    datasets: [
      {
        label: "Performance",
        data: [200, 300, 500, 100],
        backgroundColor: ["#3f51b5", "#f50057", "#4caf50", "#ff9800"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Performance Overview",
      },
    },
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ width: "70%", margin: "auto" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Admin;
