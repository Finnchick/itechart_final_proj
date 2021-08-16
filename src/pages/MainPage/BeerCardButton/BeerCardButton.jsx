import React from 'react';
import './style.sass';
import {useHistory} from "react-router-dom";


/* eslint-disable react/prop-types */
function BeerCardButton({ id, buttonText, buttonClass}) {
  let history = useHistory()

  function handleClick() {
    history.push(`/beer/${id}`);
  }

  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default BeerCardButton;