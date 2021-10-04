import React from "react";

import BeerProperties from "../BeerProperties/BeerProperties";
import BeerFoodPairing from "../BeerFoodPairing/BeerFoodPairing";
import "./style.sass";

function BeerSpecification({ abvvalue, ibuvalue, ebcvalue, foodPairing }) {
  return (
    <div className="beer-specification">
      <BeerProperties
        ABVValue={abvvalue}
        EBCValue={ebcvalue}
        IBUValue={ibuvalue}
      />
      <BeerFoodPairing foodPairing={foodPairing} />
    </div>
  );
}

export default BeerSpecification;
