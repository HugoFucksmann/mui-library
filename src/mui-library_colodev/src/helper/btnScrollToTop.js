import { useEffect } from "react";
import './btnScrollToTop.css'

const BtnScroll = () => {

  useEffect(() => {
    const showBtn = (document.body.scrollHeight / 3) * 1.5
    const element = document.getElementById("btn-scroll")

    window.addEventListener("scroll", () => {
     
      if (window.scrollY > showBtn) {
        element.style.setProperty("visibility","visible" )
      } else {
        element.style.setProperty("visibility","hidden" )
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
      <div id="btn-scroll" onClick={() => goToTop()}>
        Ʌ
      </div>
    );
};



export default BtnScroll;
