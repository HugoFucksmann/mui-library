import React from "react";
import "./gradiantPurpleText.css";

const GradiantPurpleText = (props) => {
  return (
    <h1 className='gradiantPurple' {...props}>
      {props.children}
    </h1>
  );
};

export default GradiantPurpleText;
