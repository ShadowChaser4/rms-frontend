
import React, { useContext, useState } from "react";
import Logincontext from "./LoginContext";
import {useNavigate} from 'react-router-dom'
import usercontext from "../Userdatacontext/Userdatacontext";


const Loginstate = (props) => {

  const navigate = useNavigate() //setting navigate hook

  const user = useContext(usercontext)///////setting user context


  const [state,changestate] = useState(false)//////////setting the state for login

  /////setting state for username and password
  const [credentials, changecredentials] = useState({username:'', password:''})


  const loginhandler = async (e)=>{
    
  try{
    e.preventDefault()
    
    let cred = JSON.stringify(credentials)
    let headers = new Headers()
    headers.append("Accept", "application/json")
    headers.append("Content-Type","application/json")
    headers.append("Access-Control-Allow-Credentails", 'true')
    headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
     
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method:"POST",  
      headers:headers,
     body:cred, 
     credentials:'include'
    })
    
    const json = await res.json()
    if(res.status === 200 && json.status === 200)
    {
      const {username,admin,name} = json
      user.changeuserstate({username:username,admin:admin,name:name})
      changestate(true)
      navigate('/app/home')
    }
  
  }
  catch(error)
  {
    console.log(error)
  }
    
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


   const islogged = async()=>{
    try {
      let headers = new Headers()
      headers.append("Accept", "application/json")
      headers.append("Content-Type","application/json")
      headers.append("Access-Control-Allow-Credentails", 'true')
      headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
       
      const res = await fetch('http://localhost:5000/api/auth/logged', {
        method:"GET",  
        headers:headers,
       credentials:'include'
      })
  
  
      const json = await res.json() 
        
      if (json.status === 200 && res.status === 200)
      {
        const {username,admin,name} = json
        user.changeuserstate({username:username,admin:admin,name:name})
        changestate(true)
        navigate('/app/home')
      }
    }
    catch(e)
    {
      console.log(e.message)
    }

   }
   
  return (
    <Logincontext.Provider value={{state, handleLogout, credentials,changecredentials, loginhandler,islogged}}>{props.children}</Logincontext.Provider>
  );
};

export default Loginstate;