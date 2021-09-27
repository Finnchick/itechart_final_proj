import React from "react";

import { Button } from "../../../../commonComponents";
import "./style.sass";

function BeerHead({ BeerName, BeerTagline, BeerDescription, BeerImgUrl }) {
  return (
    <div className="beer-page-card">
      <div className="beer-minimum-info">
        <h1>{BeerName}</h1>
        <h4>{BeerTagline}</h4>
        <Button buttonText="Add to favorites" className="beer-card-button" />
        <p>{BeerDescription}</p>
      </div>
      <div className="beer-avatar-box">
        <img src={BeerImgUrl} alt="Beer Image" className="beer-avatar" />
      </div>
    </div>
  );
}

export default BeerHead;
