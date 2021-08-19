import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FilterResults from '../FilterResults/FilterResults';
import './style.sass';

function Search() {
  const [areResultsActive, setAreResultsActive] = useState(false);

  return (
    <div>
      <div className='search-box'>
        <button
          className='btn-search'
          onClick={() => setAreResultsActive(true)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type='text'
          className='input-search'
          placeholder='Type to Search...'
        />
      </div>
      <FilterResults
        isActive={areResultsActive}
        setActive={setAreResultsActive}
      />
    </div>
  );
}

export default Search;