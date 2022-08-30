import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrambling: false,
};

export const scramblerSlice = createSlice({
  name: "scrambler",
  initialState,
  reducers: {
    startScrambling: (state) => {
      state.scrambling = true;
    },
    stopScrambling: (state) => {
      state.scrambling = false;
    },
  },
});

export const { startScrambling, stopScrambling } = scramblerSlice.actions;

export default scramblerSlice.reducer;
