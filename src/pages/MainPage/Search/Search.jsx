import React, { useState } from 'react';
import FilterResults from '../FilterResults/FilterResults';
//import loading from './icons8-search.svg';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './style.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Search() {
  const [resultsActive, setResultsActive] = useState(false);

  return (
    <div>
      <div className="search-box">
        <button className="btn-search" onClick={() => setResultsActive(true)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
    type="text"
    className="input-search"
    placeholder="Type to Search..."
    />
      </div>
      <FilterResults isActive={resultsActive} setActive={setResultsActive} />
    </div>
  );
}

export default Search;