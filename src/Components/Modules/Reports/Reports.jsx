import React from 'react'
import { Route, Routes} from 'react-router-dom'
import '../../../Styles/Components.css'
import Selection from './Selection'


function Daily()
{
  return(
    <div style={{marginLeft:'0px',
    marginTop:'100px'}}>
      Daily
    </div>
  )
}

function Reports() {
  return (
    <div className='contents'>
      <div className="linechartsection">
        <Selection/>
        <Routes>
          <Route path='daily' element={<Daily/>}></Route> 
        </Routes>
      </div>
    </div>
  )
}

export default Reports