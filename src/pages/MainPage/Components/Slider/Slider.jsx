import React, { useState } from 'react';

import './style.sass';

function Slider() {
  const [test, setTest] = useState();

  function handleChange(event) {
    setTest(event.target.value);
  }

  return (
    <React.Fragment>
      <span>{test}</span>
      <input
        type='range'
        id='volume'
        name='volume'
        min='0'
        max='100'
        onChange={handleChange}
      />
      <label htmlFor='volume'>Volume</label>
    </React.Fragment>
  );
}

export default Slider;
