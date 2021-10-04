import { configureStore } from "@reduxjs/toolkit";
import BeerReducer from "../slices/beerDataSlice";

export default configureStore({
  reducer: {
    BeerReducer,
  },
});
