import React from "react";

import "./style.sass";

function BeerProperties({ ABVValue, IBUValue, EBCValue }) {
  return (
    <div className="properties">
      <h2>Properties</h2>
      <div className="property-value">
        <p>ABV</p> <p>{ABVValue}</p>
      </div>
      <div className="property-value">
        <p>IBU</p> <p>{IBUValue}</p>{" "}
      </div>
      <div className="property-value">
        <p>EBC</p> <p>{EBCValue}</p>
      </div>
    </div>
  );
}

export default BeerProperties;
