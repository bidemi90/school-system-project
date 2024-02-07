import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicindex: null,
  themusicarray: [],
};
export const Indexofmusic = createSlice({
  name: "Indexofmusic",
  initialState,
  reducers: {
    changevalue: (state, action) => {
      state.musicindex = action.payload;
    },
    changearray: (state, action) => {
      state.themusicarray = action.payload;
    },
  },
});
export const { changevalue,changearray } = Indexofmusic.actions;

export default Indexofmusic.reducer;
