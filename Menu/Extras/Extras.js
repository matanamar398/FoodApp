import React from 'react'
import PageName from '../../PageName/PageName'
import ExtraPics from './ExtraPics'
const Extras = ({handleAddProduct}) => {
    return (
        <div>
           <PageName name = "תוספות"/>
            <ExtraPics  handleAddProduct={handleAddProduct}/>
        </div>
    )
}

export default Extras
