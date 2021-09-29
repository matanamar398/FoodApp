import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import colors from '../colors/colors';
import { ReactComponent as Burger } from '../backend/icons/hamburger.svg';
import { ReactComponent as Salad } from '../backend/icons/salad.svg';
import { ReactComponent as Smoothie } from '../backend/icons/smoothie.svg';
import { ReactComponent as Cupcake } from '../backend/icons/cupcake.svg';
import { ReactComponent as Food } from '../backend/icons/fast-food.svg';
import PageName from '../PageName/PageName';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


const wrapper = {
  width: '100%',
  marginTop:2,
  maxWidth:280,
  float:'right',
  bgcolor:colors.lightbrown,
  border:colors.text,

};



const div = {
  height:70,
  float:'right',
  borderBottom:'0.5px solid white'
  
};


export default function Menu() {
  return (
    <div>
    <PageName name="תפריט"/>
    <List  sx={wrapper} component="nav" aria-label="mailbox folders">
      <ListItem sx={div} button>
      <Burger/>
      <Link  to="meals"><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:90}}>ארוחות</h1></Link>
      </ListItem>
      <Divider />
      <ListItem sx={div} button divider>
       <Salad/>
       <Link  to="salads"><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:90}}>סלטים</h1></Link>
      </ListItem>
      <ListItem sx={div} button>
      <Cupcake/>
      <Link  to="desserst"><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:90}}>קינוחים</h1></Link>
      </ListItem>
      <ListItem sx={div} button>
      <Smoothie/>

      <Link  to="drinks"><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:90}}>שתייה</h1></Link>
      </ListItem>
      <Divider light />
      <ListItem sx={div} button>
      <Food/>
      <Link  to="extras"><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:90}}>תוספות</h1></Link>
      </ListItem>
    </List>
    </div>
  );
}
