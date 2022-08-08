import React,{useContext} from 'react'
import usercontext from '../../../Contexts/Userdatacontext/Userdatacontext'


function Actionbuttons({icon,iconcolor,name,adminreq}) {

    const {user} = useContext(usercontext)
    const {admin} = user
  return (
    (admin || !adminreq) && <div className='actionbutton' style={{color:iconcolor, backgroundColor:iconcolor}}> <span style={{color:'white'}} className="text">{ name+ '    '} </span><span className='icon'>{icon}</span></div>
  )
}

export default Actionbuttons