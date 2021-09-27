import React from "react";

import "./style.sass";

function BeerMethod({ method }) {
  return (
    <div className="method">
      <h2>Method</h2>

      <h3>Mash</h3>
      {method.mash_temp.map((item) => {
        return (
          <p key={method.mash_temp.indexOf(item)}>
            {item.duration || 0} minutes at {item.temp.value}{" "}
            {item.temp.unit === "celsius" ? "℃" : "℉"}{" "}
          </p>
        );
      })}

      <h3>Fermentation</h3>
      <p>
        Perform at {method.fermentation.temp.value}
        {method.fermentation.temp.unit === "celsius" ? "℃" : "℉"}
      </p>

      {method.twist ? (
        <div>
          <h3>Twist</h3>
          <p>{method.twist}</p>
        </div>
      ) : null}
    </div>
  );
}

export default BeerMethod;
