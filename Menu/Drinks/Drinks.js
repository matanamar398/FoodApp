import React from 'react'
import PageName from '../../PageName/PageName'
import DrinkPics from './DrinkPics'

const Drinks = ({handleAddProduct}) => {
    return (
        <div>
         <PageName name="שתייה"/>
        <DrinkPics handleAddProduct={handleAddProduct}/>
        </div>
    )
}

export default Drinks
