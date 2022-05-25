import BtnScroll from "./helperComp/btnScrollToTop.js";
import GradiantPurpleText from "./textEff/gradiantPurpleText/gradiantPurpleText.js";
import Text3d from "./textEff/3dText/text3d.js";
import ExpandedCard from "./cards/expandedCard/expandedCard.js";
import FlipTabletCards from "./complexComp/flipTabletCards/flipTabletCards.js";
import CellCardStatic2 from "./complexComp/cellCardStatic2/cellCardStatic2.js";

const returnLibrary = () => {
  return {
    BtnScroll: BtnScroll,
    Text3d: Text3d,
    GradiantPurpleText: GradiantPurpleText,
    ExpandedCard: ExpandedCard,
    FlipTabletCards: FlipTabletCards,
    CellCardStatic2: CellCardStatic2,
  };
};
export default returnLibrary();
