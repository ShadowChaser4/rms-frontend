import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';



export function Barchart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Revenue comparision',
          },
        },
      };
      
      const labels = ['Yestarday', 'Today'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Sales',
            data: [200,300],
            borderColor: 'rgb(255,8,8)',
            backgroundColor: 'rgba(255,8,8, 0.6)',
          },
          {
            label: 'Sold unit',
            data: [300,600],
            borderColor: 'rgb(8,255, 8)',
            backgroundColor: 'rgb(8,255, 8,0.6)',
          },
        ],
      };
  return <Bar options={options} data={data} />;
}
