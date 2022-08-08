
import React from 'react'
import '../../../Styles/Cards.css'
import Progressbar from './Progressbar'

function Cards(props) {
    const {title,content,rest} = props

    const style = {
      color:rest.icon? 'white':'black', 
      backgroundColor:rest.iconcolor || null,
      border: '1px solid ' + rest.iconcolor || 'black'
    }
   
  return (
    <div style = {{...style}}  className={`cards col-3 col-md-4 col-sm-3 grid-item`}>
       <p>
        {title}
       </p>
       <span className="content">
    {rest.icon? <span className="">{rest.icon} {'  ' + content}</span>   : <div> {content}<Progressbar percent={content}/> </div>}
       </span>
    </div>
  )
}

export default Cards