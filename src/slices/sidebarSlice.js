import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

export const sidebarSlice = createSlice({
  name: "sidebarToggle",
  initialState,
  reducers: {
    hide: (state) => {
      state.toggle = false;
    },
    show: (state) => {
      state.toggle = true;
    },
  },
});

export const { hide, show } = sidebarSlice.actions;
export default sidebarSlice.reducer;
