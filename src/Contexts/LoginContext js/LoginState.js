
import React, { useState } from "react";
import Logincontext from "./LoginContext";


const Loginstate = (props) => {


  const [state,changestate] = useState(false)
  //////////setting the state for login

  /////setting state for username and password

  return (
    <Logincontext.Provider value={{state,changestate}}>{props.children}</Logincontext.Provider>
  );
};

export default Loginstate;