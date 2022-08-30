import { configureStore } from "@reduxjs/toolkit";
import scramblerReducer from "./Modules/scrambler";

export const store = configureStore({
  reducer: {
    scrambler: scramblerReducer,
  },
});
