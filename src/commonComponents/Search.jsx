import React from 'react';
import loading from './icons8-search.svg';
import '../sass/Search.sass';
function Search() {
  return (
    <div className="search-box">
      <script
        src="https://kit.fontawesome.com/a8db9ba565.js"
        crossOrigin="anonymous"
      ></script>
      <button className="btn-search">
        <img className="icon" src={loading} alt="kakova whoya"></img>
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Type to Search..."
      ></input>
    </div>
  );
}

export default Search;
