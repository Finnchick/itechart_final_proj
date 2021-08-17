import React from 'react';
import Header from './commonComponents/Header/Header';
import './sass/App.sass';
import { Route, Switch } from 'react-router-dom';
import { HOME, FAVORITES, BEER_PAGE } from './constants';

import BeerPage from './pages/BeerPage/BeerPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import MainPage from './pages/MainPage/mainPage/MainPage';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path={BEER_PAGE}>
          <BeerPage beerName={'Mocha'} />
        </Route>
        <Route path={FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route path={HOME}>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;