import React from 'react'
import './Styles.css'
function TotalSales({sales}) {
  return (
    <>
        <div className="totalsalescontainer" style={{textAlign:'center'}}>
            <span style={{ fontSize:'1rem'}}>Total Sales</span>
            <br />
            <span style={{fontSize:'1.7rem'}}>
              {`Rs.${sales}`}
            </span>
        </div>
    </>
  )
}

export default TotalSales