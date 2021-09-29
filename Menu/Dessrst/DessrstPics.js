import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import DessrstData from './DessrstData'
import { ReactComponent as Plus } from '../../backend/icons/plus-circle.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',

  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




export default function DessrstPics({handleAddProduct}) {
  const [expanded, setExpanded] = React.useState(false);
  const {productItems} = DessrstData;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [open, setOpen] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  
  const handleClick = () => {
    setOpen(true);
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };

          <FavoriteIcon />

  return (

    <div style={{ flexGrow: 1,width: "95%",margin: "auto",fontFamily: "'Montserrat', sans-serif",textAlign: "-webkit-center",marginTop:25}}>
    <Grid container spacing={3}>
    {productItems.map((productItem) => (
        <Grid item xs={4} key={productItem.id}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={productItem.name}
     
      />
      <CardMedia
        component="img"
        height="150"
        image={productItem.image}
        alt={productItem.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productItem.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        

        <IconButton aria-label="share">
        
          <h1 style={{marginLeft:75 ,color:'#000000',fontSize:25}}>{productItem.price.toFixed(2)}₪</h1>

        </IconButton>
        <button onClick={() => handleAddProduct(productItem)} style={{cursor:"pointer", color:'#000000',fontSize:25,border:'none',backgroundColor:'#fff',opacity:0.7}}><Plus onClick={handleClick}/></button>
      </CardActions>
    </Card>
    </Grid>

     ))}
     </Grid>
     <Stack spacing={2} sx={{ width: '100%' }}>
    
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
הפריט נוסף להזמנה בהצלחה
      </Alert>
    </Snackbar>

  
  </Stack>
     </div>
  );
}
