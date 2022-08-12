import React from 'react'
import '../../../Styles/Components.css'
import '../../../Styles/Inventory.css'




function Inventory() {
  return (
    <div className='contents flexbox'>
    <div className="horizontalflex center">
        
<div className="input-group">
  <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
  <span className="input-group-text">$</span>
  <span className="input-group-text">0.00</span>
</div>
    </div>
    </div>
  )
}

export default Inventory