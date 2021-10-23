import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  mobileToggle: false,
};

export const sidebarSlice = createSlice({
  name: "sidebarToggle",
  initialState,
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
    mobileToggle: (state) => {
      state.mobileToggle = !state.mobileToggle;
    },
  },
});

export const { toggle, mobileToggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;
