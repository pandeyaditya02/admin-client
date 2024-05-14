import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "63701cc1f03239b7f700000e",
  type: "Dashboard",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { setMode, setType } = globalSlice.actions;

export default globalSlice.reducer;
