import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchWithoutParams } from '../../constants';

export const fetchAllData = createAsyncThunk('beers/fetchAllData', async () => {
  const response = await fetch(fetchWithoutParams);
  return response.json();
});
