import { createSlice } from '@reduxjs/toolkit';
import { fetchByNamez } from '../thunks/thunks';

const beerSearchedSlice = createSlice({
  name: 'searchSlice',
  initialState: { searchData: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchByNamez.fulfilled, (state, action) => {
      state.searchData = [...action.payload];
    });
  },
});

export const { action, reducer } = beerSearchedSlice;

export default reducer;
