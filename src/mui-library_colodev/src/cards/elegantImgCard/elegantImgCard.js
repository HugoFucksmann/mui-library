import React from "react";
import "./elegantImgCard.css";

function ElegantImgCard({ image, imgCol }) {
  const imgId = "imgid";

  return (
    <div class='wrapper'>
      <div class='flower_box'>
        <div class='image'>
          <img alt='image' src={image} id={imgId} />
        </div>
        <div class='right'>
          <h1>Harvest Vase</h1>
          <h5>by studio and friends</h5>
          <hr />
          <p>
            Harvest Vases are a reinterpretation of peeled fruits and vegetables
            as functional objects. The surfaces appear to be sliced and pulled
            aside, allowing room for growth.
          </p>
          <span>$78</span>
          <button style={{ backgroundColor: imgCol }}>buy now</button>
        </div>
      </div>
    </div>
  );
}

export default ElegantImgCard;
