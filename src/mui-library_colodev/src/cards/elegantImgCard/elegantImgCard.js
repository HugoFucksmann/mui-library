import React from "react";
import "./elegantImgCard.css";

function ElegantImgCard(props) {
  const { image, imgcolor = "#dedede" } = props;

  return (
    <div {...props} className='cardd'>
      <div className='imiddiv' style={{ backgroundColor: "red" }}>
        <img
          alt='image'
          src={image}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className='imiddiv padding'>
        <h1 id='elegant-title'>Harvest Vase</h1>
        <h5 id='elegant-subtitle'>by studio and friends</h5>
        <hr />

        <p id='elegant-p'>
          Harvest Vases are a reinterpretation of peeled fruits and vegetables
          as functional objects. The surfaces appear to be sliced and pulled
          aside, allowing room for growth.
        </p>

        <button id='elegant-btn' style={{ backgroundColor: imgcolor }}>
          buy now
        </button>
      </div>
    </div>
  );
}

export default ElegantImgCard;
