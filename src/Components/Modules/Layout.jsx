import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

function Layout({children}) {
  return (
    <>
       <Sidebar/>
       {children}
    </>
  )
}

export default Layout