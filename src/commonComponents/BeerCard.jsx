import React from 'react';
import OpenButton from './OpenButton';
import FavouriteButton from './FavouriteButton';
import "../css/BeerCard.css"
/* eslint-disable react/prop-types */
function BeerCard({CardHeader, Information}) {
    return ( <div className="BeerCard">
        <h2>{CardHeader}</h2>
        <p>{Information}</p>
        <OpenButton/> <FavouriteButton/>
        </div>
    )
}

export default BeerCard;