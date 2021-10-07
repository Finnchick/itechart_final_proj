import React from 'react';

import { temperatureUnitCheck } from '../../../../utils';
import './style.sass';

function BeerMethod({ method }) {
  const MASH = method.mash_temp.map((item) => {
    let { duration } = item;
    let { value, unit } = item.temp;

    return (
      <p key={method.mash_temp.indexOf(item)}>
        {`${duration || 0} minutes at ${value} 
        ${temperatureUnitCheck(unit)}`}
      </p>
    );
  });

  return (
    <div className='method'>
      <h2>Method</h2>

      <h3>Mash</h3>
      {MASH}

      <h3>Fermentation</h3>
      <p>
        {`Perform at ${method.fermentation.temp.value} 
        ${temperatureUnitCheck(method.fermentation.temp.unit)}`}
      </p>

      {method.twist && (
        <div>
          <h3>Twist</h3>
          <p>{method.twist}</p>
        </div>
      )}
    </div>
  );
}

export default BeerMethod;
