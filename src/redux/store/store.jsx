import { configureStore } from '@reduxjs/toolkit';
import BeerReducer from '../beerDataSlice';

export default configureStore({
  reducer: {
    BeerReducer,
  },
});
