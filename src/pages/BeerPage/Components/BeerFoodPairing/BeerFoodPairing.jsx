import React from 'react';

import './style.sass';

function BeerFoodPairing({ foodPairing }) {
  const foodPairingList = foodPairing.map((string) => {
    let key = foodPairing.indexOf(string);
    return (
      <div key={key} className='foodPairing'>
        <p key={key}>{string}</p>
      </div>
    );
  });

  return (
    <div className='food-pairing'>
      <h2>Food Pairing</h2>
      {foodPairingList}
    </div>
  );
}

export default BeerFoodPairing;
