import React, { useContext } from 'react'
import '../../Components.css'
import './Report/Report'
import Report from './Report/Report'
import './Home.css'
import Circle from './Circle/Circle'
import TotalSales from './TotalSales/TotalSales'
import usercontext from '../../../Contexts/Userdatacontext/Userdatacontext'


function Home() {
  const a = useContext(usercontext)
  return (
  <div className='contents'>
    <h5 className='greeting'>
        {(hours < 12)?"Good morning": (hours >= 19)?"Good night":"Good afternoon"}
    </h5> <h4 className='greeting'>
    <strong>{a.user.name}</strong>
    </h4>
    <div className="flexbox">
       <div className="">
           <Report/>
        </div>
        <div className="anothercontainer">
        <div className="circle">
            <Circle size={50}/>
          </div>
          <div className="">
        <TotalSales sales={7000}/>
      </div>
        </div>
      
      </div>
   </div>
  )
}

export default Home