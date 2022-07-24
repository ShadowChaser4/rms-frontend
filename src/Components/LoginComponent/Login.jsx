import React, {useContext} from 'react'
import LoginContext from '../../LoginContext js/LoginContext'
import './Login.css'


function Login()
  {

    const {changecredentials, credentials,loginhandler} = useContext(LoginContext)

    function changehandler (e) 
    {
      const {name, value} = e.target
      changecredentials((prev)=>{
        return {...prev, [name]:value}
      })
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