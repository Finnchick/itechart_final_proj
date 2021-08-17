import React from 'react';
import './style.sass';

function Slider() {
  return (
    <React.Fragment>
      <input type='range' id='volume' name='volume' min='0' max='11' />
      <label htmlFor='volume'>Volume</label>
    </React.Fragment>
  );
}

export default Slider;