import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';
import userReducer from './userSlice';
import dealReducer from './dealSlice'; 
import marketReducer from './marketSlice';import salesReducer from './salescallSlice'


const store = configureStore({
  reducer: {
    deals: dealReducer,
    data: dataReducer,
    user: userReducer,
    market: marketReducer,
    sales: salesReducer
    
  },
});

export default store;


