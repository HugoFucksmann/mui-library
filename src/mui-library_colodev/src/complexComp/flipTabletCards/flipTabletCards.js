import React from "react";
import PropTypes from "prop-types";
import "./flipTabletCards.css";

const FlipTabletCards = (props) => {
  return (
    <div className='grid'>
      {props.cardsData.map((data, i) => (
        <div key={i + 100} className='card'>
          <div className='card__content'>
            <img alt='images' className='imgfondo' src={data} />
          </div>
          <div className='card__shadow'></div>
        </div>
      ))}
    </div>
  );
};

FlipTabletCards.propTypes = {
  cardsData: PropTypes.array.isRequired,
};

FlipTabletCards.defaultProps = {
  cardsData: [
    "https://previews.123rf.com/images/jairosouza02/jairosouza022008/jairosouza02200800001/153163766-.jpg",
    "https://img.freepik.com/vetores-gratis/formulario-de-inscricao-online_23-2147979930.jpg?w=2000",
    "https://img.freepik.com/vetores-gratis/cadastre-se-na-interface-do-usuario-e-ux-para-web-log-no-modelo-de-design-de-vetor_16734-297.jpg",
  ],
};

export default FlipTabletCards;
