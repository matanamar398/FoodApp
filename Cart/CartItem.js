import React from 'react'
import colors from '../colors/colors'
const CartItem = (props) => {
    return (
        <div style={{height:170,marginLeft:10,width:'98%' ,backgroundColor:'#fff'}}>

              {/* image */}
              <img style= {{marginTop:5,width:150,height:150,float:'right'}}  src={props.item.image}></img>
      
                     {/* line */}



              {/* item name */}
              <h2  style={{fontSize:20 ,fontWeight:'bold'}} >{props.item.name}</h2>
             
             {/* price */}
             <h3 style={{fontSize:22,marginBottom:105,opacity:0.9}}>  <span style={{fontSize:17,opacity:0.8}}>  {props.item.quantity} x</span>  ₪{props.item.price} </h3>
           
            

        

              {/* line */}
              <div style={{backgroundColor:colors.blue,height:0.7,width:'100%'}}/>       



            
          </div>
    )
}

export default CartItem
