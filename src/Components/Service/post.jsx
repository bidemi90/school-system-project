import axios from "axios";

import { featchingpost,featchingpostSuccessful,featchingpostfailed } from "../Redux/postdata";
import { featchingmusic,featchingmusicSuccessful,featchingmusicfailed } from "../Redux/postmusicdata";
import { featchingmusicplaylist,featchingmusicplaylistSuccessful,featchingmusicplaylistfailed } from "../Redux/postmusicdata";
export const allpost = (dispatch)=>{
    dispatch(featchingpost())
    setTimeout(() => {
        axios.get("http://localhost:9999/posts").then((res) => {
        dispatch(featchingpostSuccessful(res.data))
        // alert("Fetched successfully")
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
        dispatch(featchingpostfailed(err.message))
        console.log(err.message);
      })
      }, 5000);
}


export const allmusic = (dispatch)=>{
    dispatch(featchingmusic())
    setTimeout(() => {
        axios.get("http://localhost:9999/allmusic").then((res) => {
        dispatch(featchingmusicSuccessful(res.data))
        // alert("Fetched successfully")
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
        dispatch(featchingmusicfailed(err.message))
        console.log(err.message);
      })
      }, 0);
}
export const allmusicplaylist = (dispatch)=>{
    dispatch(featchingmusicplaylist())
    setTimeout(() => {
        axios.get("  http://localhost:9999/musicplaylist").then((res) => {
        dispatch(featchingmusicplaylistSuccessful(res.data))
        // alert("Fetched successfully")
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
        dispatch(featchingmusicplaylistfailed(err.message))
        console.log(err.message);
      })
      }, 0);
}