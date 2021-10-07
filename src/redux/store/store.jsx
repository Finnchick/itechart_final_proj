import { configureStore } from '@reduxjs/toolkit';

import beerReducer from '../slices/beerDataSlice';
import searchReducer from '../slices/beerSearchedSlice';

export default configureStore({
  reducer: {
    beerReducer,
    searchReducer,
  },
});
