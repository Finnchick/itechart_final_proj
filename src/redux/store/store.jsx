import { configureStore } from '@reduxjs/toolkit';

import beerReducer from '../slices/beerDataSlice';

export default configureStore({
  reducer: {
    beerReducer,
  },
});
