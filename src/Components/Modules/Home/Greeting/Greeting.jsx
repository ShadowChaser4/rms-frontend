import React from 'react'
import './Greetings.css'

function Greeting(props) {
    const hours = new Date().getHours(); 
  return (
    <div >
    <h5 className='greeting'>
        {(hours < 12)?"Good morning": (hours >= 19)?"Good night":"Good afternoon"}
    </h5> <h4 className='greeting'>
    <strong>{props.name}</strong>
    </h4>
    </div>
  )
}

export default Greeting