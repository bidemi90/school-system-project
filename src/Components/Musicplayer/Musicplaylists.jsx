import React, { useEffect, useState } from "react";
import Musicplayernav from "./Musicplayernav";
import { useDispatch, useSelector } from "react-redux";
import { allmusicplaylist } from "../Service/post";
import logo from "../../assets/images.png";
import Oneplaylist from "./Oneplaylist";
import { collectlist, collectname } from "../Redux/oneplaylist";
import { useNavigate } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import Showlistofplaylist from "./Showlistofplaylist";
import Placetoshowoneplaylist from "./Placetoshowoneplaylist";

const Musicplayerhome = () => {
 

  return (
    
<Routes>
        <Route path="" element={<Showlistofplaylist />}></Route>
        <Route path="showoneplaylist/:id" element={<Placetoshowoneplaylist />}></Route>
        
      </Routes>
  );
};

export default Musicplayerhome;
