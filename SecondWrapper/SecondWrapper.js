import React from 'react'
import { makeStyles } from '@mui/styles';
import colors from '../colors/colors';
import {ReactComponent as Burger2} from '../backend/icons/hamburger.svg'
import { ReactComponent as Food } from '../backend/icons/fast-food.svg';
import { ReactComponent as Cupcake } from '../backend/icons/cupcake.svg';


const SecondWrapper = () => {
    const classes = useStyles();

    return (
        <div className={classes.secondwrapper}>
        <Burger2  className={classes.hamburgericon}/>
        <Cupcake  className={classes.cupcake}/>
            <h1 className = {classes.text}>אתרו את סניף מי-בורגר הקרוב אליכם <br />והזמינו משלוח מי-בורגר שיגיע עד לפתח ביתכם</h1>
            <Food className={classes.food}/>

      
        </div>
    )
}

export default SecondWrapper





const useStyles = makeStyles(() => ({
  
    secondwrapper:{
        background:colors.navbar,
        width:'100%',
        height:'50vh',
      

    },
    text:{
        textAlign:'center',
        color:colors.text,
        fontFamily:'"Karantina, cursive"',
        fontSize:50,
        fontWeight:'bolder'
       
      },
      hamburgericon:{
        width:110,
        height:100,  
        transition: '2000ms',
        transform: 'rotate(-30deg)',
        marginLeft:60,
        marginTop:30,
        "&:hover": {
            transform: 'rotate(-360deg)',
            transition: '2000ms',

          },
    
      },
      food:{
        width:310,
        height:100,
        transition: '2000ms',
        transform: 'rotate(20deg)',
        float:'center',
        "&:hover": {
            transform: 'rotate(0deg)',
            transition: '2000ms',

          }, 
      },
    cupcake:{
        width:310,
        height:100,
        transition: '2000ms',
        transform: 'rotate(30deg)',
        float:'right',
        "&:hover": {
            transform: 'rotate(0deg)',
            transition: '2000ms',

          }, 


      },
      cr:{
        color:colors.text,
        fontFamily:'"Karantina, cursive"',
        fontSize:30,
        fontWeight:'bolder',
        position: 'relative',

        marginLeft: 'auto',
        marginRight: 'auto',
      },
}))