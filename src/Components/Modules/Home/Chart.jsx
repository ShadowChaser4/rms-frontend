import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({solditems,soldunits}) 
{
    const data = {
        labels: solditems,
        datasets: [
          {
            label: '# of Sales',
            data:soldunits ,
            backgroundColor: [
              'rgba(139,0,139, 0.5)',
              'rgba(0,255,0, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(255, 102, 255, 0.5)',
              'rgba(112,128,144, 0.5)',
            ],
            borderColor: [
              'rgba(139,0,139, 1)',
              'rgba(0,255,0, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 102, 255, 1)',
              'rgba(112,128,144, 1)',
            ],
            borderWidth: 1,
          },
        ],
}

return (<div className="chart">
    <Pie data = {data}/>
</div>
)
}