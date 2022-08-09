import React, { useEffect } from 'react'
import { Route,Link ,Routes, useNavigate} from 'react-router-dom'
import '../../../Styles/Components.css'
import Daily from './Daily'
import Weekly from './Weekly'
import Monthly from './Monthly'
import '../../../Styles/Reports.css'





function Reports() {
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('daily')
  },[])
  return (
    <div className='contents'>
        <div className='navigationcontainer'>
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
        <Routes> 
         <Route path = 'daily' element = {<Daily/>}/>
          <Route path = 'weekly' element = {<Weekly/>}/>
          <Route path = 'monthly' element = {<Monthly/>}/>
        </Routes>
      </div>
    
  )
}

export default Reports