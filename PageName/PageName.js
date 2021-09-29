import React from 'react'
import colors from '../colors/colors';

const PageName = (props) => {
    return (
        <div>
        <h1 style={{backgroundColor:colors.blue,color:colors.text,height:100,textAlign:'center',marginTop:0,paddingTop:20,fontFamily:'cursive',fontSize:50,  borderBottom:'0.5px solid white',  borderTop:'0.5px solid white'

}}>{props.name}</h1>
        </div>
    )
}

export default PageName
