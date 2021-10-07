import React from 'react';

import './style.sass';

function BeerIngredients({ ingredients }) {
  const MALT = ingredients.malt.map((maltItem) => {
    let { name } = maltItem;
    let { value, unit } = maltItem.amount;

    return (
      <p key={ingredients.malt.indexOf(maltItem)}>
        {`${name} - ${value} ${unit}`}
      </p>
    );
  });

  const HOPS = ingredients.hops.map((hopsItem) => {
    let { name, add } = hopsItem;
    let { value, unit } = hopsItem.amount;

    return (
      <p key={ingredients.hops.indexOf(hopsItem)}>
        {`${name} - ${value} ${unit}, add when 
              ${add}`}
      </p>
    );
  });

  return (
    <div className='ingredients'>
      <h2>Ingredients</h2>

      <h3>Water</h3>
      <p>25 litres</p>

      <h3>Malt</h3>
      {MALT}

      <h3>Hops</h3>
      <p>{HOPS}</p>

      <h3>Yeast</h3>
      <p>{ingredients.yeast}</p>
    </div>
  );
}

export default BeerIngredients;
