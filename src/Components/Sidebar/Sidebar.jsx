import React, { useContext,useState } from "react";
import {NavLink, Link} from 'react-router-dom'
import '../../Styles/Sidebar.css'
import { Sidebardata } from "./Sidebardata";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginContext from "../../Contexts/LoginContext js/LoginContext";
import MenuIcon from '@mui/icons-material/Menu';


export default function Sidebar() 
{
  const {changestate} = useContext(LoginContext)

  const activestyle = {
    backgroundColor: 'rgb(8, 108, 133,0.9)',
    color: 'whitesmoke'
  } 


  //to logout when user clicks the logout button 
  //a post request is made in the exposed api and then the user gets logout

  const handleLogout = async ()=>{

    try{
      let headers = new Headers()
      headers.append("Accept", "application/json")
      headers.append("Content-Type","application/json")
      headers.append("Access-Control-Allow-Credentails", 'true')
      headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
       
      const res = await fetch('http://localhost:5000/api/auth/logout', {
        method:"POST",  
        headers:headers,
        credentials:'include'
      })
  
      if(res.status === 200)
      {
        changestate(false)
      }

     
    }
    catch(e)
    {
      console.error(e)
    }
     
   }

////////managing state for sidebar slide 
  const [sidebarState,changesidebarState] = useState(window.innerWidth < 992? false:true)
  const [size, changesize] = useState(window.innerWidth)

  window.addEventListener('resize', ()=>{
    changesize(window.innerWidth)
    changesidebarState(window.innerWidth< 992?false:true)
  })
  


  function onSidebarclick()
  {
      changesidebarState(!sidebarState)
  }


    return (<>
      <div  className = 'navbar'>
      <div  onClick = {onSidebarclick} className="menu-bar" style={{marginLeft:sidebarState?'200px':null}}>
        <span className="densityicon"><MenuIcon/></span>
      </div>
       <nav className={sidebarState? "nav-menu active": 'nav-menu'}>
        <ul className="nav-menu-items">
        <li className="nav-item" style={{listStyle:'none'}}>
          <Link onClick = {size <992?onSidebarclick:null}   to ='/app/home'>
            <img src="logo.png" className="image" alt="" />
          </Link>
          <hr style={{marginLeft:'0px', width:'100%'}}/>
        </li>

          {Sidebardata.map((item,index)=>{
           return ( 
            <div  key={index}>
            <li id = {index} className = {item.cName}>
              <NavLink onClick = {size <992?onSidebarclick:null}  to = {item.path}
              style={
                ({isActive})=>{
                   return isActive? activestyle : null;
                }
              }
              >
                <span className="icon">{item.icon}</span>
                <span className="span">{item.title}</span>
              </NavLink>
            </li>
            <hr />
            </div>
            )
          })}

          
          <li className="nav-text" style={{color:'rgb(64, 64, 64)'}}>
           <button className="btn bootstrap-btn btn-sm" onClick={handleLogout} ><LogoutIcon/> Logout</button>
          </li>
        </ul>
       </nav>
      </div>
    </>)
}