import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Modal ,Alert} from 'react-bootstrap';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search'

function Searchrecipt() {
  const [alert,setalert] = useState({severity:'',message:'',showalert:false})


    const   style = {
        backgroundColor:'#e8b84a', 
        color: '#e8b84a'
    }
    const [show,setShow] = useState(false)
    const handleClose = ()=>{
      setShow(false)
    }
    const [resultdone,changeresults] = useState(false)
    const [results,changeit] = useState({})
    const [items,changeitems] = useState([])

    const [searchvalue,changevalue] = useState('')
    const handlevalue = (e)=>{
        const {value} = e.target
        changevalue(value)
    }

    const handleshow = ()=>{
      setShow(true)
    }

    const handlesubmit = () =>{
      async function fetching() 
      {
try {

        let headers = new Headers()
      headers.append("Accept", "application/json")
      headers.append("Content-Type","application/json")
      headers.append("Access-Control-Allow-Credentails", 'true')
      headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
      const response = await fetch(`http://localhost:5000/api/order?id=${searchvalue}`,{
          method:"GET",  
          headers:headers,
          credentials:'include'
      }); 
      
      if(response.status === 200)
      {
        const json = await response.json()
      
        const {checkedby,customername,date,discount,total,grandtotal,items} = json

        changeit({checkedby,customername,date,discount,total,grandtotal})
        changeitems(items)

        changeresults(true)
      }
      else 
      {
    setalert({severity:'danger',message:response.statusText,showalert:true})
                    setTimeout(()=>{
                        setalert({severity:'',message:"",showalert:false})
                      },2500)
      }
    }
      catch(e)
      {
        setalert({severity:'danger',message:'Something went wrong',showalert:true})
                    setTimeout(()=>{
                        setalert({severity:'',message:"",showalert:false})
                      },2500)
      }

      }
      fetching()
    }
  return (
    <>
    <div className='actionbutton' onClick={handleshow} style={style}> 
    <span style={{color:'white'}} className="text">Seact with recipt no. </span>
    <span className='icon'> <ManageSearchIcon/></span>
    </div>

    <Modal
    show = {show}
    onHide = {handleClose}
    backdrop='static'
    keyboard = {false}
    size = "lg"
    centered
    fullscreen = {'md-down'}
    >
   <Modal.Header closeButton>
   <Modal.Title>Search Recipt</Modal.Title>
   </Modal.Header>

   <Modal.Body>
   <div className="input-group mb-3">
                    <input value = {searchvalue} type="text" onChange = {handlevalue} className="form-control" placeholder="Search for recipt" aria-describedby="basic-addon2"/>
                    <span onClick = {handlesubmit} className="input-group-text bg-dark text-light" id="basic-addon2"><SearchIcon/></span>
    </div>

   {resultdone &&<>
             <div className="flexbox">

             <div style={{display:'flex',justifyContent:'space-between'}}>
                   <div className="m-3">
                    <span style={{fontWeight:'bold'}}>Name:</span>
                    <span>{results.customername}</span>
                   </div>
                   <div className="m-3">
                    <span style={{fontWeight:'bold'}}>Checked by:</span>
                    <span>{results.checkedby}</span>
                   </div>
             </div>

             <div>
             <span className="m3">Date: {results.date}</span> 
             </div>
             <table className="table">
                        <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope='col'>id</th>
                        <th scope="col">Units</th>
                        </tr>
                       </thead>

                       <tbody>

                        {
                          items.map(
                            function({productid,itemsbrought,cost},indx)
                            {
                              return (<tr>
                        <th scope="col">{indx+1}</th>
                        <th scope="col">{productid.productname}</th>
                        <th scope="col">{cost}</th>
                        <th scope='col'>{productid.id}</th>
                        <th scope="col">{itemsbrought}</th>
                              </tr>)
                            }
                          )
                        }
                       </tbody>
  
                      

   </table>
    
   <div style={{display:'flex',justifyContent:'spacearound',alignContent:'flex-end',flexDirection:'column'}}>
                   <div className="m-3">
                    <span style={{fontWeight:'bold'}}>Total:</span>
                    <span>{results.total}</span>
                   </div>
                   <div className="m-3">
                    <span style={{fontWeight:'bold'}}>Discount:</span>
                    <span>{results.discount}%</span>
                   </div>
                   <div className="m-3">
                    <span style={{fontWeight:'bold'}}>Grand total:</span>
                    <span>{results.grandtotal}</span>
                   </div>
             </div>

             </div>
             { alert.showalert &&
             <div className="alert">
             <Alert variant={alert.severity}>
              {alert.message}
            </Alert>
             </div>

         
         }  
                  
   </>
} 

                   
   </Modal.Body>
    </Modal>
    </>
  )
}

export default Searchrecipt