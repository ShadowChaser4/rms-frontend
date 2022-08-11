import React, { useContext } from 'react'
import PieChart from './PieChart'
import usercontext from '../../../Contexts/Userdatacontext/Userdatacontext'
import '../../../Styles/Components.css'
import '../../../Styles/Reports.css'
import Chart from './Chart'
import ProfitLoss from './ProfitLoss'
import BarChartItem from './BarChart'




function Reports() {


  const solditems = ['Breakfast', 'Clothes', 'Cosmetics', 'Bevrages']
  const soldunits = [12, 19, 3, 5]
  const average = 60000
  const customers = 100
  const data = [
    {
      name: "Sun",
      sales: 4000
    },
    {
      name: "Mon",
      sales: 3000
    },
    {
      name: "Tues",
      sales: 2000
    },
    {
      name: "Wed",
      sales: 2780
    },
    {
      name: "Thur",
      sales: 1890
    },
    {
      name: "Fri",
       sales: 2390
    },
    {
      name: "Sat",
      sales: 3490
    }
  ];
  
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
            <div> Revenue  <ProfitLoss status = 'profit' number={10}/></div>
            <div>
              <select name="timeselect" id="timeselect" >
                <option value="monthly"  >monthly</option>
                <option value="weekly" selected >weekly</option>
              </select>
            </div>
           </div>
            
          <br />
            {data[data.length -1].sales}
      
       {<Chart data = {data}/>}
      </div>

      <div className="col-lg-4">
        <div className="flexbox borderwhitesmoke">

           <div className="title" style={{padding:'15px'}}>

            Weekly average revenue 
            <ProfitLoss status = 'profit' number = '12'/>

            <br />

            <span className="greeting bold">
              {average}
            </span>
            <hr />
           </div>

           <div className="title" style={{padding:'0px 15px 15px 15px'}}>

            Customers arrived
            <ProfitLoss status = 'loss' number = '10'/>
            <br />
            <span className='greeting bold'>
              {customers}
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
          <PieChart solditems={solditems} soldunits={soldunits}/>
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