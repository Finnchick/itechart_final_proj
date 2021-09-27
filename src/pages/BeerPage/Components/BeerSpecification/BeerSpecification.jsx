import React from "react";

import BeerProperties from "../BeerProperties/BeerProperties";
import BeerFoodPairing from "../BeerFoodPairing/BeerFoodPairing";
import "./style.sass";

function BeerSpecification({ ABVValue, IBUValue, EBCValue, foodPairing }) {
  return (
    <div className="beer-specification">
      <BeerProperties
        ABVValue={ABVValue}
        EBCValue={EBCValue}
        IBUValue={IBUValue}
      />
      <BeerFoodPairing foodPairing={foodPairing} />
    </div>
  );
}

export default BeerSpecification;
