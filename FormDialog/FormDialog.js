import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ReactComponent as Phone } from '../backend/icons/phone.svg'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React,{useRef,useState} from 'react'
import Alert from '@mui/material/Alert';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [alert, setAlert] = useState(null);

  const textInput = useRef();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSend= () => {
    if(!textInput.current.value)
      setAlert(true);

    else{
      setAlert(false);
      setOpen(false);
    }
   
  };
  
  
  return (
    <div>
      <Button  style = {{color:'#FFFBFF',fontSize:30,fontFamily:"Karantina, cursive" , marginRight:45}}  onClick={handleClickOpen}>צור קשר<Phone/></Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle dir="rtl">נשמח לעמוד לרשותך בכל שאלה</DialogTitle>
        <DialogContent>
          <DialogContentText dir="rtl"   >
          לרשותך ערוצי הפנייה הבאים:
          טלפון: 6992*. או מלא/י את הפרטים בטופס.
          השאירו פרטים ואנו נחזור אליכם בהקדם.
          </DialogContentText>
          <TextField 
            inputRef={textInput}
            autoFocus
            margin="dense"
            id="name"
            label="כתובת איימיל"
            type="email"
            fullWidth
            variant="standard"
            dir="rtl"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSend}>שלח</Button>
          <Button onClick={handleClose}>סגור</Button>
        </DialogActions>
      </Dialog>
      {alert &&
      <Alert style={{position:'absolute',top:'35vh',left:'25vh'}} severity="error">אנא הזן מייל לשליחה</Alert>
      }
      {alert == false &&
      <Alert style={{position:'absolute',top:'35vh',left:'25vh'}}  severity="success">נתוניך הוזנו במערכת נחזור  אלייך בהקדם</Alert>
      }
    </div>
  );
}
