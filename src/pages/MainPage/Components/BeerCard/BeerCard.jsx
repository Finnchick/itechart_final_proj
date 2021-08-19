import React from 'react';

import Button from '../../../../commonComponents/Button/Button';
import './style.sass';

function BeerCard({ cardHeader, information, imageUrl, openButtonCallback }) {
  return (
    <div className='beer-card'>
      <img className='avatar' src={imageUrl} alt='Beer image' />
      <h2>{cardHeader}</h2>
      <p>{information}</p>
      <div className='buttons-container'>
        <Button
          buttonText='Open'
          className='beerCardButton'
          onClick={openButtonCallback}
        />
        <Button buttonText='Favourite' className='beerCardButton' />
      </div>
    </div>
  );
}

export default BeerCard;