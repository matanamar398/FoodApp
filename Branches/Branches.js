import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import colors from '../colors/colors';
import { ReactComponent as Map } from '../backend/icons/map.svg'
import PageName from '../PageName/PageName';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom"; 


const wrapper = {
  width: '30%',
  marginTop:2,

  float:'right',

  bgcolor:colors.lightbrown,
  border:colors.text,

};



const div = {
  height:70,
  float:'right',
  borderBottom:'0.5px solid white',
  flexDirection:'row',
  justifyContent:'space-between'
};


export default function Branches() {
 

  return (
    <div>
    <PageName name="סניפים"/>
    <List  sx={wrapper} component="nav" aria-label="mailbox folders">
    <ListItem sx={div} button>
      <Map/>
      <Link to={{ pathname: "/store", state:{name:"ראשון לציון", phone:"1-700-700-600",adress:'קניון הסלע האדום' }}}><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:390,textDecoration:'none'}}>ראשון לציון</h1></Link>
      </ListItem>
      <ListItem sx={div} button divider>
      
        <Map/>
        <Link to={{ pathname: "/store", state:{name:"תל-אביב", phone:"1-700-700-610",adress:' תחנה מרכזית תל אביב' }}}><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:390,textDecoration:'none'}}>תל-אביב</h1></Link>

      </ListItem>
      <ListItem sx={div} button>
 
      <Map/>
      <Link to={{ pathname: "/store", state:{name:"אשדוד", phone:"1-700-700-666",adress:'הבנאי 2, קניון מגה אור רמי לוי' }}}><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:390,textDecoration:'none'}}>אשדוד</h1></Link>

      </ListItem>
      <ListItem sx={div} button>

      <Map/>
      <Link to={{ pathname: "/store", state:{name:"אילת", phone:"1-700-700-699",adress:'‏קניון עמקים' }}}><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:390,textDecoration:'none'}}>אילת</h1></Link>

      </ListItem>
      <Divider light />
      <ListItem sx={div} button>
     
      <Map/>
      <Link to={{ pathname: "/store", state:{name:"כפר סבא", phone:"1-700-700-800",adress:'קניון כפר סבא' }}}><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:390,textDecoration:'none'}}>כפר סבא</h1></Link>

      </ListItem>
      <ListItem sx={div} button>
     
      <Map/>
      <Link to={{ pathname: "/store", state:{name:"חיפה", phone:"1-700-700-900",adress:' תחנת אגד מרכזית חוף כרמל, חיפה' }}}><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:390,textDecoration:'none'}}>חיפה</h1></Link>

      </ListItem>
      <ListItem sx={div} button>
    
      <Map/>
      <Link to={{ pathname: "/store", state:{name:"רמת ישי", phone:"1-700-700-100",adress:'קניון מרום נווה, חיים לנדאו 7' }}}><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:390,textDecoration:'none'}}>רמת ישי</h1></Link>

      </ListItem>
      <ListItem sx={div} button>
    
      <Map/>
      <Link to={{ pathname: "/store", state:{name:"יקנעם", phone:"1-700-700-200",adress:'קניון יקנעם' }}}><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:390,textDecoration:'none'}}>יקנעם</h1></Link>

      </ListItem>
      <ListItem sx={div} button>
    
      <Map/>
      <Link to={{ pathname: "/store", state:{name:"קרית אתא", phone:"1-700-700-300",adress:'צומת ביג' }}}><h1 style = {{color:'#FFFBFF',fontSize:20,marginLeft:390,textDecoration:'none'}}>קרית אתא</h1></Link>

      </ListItem>
    </List>
    </div>
  );
}
