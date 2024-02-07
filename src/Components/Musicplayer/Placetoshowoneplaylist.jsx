import React, { useEffect, useState } from "react";
import Musicplayernav from "./Musicplayernav";
import { useDispatch, useSelector } from "react-redux";
import { allmusicplaylist } from "../Service/post";
import logo from "../../assets/images.png";
import Oneplaylist from "./Oneplaylist";
import { collectlist, collectname } from "../Redux/oneplaylist";
import { GoPlay } from "react-icons/go";
import {  changearray, changevalue } from "../Redux/indexofmusic";
import Musicaxios from "./Musicaxios";
import { useParams } from "react-router-dom";




const Placetoshowoneplaylist = () => {
  const { id } = useParams();
  console.log(id);


  const {data, loading} = Musicaxios(`http://localhost:9999/musicplaylist/${id}`)
  
  const dispatch = useDispatch();

  const {musicindex,themusicarray}=useSelector((state)=>state.indexofmusic)

  const { playlistname, playlistmusic } = useSelector(
    (state) => state.oneplaylist
  );


  
useEffect(() => {
 if (data!=null) {
  console.log(data);
  console.log(data.name);
  console.log(data.list);
   dispatch(collectname(data.name));
  dispatch(collectlist(data.list));
 }
  
}, [data])

useEffect(() => {
  dispatch(changearray(playlistmusic))
}, [musicindex])



  console.log(playlistmusic);
  console.log(playlistname);



  const playitid=(index)=>{
    console.log(index);
    dispatch(changevalue(Number(index)))
    console.log(musicindex);
  }

  useEffect(() => {
    dispatch(changearray(playlistmusic))
    console.log(themusicarray);
  }, [])

  return (
    <div className=" sectionholderinmusicplayer text-light px-3 pt-3 rounded-start-4">
      <div className=" d-flex justify-content-between align-items-baseline">
        <p className=" fs-2 fw-bold text-capitalize m-0">playlist</p>
        <button className="btn btn-dark fw-bold text-capitalize">
          add to play list
        </button>
      </div>
      <hr />
      
    <div className="holdingtable bg-dark p-3 rounded">
    {loading && (
          <div className=" d-flex flex-column">
            <div
              className="spinner-grow bg-dark d-block d-flex justify-content-center align-items-center"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <div
                className="spinner-grow thebackground d-block"
                style={{ width: "1.5rem", height: "1.5rem" }}
                role="status"
              ></div>
            </div>
            <p className="d-block">Loading...</p>
          </div>
        )}
    <table className="playlisttable">
    
        {playlistmusic.map((item,index)=>(
          <tr className="m-2 ">
          <td className="holdingimgforplaylisttable">
            <img className="imgintableforplaylist" src={
              
            item.audioimg == ""
            ? logo
            : item.audioimg
            } alt="" />
          </td>
          <td>
            <p>{item.name}</p>
          </td>
          <td className="d-flex justify-content-evenly align-items-center">
            <button 
            onClick={() => playitid(index)} 
            className="buttoninplaylist">
              
<GoPlay />
            </button>
            <button className="buttoninplaylist2">
              ||
            </button>
          </td>
          
        </tr>
        ))}
      </table>
    </div>
    </div>
  );
};

export default Placetoshowoneplaylist;
