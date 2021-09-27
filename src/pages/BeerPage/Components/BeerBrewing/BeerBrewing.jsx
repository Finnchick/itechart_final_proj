import React from "react";

import "./style.sass";

function BeerBrewing({ brewerTips }) {
  return (
    <div>
      <h2>Brewing</h2>
      <p>{brewerTips}</p>
    </div>
  );
}

export default BeerBrewing;
