import React, { useState } from 'react'
import '../../../Styles/Components.css'
import '../../../Styles/Inventory.css'
import SearchIcon from '@mui/icons-material/Search';




function Inventory() {

  const [searchquery,changetext] = useState('')

  const changehandler = (e)=>{
    const {value}= e.target
    changetext(value)
  }
  const onSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='contents'>
    <div className="horizontalflex center">
          
    <form onSubmit = {onSubmit} action="">
    <div className="input-group width-50">
       <input type="text" onChange={changehandler} value = {searchquery} className="form-control" aria-label="Search products"/>
         <button type='submit' className="btn btn-dark input-group-text"> <SearchIcon/> </button>
       </div>
    </form>
       
    </div>
     
     <div className="row marginrightandleftandtop">
      <div className="col-md-8 ">
        item section
      </div>

      <div className="col-md-4">
         info section
      </div>
     </div>
    </div>
  )
}

export default Inventory