import React from 'react';

import BeerProperties from '../BeerProperties/BeerProperties';
import BeerFoodPairing from '../BeerFoodPairing/BeerFoodPairing';
import './style.sass';

function BeerSpecification({ abv, ibu, ebc, foodPairing }) {
  return (
    <div className='beer-specification'>
      <BeerProperties abv={abv} ebc={ebc} ibu={ibu} />
      <BeerFoodPairing foodPairing={foodPairing} />
    </div>
  );
}

export default BeerSpecification;
