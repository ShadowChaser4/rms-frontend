import React from "react"
import { Barchart } from "./Barchart"
import { Piechart } from "./Piechart"

function Daily()
{
  return(
    <div className="flexbox">

    {/* greeting */}
        <div className="greetings">
            <span className=" bold heading" style={{fontSize:'1.3rem'}}>
                Daily Insight
            </span>
        </div>

       {/* charts */}
        <div className="horizontalflex">
           <div className="barchart flexbox">
           <span className="bold heading">
           Revenue and sales comparision
           </span>
           <Barchart/>
           </div>
        </div>
    </div>
  )
}


export default Daily