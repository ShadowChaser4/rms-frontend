import React from "react";
import {NavLink, Link} from 'react-router-dom'
import './Sidebar.css'
import { Sidebardata } from "./Sidebardata";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() 
{
  const handleClick = (e)=>{
      e.preventDefault()
  }

  const activestyle = {
    backgroundColor: 'azure'
  }
  
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
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
            <hr />
            </div>
            )
          })}
          <li className="nav-text" style={{color:'rgb(64, 64, 64)'}}>
           <button className="btn btn-outline-primary bootstrap-btn btn-sm"><LogoutIcon/> Logout</button>
          </li>
        </ul>
       </nav>
      </div>
     <div className="searchbar">
     <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search Product Here" aria-label="Search"/>
        <button onClick={handleClick} className="btn btn-outline-primary bootstrap-btn" type="submit">Search</button>
      </form>
     </div>
    </>)
}