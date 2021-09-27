import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../../redux/beerDataSlice";

import BeerCard from "./Components/BeerCard/BeerCard";
import { Loading } from "../../commonComponents";
import Search from "./Components/Search/Search";
import { BEER_PAGE } from "../../constants";
import "./style.sass";

function MainPage() {
  const dispatch = useDispatch();
  useEffect(
    () => dispatch(fetchAllData("https://api.punkapi.com/v2/beers")),
    []
  );

  let beerCardsCollection = useSelector((state) => state.BeerReducer.beerData);

  const history = useHistory();
  if (beerCardsCollection) {
    beerCardsCollection = beerCardsCollection.map((item) => {
      const {
        id,
        name: cardHeader,
        tagline: information,
        image_url: imageUrl,
      } = item;
      const openBeerPage = () => {
        history.push(`${BEER_PAGE}/${id}`);
      };

      return (
        <BeerCard
          key={id}
          cardHeader={cardHeader}
          information={information}
          imageUrl={imageUrl}
          openButtonCallback={openBeerPage}
        />
      );
    });
  }

  return (
    <React.Fragment>
      <Search />
      <div className="main-page">
        {beerCardsCollection ? (
          <React.Fragment>{beerCardsCollection}</React.Fragment>
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
}

export default MainPage;
