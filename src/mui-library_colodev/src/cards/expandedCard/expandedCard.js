import React from "react";
import "./expandedCard.css";

const ExpandedCard = (props) => {
  return (
    <div class='container' {...props}>
      {props.cardData.map((card) => (
        <div class='card'>
          <div class='face face1'>
            <div class='content'>
              <img src={card.img} />
              <h3>{card.title}</h3>
            </div>
          </div>
          <div class='face face2'>
            <div class='content'>
              <p>{card.subtitle}</p>
              <a onClick={() => card.func()}>{card.btn}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ExpandedCard.defaultProps = {
  cardData: [
    {
      title: "title",
      subtitle: "subtitle",
      btn: "btn",
      img: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
      func: () => {},
    },
    {
      title: "title",
      subtitle: "subtitle",
      btn: "btn",
      img: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
      func: () => {},
    },
    {
      title: "title",
      subtitle: "subtitle",
      btn: "btn",
      img: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
      func: () => {},
    },
  ],
};

export default ExpandedCard;
