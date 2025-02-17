import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isSlideOpen: true, 
};
const sidebarSlice = createSlice({
  name: 'sidebar',  
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSlideOpen = !state.isSlideOpen;
    },
    setSidebarState: (state, action) => {
      state.isSlideOpen = action.payload;
    },
  },
});
export const { toggleSidebar, setSidebarState } = sidebarSlice.actions;
export default sidebarSlice.reducer;
