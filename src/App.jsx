import React from "react";
import Sidebar from './Components/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom'
import Inventory from "./Components/Modules/Inventory/Inventory";
import Reports from "./Components/Modules/Reports/Reports";
import Home from "./Components/Modules/Home/Home";
import './App.css'
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Somestate from "./LoginContext js/LoginState";

function App() {
  function Login()
  {
    return(
      <div style={{margin:'30px 0px 0px 250px'}}>
        Login
      </div>
    )
  }
  return (
   <>
   <Somestate>

   <Sidebar/>
   <Routes>
   <Route path = '/login' element = {<Login/>}/>
   <Route element = {<PrivateRoutes/>}>
        <Route exact path="/" element={<Home/>}/>
        <Route exact  path = "/inventory" element = {<Inventory/>}/>
        <Route exact path = '/reports/*' element = {<Reports/>}/>
   </Route>
   </Routes>
   </Somestate>
   
   </>
  );
}

export default App;
