import React,{useState,useEffect} from 'react'
import Cards from './Cards'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';

function Card() {
  const [data,changedata] = useState({})
  useEffect(()=>{
    async function fetching () 
    {
     let headers = new Headers()
     headers.append("Accept", "application/json")
     headers.append("Content-Type","application/json")
     headers.append("Access-Control-Allow-Credentails", 'true')
     headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
     const response = await fetch("http://localhost:5000/api/reportsapi?timeline=day&totalincome=true&customersvisited=true&totalsales=true",{
         method:"GET",  
         headers:headers,
         credentials:'include'
     }); 
     
     const json = await response.json()
     changedata(json)
    }
    fetching()
 },[])
    const   Cardsdata = [
        {
         title:'Total sales',
         content:data.totalsales, 
         icon: <PointOfSaleIcon/>,
         iconcolor:'rgb(0,0,255,0.6)'
        }, 
        {
            title:'Total Income', 
            content : data.total, 
            icon: <AccountBalanceWalletIcon/>,
            iconcolor: 'rgb(255,165,0,0.6)'
        },
        {
            title:'Percentage of Targeted Sales', 
            content: '79%',
            progessbar: true,
        }, 
        {
            title:'Customers visited',
            content:data.customersvisited, 
            icon:<PersonIcon/>,
            iconcolor:'rgb(199,36,177,0.6)'
    
        }
    ]
  return (
    
    <>
         {Cardsdata.map((data,indx)=>{
          const {title,content, ...rest} = data
              return (  <Cards key = {indx}
                      title = {title}
                      content = {content}
                      rest = {rest}
                   />)
        })}
    </>
  )
}

export default Card