import React from 'react'
import {Link} from 'react-router-dom'
import './Selection.css'

function Selection() {
  return (
    <div>
  <Link to = 'daily'>
     Daily
   </Link>

    <Link to ='weekly'>
    Weekly
    </Link>

    <Link to = 'monthly'>
    Monthly
    </Link>
    
  
</div>
  )
}

export default Selection