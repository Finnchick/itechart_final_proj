import React from "react";

import "./style.sass";

function BeerIngredients({ ingredients }) {
  const MALT = ingredients.malt.map((maltItem) => {
    return (
      <p key={ingredients.malt.indexOf(maltItem)}>
        {maltItem.name} - {maltItem.amount.value} {maltItem.amount.unit}
      </p>
    );
  });

  const HOPS = ingredients.hops.map((hopsItem) => {
    return (
      <p key={ingredients.hops.indexOf(hopsItem)}>
        {`"${hopsItem.name}" - ${hopsItem.amount.value} ${hopsItem.amount.unit}, add when 
              ${hopsItem.add}`}
      </p>
    );
  });

  return (
    <div className="ingredients">
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
