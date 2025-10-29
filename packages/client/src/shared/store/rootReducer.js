import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'shared/slices/authSlice.js';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
