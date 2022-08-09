import React , {useContext} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import Layout from '../Components/Layout'
import LoginContext from '../Contexts/LoginContext js/LoginContext'


function PrivateRoutes() {

const islogged= useContext(LoginContext)


  return islogged.state? <Layout><Outlet/></Layout> : <Navigate to ='/login'/>
}

export default PrivateRoutes