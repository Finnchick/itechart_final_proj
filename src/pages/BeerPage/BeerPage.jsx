import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import BeerHead from "./Components/BeerHead/BeerHead";
import BeerSpecification from "./Components/BeerSpecification/BeerSpecification";
import BeerBrewing from "./Components/BeerBrewing/BeerBrewing";
import BeerIngredients from "./Components/BeerIngredients/BeerIngredients";
import BeerMethod from "./Components/BeerMethod/BeerMethod";
import { fetchAllData } from "../../redux/thunks/thunks";
import { Loading } from "../../commonComponents";
import { selectBeerById } from "../../redux/selectors/selectors";
import "./style.sass";

function BeerPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  let id = location.pathname.split("/").slice(-1)[0]; //do this immutable

  useEffect(() => dispatch(fetchAllData()), []);

  const beer = useSelector(selectBeerById(id));

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
        ibuvalue={beer.ibu}
        abvvalue={beer.abv}
        ebcvalue={beer.ebc || 0}
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
