import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "./commonComponents";
import BeerPage from "./pages/BeerPage/BeerPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import MainPage from "./pages/MainPage/MainPage";
import { HOME, FAVORITES, BEER_PAGE } from "./constants";
import "./sass/App.sass";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path={BEER_PAGE}>
          <BeerPage />
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
