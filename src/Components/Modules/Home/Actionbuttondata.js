import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const actions = [{
    name:'Add user', 
    icon: <PersonAddIcon/>,
    iconcolor:' #ff944d',
    adminreq: true
}, 
{
    name: 'Scan items', 
    icon:<QrCodeScannerIcon/>, 
    iconcolor:'#666666',
    adminreq: false
}, 
{
    name: 'Add items in inventory', 
    icon:<AddShoppingCartIcon/>, 
    iconcolor:"#4d4dff",
    adminreq: true
}
, 
{
    name: 'Search with recipt no.', 
    icon: <ManageSearchIcon/>, 
    iconcolor:'#e8b84a',
    adminreq: false
}]

export default actions