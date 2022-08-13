import React, { useContext, useEffect , useState} from 'react'
import PieChart from './PieChart'
import usercontext from '../../../Contexts/Userdatacontext/Userdatacontext'
import '../../../Styles/Components.css'
import '../../../Styles/Reports.css'
import Chart from './Chart'
import BarChartItem from './BarChart'




function Reports() {
  const [fetcheddata,changedata] = useState({})
useEffect(
  ()=>{
    async function fetching() 
    {
      let headers = new Headers()
    headers.append("Accept", "application/json")
    headers.append("Content-Type","application/json")
    headers.append("Access-Control-Allow-Credentails", 'true')
    headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
    const response = await fetch("http://localhost:5000/api/reportsapi?customersvisited=true&totalincome=true&timeline=week",{
        method:"GET",  
        headers:headers,
        credentials:'include'
    }); 
    
    const json = await response.json()
    const {total,customersvisited} = json
    changedata({average:parseInt(total/7),customers:customersvisited})  
    }
    fetching()
  }, []
)


  
  const {user} = useContext(usercontext)
  return (
 <div className='contents'>

   {/* greeting */}
   <div className="flexbox">
   <div className="greeting heading">
       <span className="bold">
       Hi,
       </span> <span> {user.name}</span>
      
    </div>

    <div className="row margin">


      <div className="col-lg-8 col-md-12">

           <div className="horizontalflex">
            <div> Revenue 
              <select name="timeselect" id="timeselect" >
                <option value="monthly"  >monthly</option>
                <option value="weekly" selected >weekly</option>
              </select>
            </div>
           </div>
            
          <br />
            {fetcheddata.total}
      
       {<Chart/>}
      </div>

      <div className="col-lg-4">
        <div className="flexbox borderwhitesmoke">

           <div className="title" style={{padding:'15px'}}>

            Weekly average revenue 
          

            <br />

            <span className="greeting bold">
              {fetcheddata.average}
            </span>
            <hr />
           </div>

           <div className="title" style={{padding:'0px 15px 15px 15px'}}>

            Customers arrived
          
            <br />
            <span className='greeting bold'>
              {fetcheddata.customers}
            </span>
           </div>
        </div>
      </div>
    </div>

     <div className="row margin">

      <div className="col-lg-6">
        <div className="flexbox">
          <div className="greeting bold">
            Weekly Summary
          </div>
          <PieChart />
        </div>
      </div>

      <div className="col-lg-6 borderwhitesmoke">
       <div className="flexbox">

       <div className="greeting bold">
       Daily sales summary
       </div> 
       <BarChartItem/>
       </div>
      </div>
     </div>



   </div>
</div>
    
  )
}

export default Reports