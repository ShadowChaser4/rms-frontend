import React from 'react'

function Progressbar({percent}) {
  return (
    <div className="progress">
    <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{width:`${percent}`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  )
}

export default Progressbar