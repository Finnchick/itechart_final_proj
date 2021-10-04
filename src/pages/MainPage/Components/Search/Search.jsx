import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FilterResults from "../FilterResults/FilterResults";
import "./style.sass";
/*eslint-disable*/
function Search({ test }) {
  const [areResultsActive, setAreResultsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function onClickHandler() {
    test(searchTerm);

    setAreResultsActive(true);
  }

  return (
    <div>
      <div className="search-box">
        <button className="btn-search" onClick={onClickHandler}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="text"
          className="input-search"
          placeholder="Type to Search..."
          onChange={handleChange}
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
