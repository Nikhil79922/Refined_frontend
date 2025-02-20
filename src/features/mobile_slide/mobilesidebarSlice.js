import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  ismobileSlideOpen: true, 
};
const mobilesidebarSlice = createSlice({
  name: 'mobilesidebar',  
  initialState,
  reducers: {
    togglemobileSidebar: (state) => {
      state.ismobileSlideOpen = !state.ismobileSlideOpen;
    },
    setmobileSidebarState: (state, action) => {
      state.ismobileSlideOpen = action.payload;
    },
  },
});
export const { togglemobileSidebar, setmobileSidebarState } = mobilesidebarSlice.actions;
export default mobilesidebarSlice.reducer;
