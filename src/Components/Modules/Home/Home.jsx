import React, { useContext } from 'react'
import usercontext from '../../../Contexts/Userdatacontext/Userdatacontext'
import '../../../Styles/Components.css'
import '../../../Styles/Home.css'
import actions from './Actionbuttondata'
import Actionbuttons from './Actionbuttons'
import './Cards'
import Cards from './Cards'
import './Cardsdata'
import Cardsdata from './Cardsdata'
import Chart from './Chart'
import Profile from './Profile'

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
        
        {Cardsdata.map((data,indx)=>{
          const {title,content, ...rest} = data
              return (  <Cards key = {indx}
                      title = {title}
                      content = {content}
                      rest = {rest}
                   />)
        })}


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

      <div className="actionbuttons">
      <span className='bold' style={{fontSize:'1.3rem',fontWeight:'500'}}>Actions</span>
      <br />
       {actions.map(({icon,iconcolor,adminreq,name},indx)=>{
        return <Actionbuttons key = {indx}
                             icon = {icon}
                             name = {name}
                             iconcolor = {iconcolor}
                             adminreq = {adminreq}/>
       })}
      </div>
         
      </div>
   


    </div>
  )
}

export default Home