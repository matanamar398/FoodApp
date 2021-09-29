import React, {useState} from 'react'
import NavBar from './components/Navbar/NavBar';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './components/Routes/Routes';
import colors from './components/colors/colors';
import { makeStyles } from '@mui/styles';
import Footer from "./components/Footer/Footer"
import data from "./components/backend/data/data"


function App() {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const classes = useStyles();


  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id? { ...ProductExist, quantity: ProductExist.quantity + 1 }: item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  
  };
  console.log(cartItems);

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClearance = () => {
    setCartItems([]);
  };




  return (
    <div className={classes.App}>
    <Router>
    <NavBar />
    <Routes  handleCartClearance={handleCartClearance} cartItems={cartItems} handleAddProduct={handleAddProduct}/>
    </Router>
    {/* <Footer  style={{position:'absolute',bottom:'0px'}}/> */}
  
    </div>
  );
}

export default App;




  const useStyles = makeStyles(() => ({

    App:{
      backgroundColor:colors.wrapper,
      width:'auto',
      height:'135vh',
    
      },

  }))