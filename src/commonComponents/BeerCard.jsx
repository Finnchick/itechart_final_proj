import React from 'react';
import '../sass/BeerCard.sass';
import BeerCardButton from './BeerCardButton';
/* eslint-disable react/prop-types */
function BeerCard({ cardHeader, information, imageUrl }) {
  return (
    <div className="BeerCard">
      <img className="avatar" src={imageUrl} alt="Beer image"></img>
      <h2>{cardHeader}</h2>
      <p>{information}</p>
      <div className="beercardButtons">
        <BeerCardButton buttonText={'Open'} buttonClass={'beerCardButton'} />
        <BeerCardButton
          buttonText={'Favourite'}
          buttonClass={'beerCardButton'}
        />
      </div>
    </div>
  );
}

export default BeerCard;
