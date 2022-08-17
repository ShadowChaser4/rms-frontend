import React , {useContext} from 'react'
import { useEffect } from 'react'
import {Navigate,useNavigate, Outlet, useLocation} from 'react-router-dom'
import Layout from '../Components/Layout'
import LoginContext from '../Contexts/LoginContext js/LoginContext'
import usercontext from '../Contexts/Userdatacontext/Userdatacontext'


 function PrivateRoutes() {

const islogged=  useContext(LoginContext)
const user = useContext(usercontext)
const location = useLocation()
const history = location.pathname
const navigate = useNavigate()

useEffect(()=>{
  


  async function fet()
  {
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
        islogged.changestate(true)
        navigate(history)
      }
      if(res.status === 403)
      {
        console.log('not logged')
      }
    }
    catch(e)
    {
      console.log(e.message)
    }
  }
  fet()
},[])


  return islogged.state? <Layout><Outlet/></Layout> : <Navigate to ='/login'/>
}

export default PrivateRoutes