import { configureStore } from "@reduxjs/toolkit";
import Reduxtest from "./Reduxtest";
import postdata from "./postdata";
import  postmusicdata  from "./postmusicdata";
import indexofmusic from "./indexofmusic";
import oneplaylist from "./oneplaylist";
export const Store = configureStore({
    reducer: {
        Reduxtest,
        postdata,
        postmusicdata,
        indexofmusic,
        oneplaylist
        
    },
  }) 