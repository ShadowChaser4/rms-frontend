
import React, { useState } from "react";
import Logincontext from "./LoginContext";


const Loginstate = (props) => {


  const [state,changestate] = useState(false)//////////setting the state for login
  /////setting state for username and password
  const [credentials, changecredentials] = useState({username:'', password:''})


  const loginhandler = (e)=>{
  try{
    e.preventDefault()
    
    let cred = JSON.stringify(credentials)
    let headers = new Headers()
    headers.append("Accept", "application/json")
    headers.append("Content-Type","application/json")
    headers.append("Access-Control-Allow-Credentails", 'true')
    headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
     
    fetch('http://localhost:5000/api/auth/login', {
      method:"POST",  
      headers:headers,
     body:cred, 
     credentials:'include'
    })
    .then(response=>{
      const {status} = response
      if (status === 200)
      {
       changestate(true) //changing state for accessing protected routes
      }
      else
      {
        console.log(response)
      }
    })
  
  }
  catch(error)
  {
    console.log(error)
  }
    
  }


   const handleLogout = ()=>{
    changestate(false)
   }
   
  return (
    <Logincontext.Provider value={{state, handleLogout, credentials,changecredentials, loginhandler}}>{props.children}</Logincontext.Provider>
  );
};

export default Loginstate;