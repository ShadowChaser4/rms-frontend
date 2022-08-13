import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';


function Adduser() {
   const  style = {
        backgroundColor:'#ff944d', 
        color: '#ff944d'
    }
  return (
 
    <>
    <div className='actionbutton'  style={style}> 
    <span style={{color:'white'}} className="text"> Add user </span>
    <span className='icon'><PersonAddIcon/></span>
    </div>
    </>
  )
}

export default Adduser