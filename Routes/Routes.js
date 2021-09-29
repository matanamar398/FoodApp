import React from 'react'
import { Switch, Route } from "react-router-dom";
import  CentralWrapper from "../CentralWrapper/CentralWrapper"
import Menu from '../Menu/Menu'
import Branches from '../Branches/Branches'
import Store from '../Branches/Store/Store'
import Favorites from '../Favorites/Favorites';
import Sales from '../Sales/Sales';
import Cart from '../Cart/Cart';

// menu components:
import Meals from '../Menu/Meals/Meals';
import Salads from '../Menu/Salads/Salads';
import Dessrst from '../Menu/Dessrst/Dessrst';
import Drinks from '../Menu/Drinks/Drinks';
import Extras from '../Menu/Extras/Extras';


function Routes({cartItems,handleAddProduct, handleCartClearance}) {
    return (
        <div>
        <Switch>

        <Route path="/" exact>
        <CentralWrapper/>
        </Route>

        <Route path="/menu" exact>
        <Menu />
        </Route>
        
        <Route path="/branches" exact>
        <Branches/>
        </Route>


        <Route  path="/store" exact>
        <Store />
        </Route>

        <Route  path="/favorites" exact>
        <Favorites />
        </Route>


        <Route  path="/sales" exact>
        <Sales />
        </Route>

        
        <Route  path="/cart" exact>
        <Cart  handleCartClearance={handleCartClearance}  cartItems={cartItems}/>
        </Route>

       
        {/* Menu Routes */}
            
        <Route  path="/meals" exact>
        <Meals  handleAddProduct={handleAddProduct} />
        </Route>

        <Route  path="/salads" exact>
        <Salads handleAddProduct={handleAddProduct} />
        </Route>
    
        <Route  path="/desserst" exact>
        <Dessrst handleAddProduct={handleAddProduct}/>
        </Route>


        <Route  path="/drinks" exact>
        <Drinks handleAddProduct={handleAddProduct} />
        </Route>

        <Route  path="/extras" exact>
        <Extras handleAddProduct={handleAddProduct} />
        </Route>

        </Switch>
        </div>
    )
}

export default Routes
