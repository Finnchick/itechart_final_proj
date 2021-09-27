import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import BeerHead from "./Components/BeerHead/BeerHead";
import BeerSpecification from "./Components/BeerSpecification/BeerSpecification";
import BeerBrewing from "./Components/BeerBrewing/BeerBrewing";
import BeerIngredients from "./Components/BeerIngredients/BeerIngredients";
import BeerMethod from "./Components/BeerMethod/BeerMethod";
import "./style.sass";
import { fetchAllData } from "../../redux/beerDataSlice";
import { Loading } from "../../commonComponents";

function BeerPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  let id = location.pathname.split("/"); //do this immutable
  id = id[id.length - 1];

  const selectBeerById = (state, id) => {
    return state.BeerReducer.beerData.find((obj) => obj.id === +id);
  };

  useEffect(
    () => dispatch(fetchAllData("https://api.punkapi.com/v2/beers")),
    []
  );

  const beer = useSelector((state) => selectBeerById(state, id));

  return beer ? (
    <div className="beer-page-wrapper">
      <BeerHead
        BeerName={beer.name}
        BeerDescription={beer.description}
        BeerImgUrl={beer.image_url}
        BeerTagline={beer.tagline}
      />
      <BeerSpecification
        foodPairing={beer.food_pairing}
        IBUValue={beer.ibu}
        ABVValue={beer.abv}
        EBCValue={beer.ebc || 0}
      />
      <BeerBrewing brewerTips={beer.brewers_tips} />
      <div className="preparing">
        <BeerIngredients ingredients={beer.ingredients} />
        <BeerMethod method={beer.method} />
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default BeerPage;
