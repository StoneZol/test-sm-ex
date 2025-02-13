import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => index),
    datasets: [
      {
        label: 'Speed', 
        data: data.map((item) => item.speed), 
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: false,
      },
      {
        label: 'Fuel',
        data: data.map((item) => item.fuel1),
        borderColor: 'rgba(255,99,132,1)', 
        backgroundColor: 'rgba(255,99,132,0.2)',
        fill: false,
        hidden: true
      },
      {
        label: 'Voltage', 
        data: data.map((item) => item.voltage),
        borderColor: 'rgb(99, 122, 255)',
        backgroundColor: 'rgb(99, 122, 255, 0.2)',
        fill: false,
        hidden: true
      },
    ],
  };

  const options = {
    responsive: true,
    animation: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <Line data={chartData} options={options}/>
    </div>
  );
};

export default Graph;
