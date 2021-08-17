import React from 'react';
import './style.sass';

import BeerCardButton from '../BeerCardButton/BeerCardButton';

function BeerCard({ id, cardHeader, information, imageUrl }) {
  return (
    <div className='beerCard'>
      <img className='avatar' src={imageUrl} alt='Beer image' />
      <h2>{cardHeader}</h2>
      <p>{information}</p>
      <div className='beercardButtons'>
        <BeerCardButton buttonText={'Open'} buttonClass={'beerCardButton'} />
        <BeerCardButton
          id={id}
          buttonText='Favourite'
          buttonClass={'beerCardButton'}
        />
      </div>
    </div>
  );
}

export default BeerCard;