import "./flipTabletCards.css";

const FlipTabletCards = () => {
  return (
    <div style={{ position: "absolute" }}>
      <div class='grid'>
        <div class='card' tabindex='1'>
          <div class='card__content'></div>
          <div class='card__shadow'></div>
        </div>
        <div class='card' tabindex='1'>
          <div class='card__content'></div>
          <div class='card__shadow'></div>
        </div>
        <div class='card' tabindex='1'>
          <div class='card__content'></div>
          <div class='card__shadow'></div>
        </div>
      </div>
    </div>
  );
};

export default FlipTabletCards;
