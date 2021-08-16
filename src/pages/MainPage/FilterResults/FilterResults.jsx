import React from 'react';
import Slider from '../Slider/Slider';
import './style.sass';

function FilterResults({ isActive }) {
  return (
    <div className={isActive ? 'filterResultsActive' : 'filterResults'}>
      <h3>Filter results</h3>
      <Slider />
      <Slider />
      <Slider />
    </div>
  );
}

export default FilterResults;