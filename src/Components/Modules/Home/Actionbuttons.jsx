import React,{useContext,useState} from 'react'
import usercontext from '../../../Contexts/Userdatacontext/Userdatacontext'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Adduser from './Actionmodals/Adduser';
import Inventoryedit from './Actionmodals/Inventoryedit';
import Scanitems from './Actionmodals/Scanitems';
import Setgoals from './Actionmodals/Setgoals';



function Actionbuttons({icon,iconcolor,name,adminreq}) {
    
    const style = {color:iconcolor, backgroundColor:iconcolor}
    const {user} = useContext(usercontext)
    const {admin} = user
  return (
     <>
     
     <div className="actionbuttons">
      <span className='bold' style={{fontSize:'1.3rem',fontWeight:'500'}}>Actions</span>
      <br />
       
       {/* <Actions/> */}
      { admin &&<Adduser/>}
      
      <Scanitems/>

      {admin && <Inventoryedit/>}
      {admin && <Setgoals/>}

      </div>


    
    <div className='actionbutton'  style={style}> 
    <span style={{color:'white'}} className="text">{ name+ '    '} </span>
    <span className='icon'>{icon}</span>
    </div>
     
    <div className='actionbutton' style={style}> 
    <span style={{color:'white'}} className="text">{ name+ '    '} </span>
    <span className='icon'>{icon}</span>
    </div>
    
    <div className='actionbutton' style={style}> 
    <span style={{color:'white'}} className="text">{ name+ '    '} </span>
    <span className='icon'>{icon}</span>
    </div>

         


    </>
  )
}

export default Actionbuttons