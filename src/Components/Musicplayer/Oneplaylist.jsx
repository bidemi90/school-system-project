import React from "react";
import { GoPlay } from "react-icons/go";

const Oneplaylist = (props) => {
  const { openplaylist } = props;

  return (
    <div key={props.thekey} className="bg-dark rounded p-3 onemusic position-relative">
      <img src={props.img} alt="" className="onemusicimg rounded" />
      <p className="fw-semibold w-100 showtext fs-5 text-capitalize m-0">
        {props.title}
      </p>

      <button className="onemusicbutton" onClick={openplaylist}>
        <GoPlay />
      </button>
      
    </div>
  );
};

export default Oneplaylist;
