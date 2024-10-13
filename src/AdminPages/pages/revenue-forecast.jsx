import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [50,100,82,105,200,159],
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
