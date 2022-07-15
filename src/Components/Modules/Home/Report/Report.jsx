import React from 'react'
import './Report.css'
import Chart from './Chart'

function Report() {

  
  return (
    <div className="container reportcontainer">
     <span className="bold">
       Here's your daily summary
     </span>
      <div className="chart">
        <Chart/>
      </div>
     </div>
  )
}

export default Report