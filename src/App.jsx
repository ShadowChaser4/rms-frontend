import React from "react";
import Sidebar from './Components/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom'
import Inventory from "./Components/Modules/Inventory/Inventory";
import Reports from "./Components/Modules/Reports/Reports";
import Home from "./Components/Modules/Home/Home";
import './App.css'
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Somestate from "./Contexts/LoginContext js/LoginState";
import Login from "./Components/LoginComponent/Login";
import Userdatastate from "./Contexts/Userdatacontext/Userdatastate";

function App() {
  
  return (
   <>
    <Userdatastate>
   <Somestate>

   <Sidebar/>
   <Routes>
   <Route path = '/login' element = {<Login/>}/>
   <Route element = {<PrivateRoutes/>}>
        <Route exact path="/app/home" element={<Home/>}/>
        <Route exact  path = "/app/inventory" element = {<Inventory/>}/>
        <Route exact path = '/app/reports/*' element = {<Reports/>}/>
   </Route>
   </Routes>

   </Somestate>
   </Userdatastate>
   
   </>
  );
}

export default App;
