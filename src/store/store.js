import { configureStore } from "@reduxjs/toolkit";
import photosSlice from "./photosSlice";

export const store = configureStore({
    reducer: {
      photosReducer: photosSlice,
    }
  }) 
