import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/CarSlice";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});