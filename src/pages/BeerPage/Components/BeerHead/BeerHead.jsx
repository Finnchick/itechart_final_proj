import React from 'react';

import { Button } from '../../../../commonComponents';
import './style.sass';

function BeerHead({ beerName, beerTagline, beerDescription, beerImgUrl }) {
  return (
    <div className='beer-page-card'>
      <div className='beer-minimum-info'>
        <h1>{beerName}</h1>
        <h4>{beerTagline}</h4>
        <Button buttonText='Add to favorites' className='beer-card-button' />
        <p>{beerDescription}</p>
      </div>
      <div className='beer-avatar-box'>
        <img src={beerImgUrl} alt='Beer Image' className='beer-avatar' />
      </div>
    </div>
  );
}

export default BeerHead;
