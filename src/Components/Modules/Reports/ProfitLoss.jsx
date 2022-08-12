import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function ProfitLoss({status,number}) {
    const bool = (status === 'loss')
    const colour = bool ?'rgb(255,10,20,0.6)':'rgb(10,255,20,0.6)'
    const border = bool?'rgb(255,10,20,0.8)':'rgb(10,255,20,0.8)'
   const style =  {border:`1px solid ${border}`,
   borderRadius:'0.2rem',
   backgroundColor:colour,
   padding:'5px',
   margin:'5px',
color:'white'}
  return (
    <>
  <span className = 'profitlossindicator' style = {style}> 
  {number}%  {bool?<KeyboardDoubleArrowDownIcon/>:<KeyboardDoubleArrowUpIcon/>}</span> 
    </>
  )
}

export default ProfitLoss