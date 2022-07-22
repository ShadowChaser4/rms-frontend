import React , {useContext} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import LoginContext from '../LoginContext js/LoginContext'


function PrivateRoutes() {

const islogged= useContext(LoginContext)


  return islogged.state? <Outlet/> : <Navigate to ='/login'/>
}

export default PrivateRoutes