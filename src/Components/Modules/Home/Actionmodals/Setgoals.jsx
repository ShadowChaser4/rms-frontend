import React from 'react'
import TrackChangesIcon from '@mui/icons-material/TrackChanges';


function Setgoals() {
    const style = {
        backgroundColor:'rgb(255,20,20,0.8)', 
        color:'rgb(255,20,20,0.8)'
    }
  return (
    <>
                      <div className='actionbutton'  style={style}> 
    <span style={{color:'white'}} className="text">Set goals for week</span>
    <span className='icon'><TrackChangesIcon/></span>
    </div>
    </>
  )
}

export default Setgoals