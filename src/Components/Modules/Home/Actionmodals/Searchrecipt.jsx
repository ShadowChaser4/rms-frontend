import React from 'react'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';


function Searchrecipt() {
    const   style = {
        backgroundColor:'#e8b84a', 
        color: '#e8b84a'
    }
  return (
    <>
              <div className='actionbutton'  style={style}> 
    <span style={{color:'white'}} className="text">Seact with recipt no. </span>
    <span className='icon'> <ManageSearchIcon/></span>
    </div>
    </>
  )
}

export default Searchrecipt