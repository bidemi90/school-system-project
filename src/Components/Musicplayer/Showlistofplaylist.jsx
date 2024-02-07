

import React, { useEffect, useState } from "react";
import Musicplayernav from "./Musicplayernav";
import { useDispatch, useSelector } from "react-redux";
import { allmusicplaylist } from "../Service/post";
import logo from "../../assets/images.png";
import Oneplaylist from "./Oneplaylist";

import { useNavigate } from "react-router-dom";

const Showlistofplaylist = () => {

  const dispatch = useDispatch();
  const Navigate=useNavigate()
  const {
    isFetchingmusicplaylist,
    allmusicdataplaylist,
    isFeatchingmusicplaylistfailed,
  } = useSelector((state) => state.postmusicdata);

  useEffect(() => {
    dispatch(allmusicplaylist);
  }, []);

 

  const openplaylist = (id) => {
   
    
    Navigate(`showoneplaylist/${id}`)


  };

  return (
    <div className=" sectionholderinmusicplayer text-light px-3 pt-3 rounded-start-4">
      <div className=" d-flex justify-content-between align-items-baseline">
        <p className=" fs-2 fw-bold text-capitalize m-0">playlist</p>
        <button className="btn btn-dark fw-bold text-capitalize">
          add to play list
        </button>
      </div>
      <hr />
      <div className=" d-flex flex-wrap">
        {isFetchingmusicplaylist && (
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

        <div id="mememe">
          {allmusicdataplaylist.map((item, index) => (
            <Oneplaylist
              thekey={item.id}
              img={logo}
              title={item.name}
              openplaylist={() => openplaylist(index)}
            />
          ))}
        </div>
        <div>{isFeatchingmusicplaylistfailed}</div>
      </div>
    </div>
  );
};

export default Showlistofplaylist;
