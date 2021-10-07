import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllData, fetchByNamez } from '../../redux/thunks/thunks';
import {
  selectAllBeers,
  selectAllBeers1,
} from '../../redux/selectors/selectors';
import BeerCard from './Components/BeerCard/BeerCard';
import { Loading } from '../../commonComponents';
import Search from './Components/Search/Search';
import { BEER_PAGE } from '../../constants';
import './style.sass';

function MainPage() {
  const dispatch = useDispatch();

  const [test, setTest] = useState('');
  useEffect(() => dispatch(fetchAllData()), []);
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    dispatch(fetchByNamez(test));
  }, [test]);
  let beerCardsCollection = useSelector(selectAllBeers);
  let test1 = useSelector(selectAllBeers1);

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

  if (test1) {
    test1 = test1.map((item) => {
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
      <Search test={setTest} />
      <div className='main-page'>
        {test1 ? (
          beerCardsCollection ? (
            <React.Fragment>{beerCardsCollection}</React.Fragment>
          ) : (
            <React.Fragment>{test1}</React.Fragment>
          )
        ) : (
          <Loading />
        )}
      </div>
    </React.Fragment>
  );
}

export default MainPage;
