// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebar/sidebarSlice';  // Import the sidebar reducer

// Configure the Redux store
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,  // Adding the sidebar reducer to the store
  },
});

export default store;  // Export the store
