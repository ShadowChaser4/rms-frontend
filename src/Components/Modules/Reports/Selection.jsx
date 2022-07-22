import React from 'react'
import {Link} from 'react-router-dom'
import './Selection.css'

function Selection() {
  return (
    <div style={{marginTop:'30px'}}>
    <span className="navigationtext">
    <Link to = 'daily'>
     Daily
   </Link>
    </span>
  
   <span className="navigationtext">
    <Link to ='weekly'>
    Weekly
    </Link>
    </span>

    <span className="navigationtext">
    <Link to = 'monthly'>
    Monthly
    </Link>
    </span>

  
    
  
</div>
  )
}

export default Selection