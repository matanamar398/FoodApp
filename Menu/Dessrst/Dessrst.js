import React from 'react'
import PageName from '../../PageName/PageName'
import DessrstPics from './DessrstPics'

const Dessrst = ({handleAddProduct}) => {
    return (
        <div>
         <PageName name="קינוחים"/> 
         <DessrstPics handleAddProduct={handleAddProduct}/>
        </div>
    )
}

export default Dessrst
