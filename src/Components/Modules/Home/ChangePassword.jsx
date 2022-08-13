import React, { useState } from 'react'
import { Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



function ChangePassword({open, setOpen}) {

   
    const handleclose = ()=>{
        setOpen(false)
    }

    const [passwords, setPasswords] = useState({newpassword1:'',oldpassword:'',newpassword2:''})

    const handlechange = (e)=>{
      const  {name,value} = e.target
        setPasswords(prev=>{
            return {...prev, [name]:value}
        })
    }

    const [submitting,setsumbit] = useState(false)
    const [alert,setalert] = useState({severity:'',message:'',showalert:false})

    const handlesubmit = (e)=>{
        
      async  function sending ()
      {
       try{
           setsumbit(true)
           let cred = JSON.stringify(passwords)
           let headers = new Headers()
           headers.append("Accept", "application/json")
           headers.append("Content-Type","application/json")
           headers.append("Access-Control-Allow-Credentails", 'true')
           headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
            
           const res = await fetch('http://localhost:5000/api/auth/changepassword', {
             method:"POST",  
             headers:headers,
             body:cred, 
            credentials:'include'
           })
            
           setPasswords({newpassword1:'',oldpassword:'',newpassword2:''})
           
           const json = await res.json()
           console.log(json)
           if(res.status === 200)
           {
              setTimeout(()=>{setOpen(false)},2300)
              setalert({severity:'success',message:'Changed successfully',showalert:true})

           }
           else 
           {
            setalert({severity:'error',message:json.message,showalert:true})
           }
           setsumbit(false)
           setTimeout(()=>{
            setalert({severity:'',message:'',showalert:false})
          },2000)
         }
       
         catch(e)
         {
           console.log(e.message)
         }
      }

      sending()
        
   }

  return (
    <>
         <Modal 
           keepMounted
           disableScrollLock
           open = {open}
           aria-labelledby="Change Password"
           sx = {{
            // backdropFilter: "blur(5px)",
            margin:'auto', 
            position:'absolute', 
            width:'384px', 
            height:'400px',
            opacity:1,
            color:'black',
            zIndex:200, 
            border:'3px solid grey',
            borderRadius:'1.2rem'
           }}>
          <>
           <div className='modalcontainer flexbox' style={{flexDirection:'column', justifyContent:"space-around"}}>
                <h4 className = ''>
                    Change Password:
                </h4>
                <label htmlFor="oldpassword" className=''>Old Password:
                <input type="password" name="oldpassword"value={passwords.oldpassword} onChange={handlechange} className='input'   />
                </label>
               
                <br />

                <label htmlFor="new passowrd" className=''>New Password:
                <input type="password" name="newpassword1" value={passwords.newpassword1} onChange={handlechange} className=' input'  />
                </label>
                <br />

                <label htmlFor="confirm new password" className=''>Confirm <br/> New Password:
                <input type="password" name="newpassword2" value ={passwords.newpassword2} onChange={handlechange} className='input' />
                </label>
                <br/>

                <button id = "close" onClick={handleclose}> <CloseIcon/> </button>
               {!submitting&& <button onClick={handlesubmit} type = 'submit' id = "submit"><DoneIcon/></button>}
            
           </div>
           { alert.showalert &&
            <div className="alert">
           <Alert severity={alert.severity}>
           <AlertTitle>{alert.severity}</AlertTitle>
           {alert.message}
           </Alert>
           </div>
         
         }  
  
          </>  
           </Modal>

         
    </>
  )
}

export default ChangePassword