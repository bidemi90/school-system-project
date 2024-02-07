import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetchingpost: false,
  allpostdata: [],
  isFeatchingpostfailed: null,
};

export const postdata = createSlice({
  name: "post",
  initialState,
  reducers: {
    featchingpost: (state) => {
      state.isFetchingpost = true;
      state.allpostdata = [];
      state.isFeatchingpostfailed = null;
    },
    featchingpostSuccessful: (state, action) => {
      state.isFetchingpost = false;
      state.allpostdata = action.payload;
      state.isFeatchingpostfailed = null;
    },
    featchingpostfailed: (state, action) => {
      state.isFetchingpost = false;
      state.allpostdata = [];
      state.isFeatchingpostfailed = action.payload;
    },
  },
});

export default postdata.reducer;
export const { featchingpost, featchingpostSuccessful, featchingpostfailed } =
  postdata.actions;
