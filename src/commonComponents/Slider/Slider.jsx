import React from 'react';
import './Slider.sass';

function Slider() {
  return (
    <div>
      <input type="range" id="volume" name="volume" min="0" max="11"></input>
      <label hemlFor="volume">Volume</label>
    </div> //React fragment if no styles for div
  );
}

export default Slider;
