import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Inventoryedit() {
  const   style = {
        backgroundColor:'#4d4dff', 
        color: '#4d4dff'
    }
  return (

   <>
      <div className='actionbutton'  style={style}> 
    <span style={{color:'white'}} className="text">Inventory Edit </span>
    <span className='icon'><AddShoppingCartIcon/></span>
    </div>
   </>
  )
}

export default Inventoryedit