import React from 'react'
import PageName from '../../PageName/PageName'
import SaladsPics from './SaladsPics'
const Salads = ({handleAddProduct}) => {
    return (
        <div>
         <PageName name = "ארוחות"/>
        <SaladsPics handleAddProduct={handleAddProduct}/>
        </div>
    )
}

export default Salads
