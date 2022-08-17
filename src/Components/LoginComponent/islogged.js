const islogged = async(user,navigate,changestate)=>{


    try {
      let headers = new Headers()
      headers.append("Accept", "application/json")
      headers.append("Content-Type","application/json")
      headers.append("Access-Control-Allow-Credentails", 'true')
      headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
       
      const res = await fetch('http://localhost:5000/api/auth/logged', {
        method:"GET",  
        headers:headers,
       credentials:'include'
      })
  
  
      const json = await res.json() 
        
      if (json.status === 200 && res.status === 200)
      {
        const {username,admin,name} = json
        user.changeuserstate({username:username,admin:admin,name:name})
        changestate(true)
        setTimeout(()=>{navigate('/app/home')},1)
      }
      if(res.status === 403)
      {
        console.log('not logged')
      }
    }
    catch(e)
    {
      console.log(e.message)
    }

   }

   export default islogged