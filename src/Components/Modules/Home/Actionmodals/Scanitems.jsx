import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner';



export default function Scanitems () 
{
    // for modal 
    const [open,setOpen] = useState(false)
    const [alert,setalert] = useState({severity:'',message:'',showalert:false})

    const [show1,setShow1] = useState(false)
   function handleopen2()
   {
    setShow1(true)
   }
   function handleclose2()
   {
    setShow1(false)
   }

   const  style = {
        backgroundColor:'#666666', 
        color: '#666666'
    }
    function handleclose ()
    {
        setOpen(false)
    }
    
    function handleopen(breakpoint) 
    {
        setFullscreen(breakpoint)
        setOpen(true)
    }
    const [fullscreen, setFullscreen] = useState('md-down')

    // for modal

    const [searchvalue,changevalue] = useState('')
    const handlevalue = (e)=>{
        const {value} = e.target
        changevalue(value)
    }

    const [fetching,changefetching] = useState(false)
    const [Items,changeitems] = useState([])


    const handleSubmit =  ()=>{
        try {
         async function fetching() 
            {
                changefetching(true)
                let headers = new Headers()
                headers.append("Accept", "application/json")
                headers.append("Content-Type","application/json")
                headers.append("Access-Control-Allow-Credentails", 'true')
                headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
                const id = JSON.stringify({id:searchvalue})
                const response = await fetch(`http://localhost:5000/api/getproduct?query=${searchvalue}`,{
                    method:"GET",  
                    headers:headers,
                    credentials:'include'
                }); 
                console.log(response)
                if(response.status === 200)
                {

                   const json = await response.json()
                    const {_id,id,productname,price} = json
              
                        changeitems((prev)=>{
                            return [...prev,{_id:_id,id:id,productname:productname,price:price,units:1}]
                        })

                        changevalue('')


                        
                    
                }
                else 
                {
                    setalert({severity:'danger',message:response.statusText,showalert:true})
                    setTimeout(()=>{
                        setalert({severity:'',message:"",showalert:false})
                      },2500)

                }
              
                changefetching(false)
        
            }
            fetching()
            }
            catch(e){
                setalert({severity:'danger',message:e,showalert:true})
                setTimeout(()=>{
                    setalert({severity:'',message:"",showalert:false})
                  },2500)
                console.log(e)
            }
            
           
 
}



const handlevalueChange = (e)=>{
        const {id,value} = e.currentTarget

        const newitems = Items.map(
            function (item)
            {
                if(item.id === id)
                {
                    return {...item,units:value}
                }
                else 
                {
                    return {...item}
                }
            }
        )
        changeitems(newitems)

}

const handledelete = (e)=>{
    const {id} = e.currentTarget


    const newitems = Items.filter(
        function (item)
        {
           return (item._id != id)
        }
    )
    changeitems(newitems)

}

const [sending,changesending] = useState(false)


const [resultdone,changeresults] = useState(false)
const [results,changeit] = useState({})
const [fetched,changefetch] = useState([])

const handleorder = ()=>{
     if (customername.length < 1)
     {
        setalert({severity:'warning',message:'Enter customer name',showalert:true})
                setTimeout(()=>{
                    setalert({severity:'',message:"",showalert:false})
                  },2500)
        return 
     }
     if (Items.length < 1)
    
       { setalert({severity:'warning',message:'Empty fields',showalert:true})
                setTimeout(()=>{
                    setalert({severity:'',message:"",showalert:false})
                  },2500)
        return 
                }
       changesending(true)
        const cleanseditems = Items.map(
            function (item)
            {
                const {_id,price,units} = item
                return {
                    productid:_id, 
                    itemsbrought:units,
                    cost: price
                }
            }
        )

        const body = {
            items : cleanseditems, 
            customername:customername
        }
        
    
        async function sending ()
        {
            
      const headers = new Headers()
      headers.append("Accept", "application/json")
      headers.append("Content-Type","application/json")
      headers.append("Access-Control-Allow-Origin", "http://localhost:5000")
      headers.append("Access-Control-Allow-Credentails", 'true')
      const response = await fetch("http://localhost:5000/api/order",{
          method:"POST", 
          headers:headers,
          body:JSON.stringify(body), 
          credentials:'include'
      }); 
      
      const json = await response.json()
      changesending(false)
      if(response.status === 200)
      {
        handleclose()
        const {checkedby,customername,date,discount,total,grandtotal,items} = json

        changeit({checkedby,customername,date,discount,total,grandtotal})
        changefetch(items)
        
        changeresults(true)
        handleopen2()

      }

        }

        sending()
     
}

const [customername,changename]=useState('')
const handlename = (e)=>{
       const {value} = e.target
        changename(value)
}

    return(
        <>
         <div className='actionbutton' onClick={handleopen} style={style}> 
            <span style={{color:'white'}} className="text"> Scan items </span>
            <span className='icon'><QrCodeScannerIcon/></span>
         </div>
         <Modal
           show = {open}
           onHide = {handleclose}
           backdrop = 'static'
           keyboard = {false}
           centered
           size="lg"
           fullscreen = {'md-down'}
           scrollable = {true}
           >
           <Modal.Header closeButton>
            <Modal.Title>Scan items</Modal.Title>
           </Modal.Header>

           <Modal.Body>
                <div className="container-fluid flexbox rounded-3 modalcontainer">
                  
                  <div className="input-group mb-3">
                    <input value = {searchvalue} type="text" onChange = {handlevalue} className="form-control" placeholder="Search for item" aria-describedby="basic-addon2"/>
                    <span onClick = {handleSubmit} className="input-group-text bg-dark text-light" id="basic-addon2">{!fetching?<SearchIcon/>:  <Spinner animation="border" variant="light" />}</span>
                   </div>
                      

                        <div className="input-group mb-3" style={{width:'190px'}}>
                        <input type="text" value={customername} onChange = {handlename} className="form-control" autoComplete="nofill" placeholder="Customer name" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        </div>
                        <table className="table">
                        <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">id</th>
                        <th scope="col">Price</th>
                        <th scope="col">Units</th>
                        </tr>
                        </thead>

                        <tbody>
                        { 
                            Items.map(
                                (item,indx)=>{
                                    const {_id,id,price,units,productname} = item
                                    return(
                                        <tr key ={_id}>
                                        <th scope="row">{indx + 1}</th>
                                        <td>{productname}</td>
                                        <td>{id}</td>
                                        <td>{price}</td>
                                        <td><input  id={id} type='number' onChange={handlevalueChange}  value = {units} min={1}></input></td>
                                        <td data-id = {_id}> <span onClick={handledelete} data-id = {_id} id = {_id}  ><DeleteIcon data-id = {_id} /></span></td>
                                        </tr>
                                    )
                                }
                            )
                        }
                        </tbody>
                        </table>
                  
                  
           { alert.showalert &&
            <Alert variant={alert.severity}>
              {alert.message}
            </Alert>
         
         }  

                  </div>
           </Modal.Body>

           <Modal.Footer>
           {Items.length < 1?null: <button onClick={handleorder} className="btn btn-md btn-outline-success">{!sending?'Create Order':  <Spinner animation="border" variant="success" />}</button>}
           </Modal.Footer>
                
           </Modal>
           
           <Modal
    show = {show1}
    onHide = {handleclose2}
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
                          fetched.map(
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
                    <span>{results.discount}</span>
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