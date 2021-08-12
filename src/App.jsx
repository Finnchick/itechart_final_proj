import React from 'react';
import Header from './commonComponents/Header/Header';
import AppWrapper from './commonComponents/AppWrapper/AppWrapper';
import Search from './commonComponents/Search/Search';
import './sass/App.sass';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BeerPage from "./commonComponents/BeerPage/BeerPage";
import FavoritesPage from "./commonComponents/FavoritesPage/FavoritesPage";

function App() {
  return (
      <BrowserRouter>
    <div className="app">
        <Header />
        <Switch>
            <Route path="/beer">
                <BeerPage beerName={"Mocha"}/>
            </Route>
            <Route path='/favorites'>
                <FavoritesPage/>
            </Route>
            <Route path="/">
                <Search />
                <AppWrapper />
            </Route>
        </Switch>
    </div>
      </BrowserRouter>
  );
}

export default App;