import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Clients',
        data: [1000, 1500, 1200, 1800, 1700, 2000],
        fill: false,
        borderColor: '#f27f0c',
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Revenue ($)',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
