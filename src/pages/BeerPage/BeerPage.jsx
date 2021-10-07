import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import BeerHead from './Components/BeerHead/BeerHead';
import BeerSpecification from './Components/BeerSpecification/BeerSpecification';
import BeerBrewing from './Components/BeerBrewing/BeerBrewing';
import BeerIngredients from './Components/BeerIngredients/BeerIngredients';
import BeerMethod from './Components/BeerMethod/BeerMethod';
import { fetchAllData } from '../../redux/thunks/thunks';
import { Loading } from '../../commonComponents';
import { selectBeerById } from '../../redux/selectors/selectors';
import './style.sass';

function BeerPage() {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => dispatch(fetchAllData()), []);

  const beer = useSelector(selectBeerById(id));

  return beer ? (
    <div className='beer-page-wrapper'>
      <BeerHead
        beerName={beer.name}
        beerDescription={beer.description}
        beerImgUrl={beer.image_url}
        beerTagline={beer.tagline}
      />
      <BeerSpecification
        foodPairing={beer.food_pairing}
        ibu={beer.ibu}
        abv={beer.abv}
        ebc={beer.ebc || 0}
      />
      <BeerBrewing brewerTips={beer.brewers_tips} />
      <div className='preparing'>
        <BeerIngredients ingredients={beer.ingredients} />
        <BeerMethod method={beer.method} />
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default BeerPage;
