export default async function logit(user,changestate,navigate,credentials)
{
  try{
    let cred = JSON.stringify(credentials)
    let headers = new Headers()
    headers.append("Accept", "application/json")
    headers.append("Content-Type","application/json")
    headers.append("Access-Control-Allow-Credentails", 'true')
    headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
     
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method:"POST",  
      headers:headers,
     body:cred, 
     credentials:'include'
    })
    
    const json = await res.json()
    if(res.status === 200 && json.status === 200)
    {
      const {username,admin,name} = json
      user.changeuserstate({username:username,admin:admin,name:name})
      changestate(true)
      navigate('/app/home')
    }
    
  }

  catch(e)
  {
    console.log(e.message)
  }
}