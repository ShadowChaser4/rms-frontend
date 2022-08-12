import React, { useEffect, useState } from 'react'

function Profile(props) {
    const [url,changeurl] = useState('')
    useEffect(()=>{
        async function fetching()
        {
            try 
            {
                let headers = new Headers()
                headers.append("Accept", "application/json")
                headers.append("Content-Type","application/json")
                headers.append("Access-Control-Allow-Credentails", 'true')
                headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
                const response = await fetch("http://localhost:5000/api/getimage",{
                    method:"GET",  
                    headers:headers,
                    credentials:'include'
                }); 
                const blob =await  response.blob() 
                const url = window.URL.createObjectURL(blob); 
                changeurl(url); 
            }
            catch(e)
            {
                console.log(e)
            }

        }

        fetching()
  
    },[])
  return (
    <>
        <h5>
            Profile
          </h5>

          <img src={url} alt="profile" className='profileimage' />

          <h6 style={{marginTop:'10px'}}>{props.name}</h6>

           <button className="btn btn-sm btn-success m-1 p-1 " > Change profile picture </button>
           <button className="btn btn-sm btn-outline-light m-2 p-1" > Change Password </button>
    </>
  )
}

export default Profile