import React,{useContext,useState} from 'react'
import usercontext from '../../../Contexts/Userdatacontext/Userdatacontext'
import { Modal } from '@mui/material'


function Actionbuttons({icon,iconcolor,name,adminreq}) {

    const style = {color:iconcolor, backgroundColor:iconcolor}
    const {user} = useContext(usercontext)
    const {admin} = user
  return (
    (admin || !adminreq) && <div className='actionbutton' style={style}> 
    <span style={{color:'white'}} className="text">{ name+ '    '} </span>
    <span className='icon'>{icon}</span></div>
  )
}

export default Actionbuttons