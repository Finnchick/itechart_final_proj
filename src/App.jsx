import React from 'react';
import Header from './commonComponents/Header/Header';
import AppWrapper from './commonComponents/AppWrapper/AppWrapper';
import Search from './commonComponents/Search/Search';
import './sass/App.sass';

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
