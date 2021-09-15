import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './commonComponents';
import BeerPage from './pages/BeerPage/BeerPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import MainPage from './pages/MainPage/MainPage';
import { HOME, FAVORITES, BEER_PAGE } from './constants';
import './sass/App.sass';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <Switch>
          <Route path={BEER_PAGE}>
            <BeerPage beerName='Mocha' />
          </Route>
          <Route path={FAVORITES}>
            <FavoritesPage />
          </Route>
          <Route path={HOME}>
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
