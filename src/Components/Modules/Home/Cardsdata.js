import React from 'react';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';

const Cardsdata = [
    {
     title:'Total sales',
     content:'100 Units', 
     icon: <PointOfSaleIcon/>,
     iconcolor:'rgb(0,0,255,0.6)'
    }, 
    {
        title:'Total Income', 
        content : 'Rs.4000', 
        icon: <AccountBalanceWalletIcon/>,
        iconcolor: 'rgb(255,165,0,0.6)'
    },
    {
        title:'Percentage of Targeted Sales', 
        content: '79%',
        progessbar: true,
    }, 
    {
        title:'Customers visited',
        content:'12', 
        icon:<PersonIcon/>,
        iconcolor:'rgb(199,36,177,0.6)'

    }
]
export default  Cardsdata