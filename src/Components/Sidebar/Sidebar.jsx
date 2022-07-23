import React, { useContext } from "react";
import {NavLink, Link} from 'react-router-dom'
import './Sidebar.css'
import { Sidebardata } from "./Sidebardata";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginContext from "../../LoginContext js/LoginContext";
export default function Sidebar() 
{
  const activestyle = {
    backgroundColor: 'azure'
  }
  
  const {handleLogout} = useContext(LoginContext)
  
    return (<>
      <div className = 'navbar'>
       <nav className="nav-menu active">
        <ul className="nav-manu-items">
        <li className="nav-item">
          <Link to ='/'>
            <img src="logo.png" className="image" alt="" />
          </Link>
          <hr />
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
           <button className="btn btn-outline-primary bootstrap-btn btn-sm" onClick={handleLogout} ><LogoutIcon/> Logout</button>
          </li>
        </ul>
       </nav>
      </div>
    </>)
}