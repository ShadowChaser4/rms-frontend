import React from 'react'
import './Report.css'
import Chart from './Chart'

function Report() {

const items =  ['mops',  'cosmetics','food and bevrage']
const itemsdata = [100,200,600]

  return (
    <div className="reportcontainer">
     <span className="bold">
       Here's your daily summary
     </span>
      <div className="chart">
        <Chart items={items} itemsdata={itemsdata}/>
      </div>
     </div>
  )
}

export default Report