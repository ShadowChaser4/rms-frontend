import React from 'react'
import './Circle.css'
function Circle({size}) {
  return (
    <div className='circlecontainer'>
      <div className="boldit">Inventory filled:</div>
     <div className={`c100 p${size} center`}>
      <span>{size}%</span>
      <div className="slice"><div className="bar"></div><div className="fill"></div></div>
      </div>
    </div>
  )
}

export default Circle