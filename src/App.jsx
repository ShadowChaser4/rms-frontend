import React from "react";
import Sidebar from './Components/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom'
import Products from "./Components/Modules/Products/Products";
import Reports from "./Components/Modules/Reports/Reports";
import Home from "./Components/Modules/Home/Home";
import './App.css'

function App() {
  return (
   <>
    <Sidebar/>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact  path = "/products" element = {<Products/>}/>
    <Route exact path = '/reports' element = {<Reports/>}/>
   </Routes>
   </>
  );
}

export default App;
