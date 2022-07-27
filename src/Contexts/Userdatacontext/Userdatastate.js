import React,{useState } from "react";
import usercontext from "./Userdatacontext";


const Userdatastate = (props)=>{


    const [user,changeuserstate] = useState({name:'', admin:'',username:''})

    return (
        <usercontext.Provider value={{user,changeuserstate}}>
        {props.children}
        </usercontext.Provider>
    )

}


export default Userdatastate