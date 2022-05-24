import BtnScroll from "./helperComp/btnScrollToTop.js";
import GradiantPurpleText from "./textEff/gradiantPurpleText/gradiantPurpleText.js";
import Text3d from "./textEff/3dText/text3d.js";
import ExpandedCard from "./cards/expandedCard/expandedCard.js";

const returnLibrary = () => {
  return {
    BtnScroll: BtnScroll,
    Text3d: Text3d,
    GradiantPurpleText: GradiantPurpleText,
    ExpandedCard: ExpandedCard,
  };
};
export default returnLibrary();
