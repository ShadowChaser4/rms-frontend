import React, { useContext } from 'react'
import usercontext from '../../../Contexts/Userdatacontext/Userdatacontext'
import '../../../Styles/Components.css'
import '../../../Styles/Reports.css'
import Chart from './Chart'
import ProfitLoss from './ProfitLoss'




function Reports() {

  const average = 60000
  const customers = 100
  const data = [
    {
      name: "Jan",
      sales: 4000
    },
    {
      name: "Feb",
      sales: 3000
    },
    {
      name: "Mar",
      sales: 2000
    },
    {
      name: "Apr",
      sales: 2780
    },
    {
      name: "May",
      sales: 1890
    },
    {
      name: "Jun",
       sales: 2390
    },
    {
      name: "Jul",
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


      <div className="col-lg-8 ">

       <div className="flexbox">
            <div className = 'title'>
              Revenue  <ProfitLoss status = 'profit' number={10}/>
            </div>
          <div className='head bold'>
            {data[data.length -1].sales}
          </div>
        <div className="">
       {<Chart data = {data}/>}
        </div>
       </div>
      </div>

      <div className="col-lg-4">
        <div className="flexbox borderwhitesmoke">

           <div className="title" style={{padding:'15px'}}>
            Weekly average revenue 
            <ProfitLoss status = 'profit' number = '12'/>
            <br />
            <span className="head bold">
              {average}
            </span>
            <hr />
           </div>

           <div className="title" style={{padding:'0px 15px 15px 15px'}}>

            Customers arrived
            <ProfitLoss status = 'loss' number = '10'/>
            <br />
            <span className='head bold'>
              {customers}
            </span>
           </div>
        </div>
      </div>
    </div>
   </div>
 

   


</div>
    
  )
}

export default Reports