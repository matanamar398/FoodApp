import React from 'react'
import PageName from '../../PageName/PageName'
import MealsPics from './MealsPics'

const Meals = ({handleAddProduct}) => {
    return (
        <div>
          <PageName name = "ארוחות"/>
            <MealsPics  handleAddProduct={handleAddProduct}/>
        </div>
    )
}

export default Meals
