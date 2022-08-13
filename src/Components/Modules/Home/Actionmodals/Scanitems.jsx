import { Modal } from "@mui/material";
import React from "react";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';


export default function Scanitems ({open,setOpen}) 
{
   const  style = {
        backgroundColor:'#666666', 
        color: '#666666'
    }
    function handleclose ()
    {
        setOpen(false)
    }

    return(
        <>
         <div className='actionbutton'  style={style}> 
            <span style={{color:'white'}} className="text"> Scan items </span>
            <span className='icon'><QrCodeScannerIcon/></span>
         </div>
         <Modal
           open = {open}
           keepMounted
           disableScrollLock
           aria-labelledby="Change Password"
           sx = {{
            // backdropFilter: "blur(5px)",
            margin:'auto', 
            position:'absolute', 
            minWidth:'384px', 
            height:'400px',
            opacity:1,
            color:'black',
            borderRadius:'1.2rem'
           }}>
                <div className="container-fluid">
                    This is scan items modal

                    <button onClick={handleclose}>Click me</button>
                </div>
           </Modal>
        </>
    )
}