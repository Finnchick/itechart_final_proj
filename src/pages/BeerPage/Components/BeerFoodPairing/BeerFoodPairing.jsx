import React from "react";

import "./style.sass";

function BeerFoodPairing({ foodPairing }) {
  return (
    <div className="food-pairing">
      <h2>Food Pairing</h2>
      {foodPairing.map((string) => (
        <div key={foodPairing.indexOf(string)} className="test">
          <p key={foodPairing.indexOf(string)}>{string}</p>
        </div>
      ))}
    </div>
  );
}

export default BeerFoodPairing;
