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
import data from '../backend/data/data';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',

  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FavoritesPics() {
  const [expanded, setExpanded] = React.useState(false);
  const {productItems} = data;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        
          <h1 style={{marginLeft:75 ,color:'#000000',fontSize:25}}>{productItem.price}₪</h1>
        </IconButton>
      </CardActions>
    </Card>
    </Grid>

     ))}
     </Grid>

     </div>
  );
}
