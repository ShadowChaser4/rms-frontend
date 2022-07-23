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
      <div style={{margin:'30px 0px 0px 250px'}}>
        <form onSubmit={loginhandler}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" name = "username"  value = {credentials.username} onChange = {changehandler}className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" name = "password" onChange = {changehandler} value={credentials.password}id="floatingPassword" placeholder="Password"/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" style={{margin:'20px'}} type="submit">Sign in</button>
  </form>
      </div>
    )
  }

export default Login