
import React, { useState } from "react";
import Logincontext from "./LoginContext";

const Loginstate = (props) => {
  const [state,changestate] = useState(true)
   const handleclick = ()=>{
    changestate(false)
   }
  return (
    <Logincontext.Provider value={{state, handleclick}}>{props.children}</Logincontext.Provider>
  );
};

export default Loginstate;