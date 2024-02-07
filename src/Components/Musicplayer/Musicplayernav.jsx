import React from "react";
import { GoHome } from "react-icons/go";
import { FaMusic } from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Musicplayernav = () => {
  return (
    <aside className="musicasidenav rounded-end-4 p-3">
      <Link
        to=""
        className=" d-flex text-capitalize  align-items-center my-2 p-2 btn btn-dark w-100"
      >
        <GoHome />
        <p className=" fw-semibold text-light m-0 mx-2 fs-5 ">home</p>
      </Link>
      <Link
        to="musiclibrary"
        className=" d-flex text-capitalize  align-items-center my-2 p-2 btn btn-dark w-100"
      >
        <FaMusic />
        <p className=" fw-semibold text-light m-0 mx-2 fs-5 ">music library</p>
      </Link>
      <Link
        to="musicplaylists"
        className=" d-flex text-capitalize  align-items-center my-2 p-2 btn btn-dark w-100"
      >
        <RiPlayListFill />
        <p className=" fw-semibold text-light m-0 mx-2 fs-5 ">playlist</p>
      </Link>
    </aside>
  );
};

export default Musicplayernav;
