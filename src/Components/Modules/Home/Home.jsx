import React, { useContext,useEffect} from 'react'
import usercontext from '../../../Contexts/Userdatacontext/Userdatacontext'
import '../../../Styles/Components.css'
import '../../../Styles/Home.css'
import Actionbuttons from './Actionbuttons'
import Chart from './Chart'
import Profile from './Profile'
import Card from './Cards/Card'

function Home() {


  const Hour = new Date().getHours()
  const {user}= useContext(usercontext)

  const solditems = ['Breakfast', 'Clothes', 'Cosmetics', 'Bevrages', 'Foods', 'Cleaning items']
  const soldunits = [12, 19, 3, 5, 2, 3]
  return (
    <div className='contents flexbox'>


      {/* greeting */}
      <div className="greeting heading">
       <span className="bold">{(Hour < 12)? 'Good Morning   '
       : (Hour < 19 )? 'Good Afternoon   '
       :'Good Night   '} 
       </span> <br />
       <span style={{fontSize:'1.2rem'}}> {user.name}</span>
      </div>


      {/*insight section*/}

      <div className="insight">

      <div className="row makeittwo">
        
        <Card/>

       <div className="col-lg-4 col-md-12 col-sm-6 profile">

       <div className="flexbox" style={{padding:0}}>
          <Profile user = {user.name}/>
      </div>

       </div>
       
      </div>
       
      

      </div>
      {/* insight section */}


      {/* quick actions */}

      <div className="horizontalflex" style={{justifyContent:"space-between"}}>

      <div className="chart" >
       <span className="bold" style={{fontSize:'1.5rem',fontWeight:'500'}}>Quick insight</span> 
       <br />
        <Chart solditems={solditems}
               soldunits = {soldunits}
        />
      </div>
      
      <div>
      <Actionbuttons/>
      </div>
  
         
      </div>
   


    </div>
  )
}

export default Home