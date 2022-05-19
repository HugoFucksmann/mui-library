import React, { useEffect } from "react";
import "./bgGridMosaico.css";

const array = Array.from(Array(200).keys());

const BgGridMosaico = () => {
  return (
    <span className='background'>
      {array.map((num) => (
        <span key={num}></span>
      ))}
    </span>
  );
};

export default BgGridMosaico;
