// src/features/deals/dealSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dealSlice = createSlice({
  name: 'deals',
  initialState: {
    currentDeals: [],
    selectedDeal: null,
  },
  reducers: {
    setDeals: (state, action) => {
      state.currentDeals = action.payload;
    },
    setSelectedDeal: (state, action) => {
      state.selectedDeal = action.payload;
    },
  },
});

export const { setDeals, setSelectedDeal } = dealSlice.actions;

export default dealSlice.reducer;
