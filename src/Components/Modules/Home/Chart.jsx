import React, { useEffect ,useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() 
{
  const [fetcheddata,changedata] = useState({})

  useEffect(()=>{
    async function fetching() 
    {
      let headers = new Headers()
     headers.append("Accept", "application/json")
     headers.append("Content-Type","application/json")
     headers.append("Access-Control-Allow-Credentails", 'true')
     headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
     const response = await fetch("http://localhost:5000/api/reportsapi?piedata=true&timeline=month",{
         method:"GET",  
         headers:headers,
         credentials:'include'
     }); 
     
     const json = await response.json()
      const {piedata} = json
      changedata({solditems:Object.keys(piedata),totalsold:Object.values(piedata)})  
    }
    fetching()
  },[])
    const data = {
        labels: fetcheddata.solditems,
        datasets: [
          {
            label: '# of Sales',
            data: fetcheddata.totalsold ,
            backgroundColor: [
              'rgba(139,0,139, 0.5)',
              'rgba(0,255,0, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(255, 102, 255, 0.5)',
              'rgba(112,128,144, 0.5)',
            ],
            borderColor: [
              'rgba(139,0,139, 1)',
              'rgba(0,255,0, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(255, 102, 255, 1)',
              'rgba(112,128,144, 1)',
            ],
            borderWidth: 1,
          },
        ],
}

return (<div className="chart">
    <Pie data = {data}/>
</div>
)
}