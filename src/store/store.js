import { configureStore } from "@reduxjs/toolkit";
import skillsSlice from "./skillsSlice";

export const store = configureStore({
    reducer: {
      skillsReducer: skillsSlice,
    }
  }) 
