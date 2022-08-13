import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';



function ChangePassword({show,setShow}) {

    const handleClose = () =>{
      setShow (false)
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
      if (passwords.newpassword1 === '' || passwords.newpassword2 === '' || passwords.oldpassword === '')
      {
         setalert({severity:'Warning',message:'Empty fields',showalert:true})
        setTimeout(()=>{
          setalert({severity:'',message:'',showalert:false})
        },2000)
        return
      }
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
              setTimeout(()=>{setShow(false)},2300)
              setalert({severity:'Success',message:'Changed successfully',showalert:true})

           }
           else 
           {
            setalert({severity:'Error',message:json.message,showalert:true})
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
        show = {show}
        onHide = {handleClose}
        backdrop = 'static'
        keyboard = {false}
        centered
        size='md'
        >
        <Modal.Header closeButton>
         <Modal.Title>Change Password</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
        <div className="container">
        <label htmlFor="oldpassword" className='input-group mb-3'>Old Password:
                <input type="password" name="oldpassword" className="form-control border border-dark m-1" value={passwords.oldpassword} onChange={handlechange}   />
                </label>
               
                <br />

                <label htmlFor="new passowrd" className='input-group mb-3'>New Password:
                <input type="password" name="newpassword1" value={passwords.newpassword1} onChange={handlechange} className="form-control border border-dark m-1" />
                </label>
                <br />

                <label htmlFor="confirm new password" className='input-group mb-3'>Confirm <br/> New Password:
                <input type="password" name="newpassword2" value ={passwords.newpassword2} onChange={handlechange} className='form-control border border-dark rounded-3 m-1' />
                </label>
                <br/>
        </div>
          
                </Modal.Body>

                
              <Modal.Footer>
               {!submitting?<button className='btn btn-primary btn-md m-3' onClick={handlesubmit} type = 'submit' id = "submit">Save</button>
               : <Spinner animation="border" variant="primary" />}
              </Modal.Footer>
              
            
           
           { alert.showalert &&
            <div className="alert">
           <Alert severity={alert.severity}>
           <AlertTitle>{alert.severity}</AlertTitle>
           {alert.message}
           </Alert>
           </div>
         
         }  

      
         </Modal>
          </>  
           


  )
}

export default ChangePassword