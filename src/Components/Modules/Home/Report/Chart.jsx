import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);


const colorsArray = [
  'rgba(255, 99, 132, 0.4)',
  'rgba(54, 162, 235, 0.4)',
  'rgba(255, 206, 86, 0.4)'
 ]
function Chart ({itemsdata, items}) {
    const data = {
        labels :items, 
        datasets:[{
          label:'',
           data:itemsdata, 
           backgroundColor:colorsArray ,
           borderColor:[
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
           ], 
           borderWidth : 1
        }]
      }
      
  return (
    <>
        <Pie data={data}/>
    </>
  )
}

export default Chart