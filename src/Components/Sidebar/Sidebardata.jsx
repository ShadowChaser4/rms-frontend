import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import SummarizeIcon from '@mui/icons-material/Summarize';




export const Sidebardata = [
    {
        title: 'Home', 
        path: '/', 
        icon: <HomeIcon/>, 
        cName: 'nav-text'
    },
    {
        title: 'Reports', 
        path: '/reports', 
        icon: <SummarizeIcon/>, 
        cName: 'nav-text'
    }, 
    {
        title: 'Products', 
        path: '/products', 
        icon: <ShoppingCartIcon/>, 
        cName: 'nav-text'
    }, 
]