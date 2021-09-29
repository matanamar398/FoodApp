import React ,{useState, useEffect} from 'react'
import { makeStyles } from '@mui/styles';
import hamburger1 from '../backend/images/burger.jpg'
import hamburger2 from '../backend/images/hamburger.jpg'
import hamburger3 from '../backend/images/hamburger2.jpg'
import SecondWrapper from '../SecondWrapper/SecondWrapper';

const CentralWrapper = () => {
    const classes = useStyles();
    let idx = 0
    const imagesArr =[hamburger1,hamburger2,hamburger3]
    const [pic,setPicture] = useState(hamburger3);

 

    useEffect(() => {
        const interval = setInterval(() => { 
            setPicture(imagesArr[idx++]);
            
            if (idx == 3)   
                idx =0;    
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div >   
         <img className={classes.hamburger} src = {pic}></img>
         <SecondWrapper/>
        </div>
    )
}

export default CentralWrapper;



const useStyles = makeStyles(() => ({
  
    hamburger:{
        width:'100%',
        height:900,

    },

}))