// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk to fetch sales calls data
// export const fetchSalesCalls = createAsyncThunk('sales/fetchSalesCalls', async (userId) => {
//   const response = await axios.get(`https://iconesequipments.co.in/IconesSalesAPI/GetSalesCalls.php?User_Id=${userId}`);
//   return response.data;
// });

// const salesSlice = createSlice({
//   name: 'sales',
//   initialState: {
//     salesCalls: 0,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchSalesCalls.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchSalesCalls.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.salesCalls = action.payload; // Adjust this if the API response structure is different
//       })
//       .addCase(fetchSalesCalls.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default salesSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get(
    'https://iconesequipments.co.in/IconesSalesAPI/GetSalesCalls.php?User_Id=1'
  );
  console.log(response);
  return response.data;
  
});

// Create a slice
const salesSlice = createSlice({
  name: 'sales',
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

export default salesSlice.reducer;
