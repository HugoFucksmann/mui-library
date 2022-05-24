import React from "react";
import "./text3d.css";

const Text3d = (props) => {
  return (
    <h1 className='txt3d' {...props}>
      {props.children}
    </h1>
  );
};

export default Text3d;
