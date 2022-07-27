import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



export const Sidebardata = [
    {
        title: 'Home', 
        path: '/app/home', 
        icon: <HomeIcon/>, 
        cName: 'nav-text'
    },
    {
        title: 'Reports', 
        path: '/app/reports', 
        icon: <AnalyticsIcon/>, 
        cName: 'nav-text'
    }, 
    {
        title: 'Inventory', 
        path: '/app/inventory', 
        icon: <AccountBalanceIcon/>, 
        cName: 'nav-text'
    }, 
]