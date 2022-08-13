import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';


export default function Scanitems () 
{
    const [open,setOpen] = useState(false)
   const  style = {
        backgroundColor:'#666666', 
        color: '#666666'
    }
    function handleclose ()
    {
        setOpen(false)
    }
    
    function handleopen(breakpoint) 
    {
        setFullscreen(breakpoint)
        setOpen(true)
    }
    const [fullscreen, setFullscreen] = useState('md-down')
    return(
        <>
         <div className='actionbutton' onClick={handleopen} style={style}> 
            <span style={{color:'white'}} className="text"> Scan items </span>
            <span className='icon'><QrCodeScannerIcon/></span>
         </div>
         <Modal
           show = {open}
           onHide = {handleclose}
           backdrop = 'static'
           keyboard = {false}
           centered
           size="lg"
           fullscreen = {'md-down'}
           >
           <Modal.Header closeButton>
            <Modal.Title>Scan items</Modal.Title>
           </Modal.Header>

           <Modal.Body>
           <div className="container-fluid flexbox rounded-3 modalcontainer">
                  
                  </div>
           </Modal.Body>

           <Modal.Footer></Modal.Footer>
                
           </Modal>
        </>
    )
}