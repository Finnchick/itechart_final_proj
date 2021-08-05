import React from 'react';
import Header from './Header';
import AppWrapper from './AppWrapper';
import Search from './commonComponents/Search';
import './sass/App.sass';
//import BeerCard from "./commonComponents/BeerCard";

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <AppWrapper />
    </div>
  );
}

export default App;
