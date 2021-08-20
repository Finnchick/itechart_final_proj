import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import BeerCard from './Components/BeerCard/BeerCard';
import Loading from '../../commonComponents/Loading/Loading';
import Search from './Components/Search/Search';
import './style.sass';

function MainPage() {
  const [dataT, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch('https://api.punkapi.com/v2/beers');
    const data = await response.json();
    setData(data);
  }, []);

  let beerCardsCollection = null;
  const history = useHistory();
  if (dataT) {
    beerCardsCollection = dataT.map((item) => {
      const {
        id,
        name: cardHeader,
        tagline: information,
        image_url: imageUrl,
      } = item;
      const openBeerPage = () => {
        history.push(`/beer/${id}`);
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
        {dataT ? (
          <React.Fragment>{beerCardsCollection}</React.Fragment>
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
}

export default MainPage;