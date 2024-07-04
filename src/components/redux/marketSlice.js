import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get(
    'https://www.iconesequipments.co.in/IconesSalesAPI/GetMarkettingActivities.php'
  );
  return response.data;
});
// Create a slice
const marketSlice = createSlice({
  name: 'market',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default marketSlice.reducer;
