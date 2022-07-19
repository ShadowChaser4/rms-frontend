import React from 'react'
import '../../Components.css'
import Greeting from './Greeting/Greeting'
import './Report/Report'
import Report from './Report/Report'
import './Home.css'
import Circle from './Circle/Circle'


function Home() {
  return (
    <div className='contents'>
    <Greeting name = 'Kushal'/>
    <div className="flexbox">
    <div className="">
    <Report/>
    </div>
    <div className="circle">
        <Circle size={30}/>
    </div>
    </div>
    </div>
  )
}

export default Home