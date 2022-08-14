import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Spinner from 'react-bootstrap/Spinner';



function Adduser() {
   const  style = {
        backgroundColor:'#ff944d', 
        color: '#ff944d'
    }


    const [show,setShow] = useState(false)
    const handleOpen = ()=>{
      setShow(true)
    }
    const handlclose = ()=>{
      setShow(false)
    }

    const [userstate,changestate] = useState({name:'',password:'',username:'',role:''})

    const [alert,setalert] = useState({severity:'',message:'',showalert:false})
    

    function handlechange (e) 
    {
      const {value,name} = e.target
      changestate(prev=>{
        return {...prev,[name]:value}
      })
    }

    const handlesubmit = (e)=>{
        e.preventDefault()


        async function send() 
        {
          try{
            let headers = new Headers()
            headers.append("Accept", "application/json")
            headers.append("Content-Type","application/json")
            headers.append("Access-Control-Allow-Credentails", 'true')
            headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
             
            const res = await fetch('http://localhost:5000/api/auth/register', {
              method:"POST",  
              headers:headers,
             body:JSON.stringify(userstate), 
             credentials:'include'
            })
             const json = await res.json()
             console.log(res)
            if(res.status === 200)
            {
              setalert({severity:'success',message:res.statusText,showalert:true})
              setTimeout(()=>{
                  setalert({severity:'',message:"",showalert:false})
                  setShow(false)
                },2500)
                changestate({name:'',password:'',username:'',role:''})
            }
            else 
            {
              setalert({severity:'error',message:res.statusText,showalert:true})
              setTimeout(()=>{
                  setalert({severity:'',message:"",showalert:false})
                },2500)
            }

            
          }
        
          catch(e)
          {
            setalert({severity:'error',message:'something went wrong',showalert:true})
              setTimeout(()=>{
                  setalert({severity:'',message:"",showalert:false})
                },2500)
          }
        }

        send()

    }
  return (
 
    <>
    <div onClick={handleOpen} className='actionbutton'  style={style}> 
    <span style={{color:'white'}} className="text"> Add user </span>
    <span className='icon'><PersonAddIcon/></span>
    </div>
    <Modal
    show = {show}
    onHide = {handlclose}
    backdrop = 'static'
    keyboard = {false}
    centered
    size = "md">
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>

       <Modal.Body>
       <form className="row g-3" onSubmit={handlesubmit}>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" required value = {userstate.username} onChange={handlechange} name="username" placeholder='Username' id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputName" className="form-label">Name</label>
    <input type="text" name="name" className="form-control" required value={userstate.name} onChange={handlechange} placeholder='Name' id="inputName4"/>
  </div>
  <div className="col-12">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" required onChange={handlechange} value={userstate.password} name="password" id="inputPassword4" placeholder="Password"/>
  </div>
  <div className="col-3">
    <label for="inputAddress2" className="form-label">Role</label>
    <input type="text" className="form-control" required  onChange={handlechange} name="role" value={userstate.role} id="inputAddress2" />
  </div>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Register</button>
  </div>
</form>
       </Modal.Body>
    </Modal>

  
      { alert.showalert &&
             <div className="alert" >
             <Alert severity={alert.severity}>{alert.message}</Alert>
             </div>
             }
    </>
  )
}

export default Adduser