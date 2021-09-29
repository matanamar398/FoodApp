import React, { useRef } from 'react'
import PageName from '../PageName/PageName'
import colors from '../colors/colors';
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { ReactComponent as Trash} from '../backend/icons/trash.svg'
import PaymentInputs from '../PaymentInputs/PaymentInputs';
import {useLocation} from "react-router-dom";

const Cart = ({cartItems,handleCartClearance}) => {
  let location = useLocation();
  const [showStatements, setShowStatements] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
 

  const handleClick = () => {
    setOpen(true);
    handleCartClearance();
  };
  
  const showAlert = () =>{
    alert("yaron");

  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price,0);

    return (
        <div>
         <PageName name = "ההזמנה שלי"/>
         <div  style={{float:'center'}}>
         
      
      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items are added.</div>
      )}

      <div style={{border:'3px solid',borderColor:colors.blue,backgroundColor:'#fff',width:'50%',margin:'0 auto',maxHeight:1500 }} >
        {cartItems.map((item) => (

             <CartItem item={item}/>    

        ))}
          <div style={{textAlign:'center',marginTop:35,marginBottom:20}}>
          {cartItems.length ?
          <div>
          <Button onClick={handleClick} style={{width:130,height:40,marginRight:15}} variant="outlined" ><Trash/>מחק הזמנה</Button>
            <Button  onClick={() => setShowStatements(true)}  style={{width:130,height:40}} variant="outlined">סיום ולתשלום</Button>
            {showStatements ?
            <div>
            <Button onClick={showAlert}  style={{width:130,height:40}} variant="outlined">שלם</Button>
            <PaymentInputs />
              </div>
            :
           <div></div>
            }
          </div> 
          
          :
          <div></div>
          }
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
     הפריטים נמחקו בהצלחה מההזמנה
            </Alert>
          </Snackbar>


          
          <div style={{color:colors.blue,fontSize:36,textAlign:'center'}}>
         
         סה"כ
         <div  style={{color:colors.blue,fontSize:20,fontFamily:'cursive'}}> ₪{totalPrice.toFixed(2)}</div>
         </div>
          </div>
      
      
      </div>
    
    
    </div>
  
        </div>
    )
}

export default Cart
