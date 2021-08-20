import React from 'react';

import Slider from '../Slider/Slider';
import './style.sass';

function FilterResults({ isActive }) {
  return (
    <div className={isActive ? 'filter-results-active' : 'filter-results'}>
      <h3>Filter results</h3>
      <Slider />
      <Slider />
      <Slider />
    </div>
  );
}

export default FilterResults;