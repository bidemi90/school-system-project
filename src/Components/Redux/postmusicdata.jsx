import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetchingmusic: false,
  allmusicdata: [],
  isFeatchingmusicfailed: null,
  
  isFetchingmusicplaylist: false,
  allmusicdataplaylist: [],
  isFeatchingmusicplaylistfailed: null,

};

export const postmusicdata = createSlice({
  name: "music",
  initialState,
  reducers: {
    featchingmusic: (state) => {
      state.isFetchingmusic = true;
      state.allmusicdata = [];
      state.isFeatchingmusicfailed = null;
    },
    featchingmusicSuccessful: (state, action) => {
      state.isFetchingmusic = false;
      state.allmusicdata = action.payload;
      state.isFeatchingmusicfailed = null;
    },
    featchingmusicfailed: (state, action) => {
      state.isFetchingmusic = false;
      state.allmusicdata = [];
      state.isFeatchingmusicfailed = action.payload;
    },
  
    featchingmusicplaylist: (state) => {
      state.isFetchingmusicplaylist = true;
      state.allmusicdataplaylist = [];
      state.isFeatchingmusicplaylistfailed = null;
    },
    featchingmusicplaylistSuccessful: (state, action) => {
      state.isFetchingmusicplaylist = false;
      state.allmusicdataplaylist = action.payload;
      state.isFeatchingmusicplaylistfailed = null;
    },
    featchingmusicplaylistfailed: (state, action) => {
      state.isFetchingmusicplaylist = false;
      state.allmusicdataplaylist = [];
      state.isFeatchingmusicplaylistfailed = action.payload;
    },
  },
});

export default postmusicdata.reducer;
export const { featchingmusic, featchingmusicSuccessful, featchingmusicfailed,featchingmusicplaylist,featchingmusicplaylistSuccessful,featchingmusicplaylistfailed } =
  postmusicdata.actions;
