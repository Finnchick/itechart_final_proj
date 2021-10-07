import { createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "../thunks/thunks";

const beerDataSlice = createSlice({
  name: "slice",
  initialState: { beerData: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllData.fulfilled, (state, action) => {
      state.beerData = [...action.payload];
    });
  },
});

export const { action, reducer } = beerDataSlice;

export default reducer;
