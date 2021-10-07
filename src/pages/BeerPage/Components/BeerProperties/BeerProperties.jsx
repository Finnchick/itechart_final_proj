import React from 'react';

import './style.sass';

function BeerProperties({ abv, ibu, ebc }) {
  return (
    <div className='properties'>
      <h2>Properties</h2>
      <div className='property-value'>
        <p>ABV</p> <p>{abv}</p>
      </div>
      <div className='property-value'>
        <p>IBU</p> <p>{ibu}</p>
      </div>
      <div className='property-value'>
        <p>EBC</p> <p>{ebc}</p>
      </div>
    </div>
  );
}

export default BeerProperties;
