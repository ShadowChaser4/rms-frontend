import React, { useContext } from "react";
import {NavLink, Link} from 'react-router-dom'
import './Sidebar.css'
import { Sidebardata } from "./Sidebardata";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginContext from "../../Contexts/LoginContext js/LoginContext";


export default function Sidebar() 
{
  const {changestate} = useContext(LoginContext)

  const activestyle = {
    backgroundColor: 'rgb(8, 108, 133)',
    color: 'whitesmoke'
  } 

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


    return (<>
      <div className = 'navbar'>
       <nav className="nav-menu active">
        <ul className="nav-manu-items">
        <li className="nav-item" style={{listStyle:'none'}}>
          <Link to ='/app/home'>
            <img src="logo.png" className="image" alt="" />
          </Link>
          <hr style={{marginLeft:'0px', width:'100%'}}/>
        </li>
          {Sidebardata.map((item,index)=>{
           return ( 
            <div  key={index}>
            <li id = {index} className = {item.cName}>
              <NavLink to = {item.path}
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