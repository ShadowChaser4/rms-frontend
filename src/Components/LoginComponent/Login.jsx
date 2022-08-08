import React, {useContext, useEffect, useState} from 'react'
import '../../Styles/Login.css'
import usercontext from '../../Contexts/Userdatacontext/Userdatacontext'
import islogged from './islogged'
import { useNavigate } from 'react-router-dom'
import LoginContext from '../../Contexts/LoginContext js/LoginContext'
import logit from './logit'

function Login()
  {

   const [credentials, changecredentials] = useState({username:'', password:''})
   const user = useContext(usercontext)
   const navigate = useNavigate()
   const {changestate} = useContext(LoginContext)

    useEffect(()=>{
      islogged(user,navigate,changestate)
    },[])

    function changehandler (e) 
    {
      const {name, value} = e.target
      changecredentials((prev)=>{
        return {...prev, [name]:value}
      })
    }


    async function loginhandler(e)
    {
      try{
        e.preventDefault()

        logit(user,changestate,navigate,credentials)
   
      }
      catch(error)
      {
        console.log(error)
      }
        
    }

    return(
      <>
        <div className="container formcontainer"  style={{marginLeft:'400px', marginTop:'100px', textAlign:'center'}}>
         <form action="" onSubmit = {loginhandler}className="myform">
          <label htmlFor="email" id = 'email' >Email:
          <input type="email" name='username' className='email' placeholder = 'Enter your email here'onChange={changehandler}  value = {credentials.username}/>
          </label>
          <label htmlFor="password" id="password" >Password:
          <input type="password" name="password" className='password' placeholder='Enter your password here' onChange={changehandler} value = {credentials.password} />
          </label>
          <button type="submit" style={{backgroundColor:'white',color:'black', borderRadius:'0.7rem', display:'block', margin:'auto'}}>Submit</button>
         </form>
        </div>
      </>
    )
  }

export default Login