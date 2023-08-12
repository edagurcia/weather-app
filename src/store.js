import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./features";

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});
