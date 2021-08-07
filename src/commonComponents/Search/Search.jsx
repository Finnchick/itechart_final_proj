import React, { useState } from 'react';
import FilterResults from '../FilterResults/FilterResults';
//import loading from './icons8-search.svg';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Search.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Search() {
  const [resultsAcitve, setResultsActive] = useState(false);

  return (
    <div>
      <div className="search-box">
        <script
          src="https://kit.fontawesome.com/a8db9ba565.js"
          crossOrigin="anonymous"
        ></script>
        <button className="btn-search" onClick={() => setResultsActive(true)}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
        ></input>
      </div>
      <FilterResults isActive={resultsAcitve} setActive={setResultsActive} />
    </div>
  );
}

export default Search;
