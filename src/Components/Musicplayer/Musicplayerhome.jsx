import React, { useEffect, useState } from "react";
import Musicplayernav from "./Musicplayernav";
import { useDispatch, useSelector } from "react-redux";
import Player from "./Player";
import Musichome from "./Musichome";
import { Route, Routes, Navigate } from "react-router-dom";
import Musicplaylists from "./Musicplaylists";
import Placetoshowoneplaylist from "./Placetoshowoneplaylist";
import Musiclibrary from "./Musiclibrary";

const Musicplayerhome = () => {
  const dispatch = useDispatch();
  const [first, setfirst] = useState(null);
  const { musicindex, themusicarray } = useSelector(
    (state) => state.indexofmusic
  );
  console.log(musicindex);
  console.log(themusicarray);

  return (
    <section className=" d-flex justify-content-between  bg-dark">
      <Musicplayernav />

      <Routes>
        <Route path="" element={<Musichome />}></Route>
        <Route path="musiclibrary" element={<Musiclibrary />}></Route>
        <Route path="musicplaylists/*" element={<Musicplaylists />}></Route>
      </Routes>

      <Player audio={musicindex} allmusicdata={themusicarray} />
    </section>
  );
};

export default Musicplayerhome;
