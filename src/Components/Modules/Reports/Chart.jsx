import React,{useState,useEffect} from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";



export default function Chart() {
  const [fetcheddata,changedata] = useState({})

  useEffect(()=>{
    async function fetching() 
    {
      let headers = new Headers()
     headers.append("Accept", "application/json")
     headers.append("Content-Type","application/json")
     headers.append("Access-Control-Allow-Credentails", 'true')
     headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
     const response = await fetch("http://localhost:5000/api/dataforchart?timeline=week",{
         method:"GET",  
         headers:headers,
         credentials:'include'
     }); 
     
     const json = await response.json()
      changedata(json)  
    }
    fetching()
  },[])

  return (
    <>
    <ResponsiveContainer width='100%' height={200}>
    <AreaChart
      data={fetcheddata}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
      width={900}
      height={400}
    >
      <XAxis dataKey="name" />
      <YAxis hide = {true} />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="sales"
        stroke="#1C3879"
        fill="#607EAA"
      />
    </AreaChart>
</ResponsiveContainer>
</>
  );
}

  
