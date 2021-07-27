import React from 'react';
import BeerCard from './commonComponents/BeerCard';
import "./css/AppWrapper.css"
/* eslint-disable react/prop-types */
function AppWrapper() {
    return ( <div className="AppWrapper"> 
    <BeerCard CardHeader={"Punk IPA 2007-2010"} Information={"Post modern Classic. Spiky. Tropical"}/>
    <BeerCard CardHeader={"Punk IPA 2007-2010"} Information={"Post modern Classic. Spiky. Tropical"}/>
    <BeerCard CardHeader={"Punk IPA 2007-2010"} Information={"Post modern Classic. Spiky. Tropical"}/>
    <BeerCard CardHeader={"Punk IPA 2007-2010"} Information={"Post modern Classic. Spiky. Tropical"}/>
    </div>
    )
}

export default AppWrapper;