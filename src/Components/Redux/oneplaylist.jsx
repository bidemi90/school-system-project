import { createSlice } from "@reduxjs/toolkit";

const initialState={
    playlistname:"",
    playlistmusic:[]
};
export const Oneplaylist=createSlice({
    name:"oneplaylist",
    initialState,
    reducers:{
        collectname:(state,action)=>{
            state.playlistname=action.payload
        },
        collectlist:(state,action)=>{
            state.playlistmusic=action.payload
        }
    }
})
export const {collectlist,collectname}=Oneplaylist.actions;

export default Oneplaylist.reducer;