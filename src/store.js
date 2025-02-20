// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './features/sidebar/sidebarSlice';  // Import the sidebar reducer
import mobilesidebar  from "./features/mobile_slide/mobilesidebarSlice"

// Configure the Redux store
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,  // Adding the sidebar reducer to the store
    mobilesidebar:mobilesidebar
  },
});

export default store;  // Export the store
