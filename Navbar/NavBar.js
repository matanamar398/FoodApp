import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { ReactComponent as Home } from '../backend/icons/home.svg'
import { ReactComponent as Menu } from '../backend/icons/align-left.svg'
import { ReactComponent as Restaurant } from '../backend/icons/restaurant_menu.svg'
import { ReactComponent as Domain } from '../backend/icons/domain_black.svg'
import { ReactComponent as Date } from '../backend/icons/date_range.svg'
import { ReactComponent as Cart } from '../backend/icons/shopping-cart.svg'

import FormDialog from '../FormDialog/FormDialog';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export default function NavBar() {
  const classes = useStyles();
  return (
   
    <Box sx={{ flexGrow: 2 }} dir="rtl">
      <AppBar position="static">
        <Toolbar className={classes.buttonswrapper} >

          <Button><Link style = {{color:'#FFFBFF',fontSize:30,fontFamily:"Karantina, cursive" , marginRight:45 ,textDecoration:'none'}} to="/">ראשי<Home/></Link></Button>
          <Button><Link style = {{color:'#FFFBFF',fontSize:30,fontFamily:"Karantina, cursive" , marginRight:45 ,textDecoration:'none'}} to="/menu">תפריט<Menu/></Link></Button>
          <Button><Link style = {{color:'#FFFBFF',fontSize:30,fontFamily:"Karantina, cursive" , marginRight:45 ,textDecoration:'none'}} to="/branches">סניפים<Domain/></Link></Button>
          <Button><Link style = {{color:'#FFFBFF',fontSize:30,fontFamily:"Karantina, cursive" , marginRight:45 ,textDecoration:'none'}} to="/favorites">המומלצים שלנו<Restaurant/></Link></Button>
          <Button><Link style = {{color:'#FFFBFF',fontSize:30,fontFamily:"Karantina, cursive" , marginRight:45 ,textDecoration:'none'}} to="/sales">מבצעי החודש<Date/></Link></Button>
          <Button><Link style = {{color:'#FFFBFF',fontSize:30,fontFamily:"Karantina, cursive" , marginRight:45 ,textDecoration:'none'}} to="/cart">ההזמנה שלי        <Cart/></Link></Button>
          <FormDialog></FormDialog>
        </Toolbar> 
      </AppBar>
    </Box>      

  );
}


const useStyles = makeStyles(() => ({
  buttonswrapper:{
   
   backgroundColor:'#362420',
   height:86,
  },
}))