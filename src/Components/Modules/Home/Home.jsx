import React from 'react'
import '../../Components.css'
import Greeting from './Greeting/Greeting'
import './Report/Report'
import Report from './Report/Report'

function Home() {
  return (
    <div className='contents'>
    <Greeting name = 'Kushal'/>
    <Report/>
    </div>
  )
}

export default Home