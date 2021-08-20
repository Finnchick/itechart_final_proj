import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import BeerCard from './Components/BeerCard/BeerCard';
import { Loading } from '../../commonComponents';
import Search from './Components/Search/Search';
import {BEER_PAGE} from "../../constants";
import './style.sass';

function MainPage() {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();
    setData(data);
  }, []);

  let beerCardsCollection;
  const history = useHistory();
  if (data) {
    beerCardsCollection = data.map((item) => {
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
      <div className='main-page'>
        {data ? (
          <React.Fragment>{beerCardsCollection}</React.Fragment>
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
}

export default MainPage;