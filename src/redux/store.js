import  NavbarSlice  from "@/app/features/navbar/navbarSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    toogle: NavbarSlice,
  },
});
