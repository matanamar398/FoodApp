import React from 'react'
import colors from '../../colors/colors'
import PageName from '../../PageName/PageName'
import {useLocation} from "react-router-dom";
import { ReactComponent as Phone } from '../../backend/icons/phone2.svg'
import { ReactComponent as Clock } from '../../backend/icons/clock.svg'
import { ReactComponent as Map } from '../../backend/icons/map2.svg'
import CustomMap from '../../CustomMap/CustomMap';

const Store = () => {
    let location = useLocation();
    console.log(location);
    return (
        <div>
        <PageName name={"סניפים"}/>
            <div class="card text-center"  style={{backgroundColor:colors.navbar,color:colors.text,borderBottom:'1px solid'}}>
            <div class="card-header"  style={{fontWeight:'bold',fontSize:20,borderBottom:'1px solid',}} >
            {location.state.name}
            </div>
            <div class="card-body" >
                <h5 class="card-title" ><Map/> כתובת </h5>
                <p class="card-text" style={{}}>{location.state.adress} </p>
                <CustomMap/>
            </div>
            <div class="card-body">
                <h5 class="card-title"> <Phone/> טלפון </h5>
                <p class="card-text" style={{}}>{location.state.phone}</p>
            </div>
            <div class="card-body">
                <h5 class="card-title">  <Clock/>   שעות פתיחה </h5>
                <p class="card-text" style={{}}>א'-ה': 11:00-22:00
יום ו: סגור

מוצ"ש: סגור</p>
            </div>
            <a  style={{backgroundColor:colors.blue,color:colors.text,borderTop:'1px solid'}} href="branches" class="btn btn-primary">חזור</a>

            </div>
        </div>
    )
}

export default Store
