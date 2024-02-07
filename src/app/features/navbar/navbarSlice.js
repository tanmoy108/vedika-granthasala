import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
};

export const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setIsOpen: (state) => {
          state.status = !state.status
    },
  },
});

export const { setIsOpen } = NavbarSlice.actions;
export const SelectStatus = (state) => state.toogle.status;
export default NavbarSlice.reducer;
