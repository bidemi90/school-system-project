import React, { useEffect, useState } from "react";
import Musicplayernav from "./Musicplayernav";
import Onemusicfile from "./Onemusicfile";
import { useDispatch, useSelector } from "react-redux";
import { allmusic } from "../Service/post";
import logo from "../../assets/images.png"
import Player from "./Player";
import {  changearray, changevalue } from "../Redux/indexofmusic";

const Musichome = (props) => {
  
  const dispatch=useDispatch();
const {musicindex,themusicarray}=useSelector((state)=>state.indexofmusic)

const { isFetchingmusic, allmusicdata, isFeatchingmusicfailed } = useSelector(
  (state) => state.postmusicdata
);


    const playonemusic=(id)=>{
        dispatch(changevalue(Number(id)))
        console.log(musicindex);
      }

      useEffect(() => {
        dispatch(allmusic);
      }, []);
      useEffect(() => {
        dispatch(changearray(allmusicdata))
        console.log(themusicarray);
      }, [allmusicdata])
      

  return (
    <div className=" sectionholderinmusicplayer text-light px-3 pt-3 rounded-start-4">
    <div className=" d-flex justify-content-between align-items-baseline"> 
    <p className=" fs-1 fw-bold text-capitalize m-0">home</p>
     <p className=" fs-4 text-capitalize fw-semibold m-0">all music</p>
    </div>
     <hr />
      <div className=" d-flex flex-wrap">
      {isFetchingmusic && 
       <div className=" d-flex flex-column">
      <div className="spinner-grow bg-dark d-block d-flex justify-content-center align-items-center" style={{width: "3rem", height: "3rem"}} role="status">
      <div className="spinner-grow thebackground d-block" style={{width: "1.5rem", height: "1.5rem"}} role="status">
        
        </div>
      </div>
      <p className="d-block">Loading...</p>
      </div>
      }
      

        {allmusicdata.map((item, index) => (
          <Onemusicfile thekey={item.id} img={
            
          
            item.audioimg == ""
                ? logo
                : item.audioimg
          
          } 
          title={item.name} author={item.author}

          playonemusic={() => playonemusic(index)}
          />
        ))}
        <div>
          {isFeatchingmusicfailed}
        </div>
      </div>
      </div>
  )
}

export default Musichome