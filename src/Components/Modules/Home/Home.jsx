import React, { useContext } from 'react'
import '../../Components.css'
import Greeting from './Greeting/Greeting'
import './Report/Report'
import Report from './Report/Report'
import './Home.css'
import Circle from './Circle/Circle'
import TotalSales from './TotalSales/TotalSales'
import usercontext from '../../../Userdatacontext/Userdatacontext'


function Home() {
  const a = useContext(usercontext)
  return (
  <div className='contents'>
    <Greeting name = {a.user.name}/>
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