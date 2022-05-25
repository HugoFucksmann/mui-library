import React, { useEffect } from 'react';
import _extends from '@babel/runtime/helpers/extends';
import PropTypes from 'prop-types';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$5 = "\n.btnScroll {\n    position: fixed;\n  z-index: 999;\n  cursor: pointer;\n  background-color: #f2f2f2;\n  bottom: 20px;\n  right: 20px;\n  height: 40px;\n  width: 40px;\n  border-radius: 25px;\n  filter: drop-shadow(1px 1px 2px #303030);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: transform 0.3s;\n  visibility: hidden;\n}\n\n.btnScroll:hover {\n    transform: translateY(-8px)\n}";
n(css$5,{});

var BtnScroll = function BtnScroll() {
  useEffect(function () {
    var showBtn = document.body.scrollHeight / 3 * 1.5;
    var element = document.getElementById("btn-scroll");
    window.addEventListener("scroll", function () {
      if (window.scrollY > showBtn) {
        element.style.setProperty("visibility", "visible");
      } else {
        element.style.setProperty("visibility", "hidden");
      }
    });
  }, []);

  var goToTop = function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    id: "btn-scroll",
    onClick: function onClick() {
      return goToTop();
    }
  }, "\u0245");
};

var css$4 = ".gradiantPurple {\n    background-image: linear-gradient(75deg,\n            hsl(260deg 72% 50%) 0%,\n            hsl(265deg 77% 50%) 20%,\n            hsl(270deg 83% 50%) 29%,\n            hsl(275deg 89% 50%) 36%,\n            hsl(279deg 95% 50%) 43%,\n            hsl(284deg 100% 50%) 50%,\n            hsl(283deg 95% 55%) 57%,\n            hsl(282deg 89% 61%) 64%,\n            hsl(280deg 84% 66%) 71%,\n            hsl(279deg 78% 71%) 80%,\n            hsl(278deg 73% 77%) 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent;\n    font-size: clamp(2.49rem, 0.5rem + 9.96vw, 7.59rem);\n    line-height: 1.1;\n    font-family: \"Inter\",sans-serif;\n    font-weight: 900;\n    \n}\n\n\n\n";
n(css$4,{});

var GradiantPurpleText = function GradiantPurpleText(props) {
  return /*#__PURE__*/React.createElement("h1", _extends({
    className: "gradiantPurple"
  }, props), props.children);
};

var css$3 = ".txt3d {\n    font: 900 80px/1 'Source Sans Pro', Arial, sans-serif;\n    color: #fff;\n    text-align: center;\n    letter-spacing: -3px;\n    \n  \n    text-shadow: 0 1px 0 hsl(174, 5%, 80%),\n    0 2px 0 hsl(174, 5%, 75%),\n    0 3px 0 hsl(174, 5%, 70%),\n    0 4px 0 hsl(174, 5%, 66%),\n    0 5px 0 hsl(174, 5%, 64%),\n    0 6px 0 hsl(174, 5%, 62%),\n    0 7px 0 hsl(174, 5%, 61%),\n    0 8px 0 hsl(174, 5%, 60%),\n    \n    0 0 5px rgba(0, 0, 0, .05),\n    0 1px 3px rgba(0, 0, 0, .2),\n    0 3px 5px rgba(0, 0, 0, .2),\n    0 5px 10px rgba(0, 0, 0, .2),\n    0 10px 10px rgba(0, 0, 0, .2),\n    0 20px 20px rgba(0, 0, 0, .3);\n}\n\n";
n(css$3,{});

var Text3d = function Text3d(props) {
  return /*#__PURE__*/React.createElement("h1", _extends({
    className: "txt3d"
  }, props), props.children);
};

var css$2 = ".container {\n    \n    position: relative;\n    display: flex;\n    justify-content: space-around;\n}\n\n.container .card {\n    position: relative;\n    cursor: pointer;\n}\n\n.container .card .face {\n    width: 300px;\n    height: 200px;\n    transition: 0.5s;\n}\n\n.container .card .face.face1 {\n    position: relative;\n    background: #333;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    transform: translateY(100px);\n}\n\n.container .card:hover .face.face1 {\n    background: #ff0057;\n    transform: translateY(0);\n}\n\n.container .card .face.face1 .content {\n    opacity: 0.2;\n    transition: 0.5s;\n}\n\n.container .card:hover .face.face1 .content {\n    opacity: 1;\n}\n\n.container .card .face.face1 .content img {\n    max-width: 100px;\n}\n\n.container .card .face.face1 .content h3 {\n    margin: 10px 0 0;\n    padding: 0;\n    color: #fff;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.container .card .face.face2 {\n    position: relative;\n    background: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    box-sizing: border-box;\n    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n    transform: translateY(-100px);\n}\n\n.container .card:hover .face.face2 {\n    transform: translateY(0);\n}\n\n.container .card .face.face2 .content p {\n    margin: 0;\n    padding: 0;\n}\n\n.container .card .face.face2 .content a {\n    margin: 15px 0 0;\n    display: inline-block;\n    text-decoration: none;\n    font-weight: 900;\n    color: #333;\n    padding: 5px;\n    border: 1px solid #333;\n}\n\n.container .card .face.face2 .content a:hover {\n    background: #333;\n    color: #fff;\n}";
n(css$2,{});

var ExpandedCard = function ExpandedCard(props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    class: "container"
  }, props), props.cardData.map(function (card) {
    return /*#__PURE__*/React.createElement("div", {
      class: "card"
    }, /*#__PURE__*/React.createElement("div", {
      class: "face face1"
    }, /*#__PURE__*/React.createElement("div", {
      class: "content"
    }, /*#__PURE__*/React.createElement("img", {
      src: card.img
    }), /*#__PURE__*/React.createElement("h3", null, card.title))), /*#__PURE__*/React.createElement("div", {
      class: "face face2"
    }, /*#__PURE__*/React.createElement("div", {
      class: "content"
    }, /*#__PURE__*/React.createElement("p", null, card.subtitle), /*#__PURE__*/React.createElement("a", {
      onClick: function onClick() {
        return card.func();
      }
    }, card.btn))));
  }));
};

ExpandedCard.defaultProps = {
  cardData: [{
    title: "title",
    subtitle: "subtitle",
    btn: "btn",
    img: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
    func: function func() {}
  }, {
    title: "title",
    subtitle: "subtitle",
    btn: "btn",
    img: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
    func: function func() {}
  }, {
    title: "title",
    subtitle: "subtitle",
    btn: "btn",
    img: "https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true",
    func: function func() {}
  }]
};

var css$1 = "\n.grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    margin: 0 auto;\n    width: 100%;\n    width: 840px;\n}\n\n.card {\n    width: 100%;\n    height: 220px;\n    position: relative;\n    touch-action: none;\n    outline: none;\n}\n\n.card:hover {\n    z-index: 1000;\n}\n\n.card__content {\n    width: 200px;\n    height: 250px;\n    position: absolute;\n    left: 15%;\n    top: 0px;\n    z-index: 100;\n    overflow: hidden;\n  \n    border-top: solid 2px hsl(0, 0%, 10%);\n    border-right: solid 2px hsl(0, 0%, 10%);\n    border-bottom: solid 2px hsl(0, 0%, 20%);\n    border-left: solid 2px hsl(0, 0%, 20%);\n    background-size: 100% 100%;\n    border-radius: 10px;\n    transition: transform 0.4s ease-out;\n    transform:\n        rotateX(55deg) rotateY(0deg) rotateZ(-40deg) translate3d(0px, 0px, 20px);\n}\n\n.card:hover .card__content {\n    z-index: 1000;\n    transform:\n        rotateX(0deg) rotateY(0deg) rotateZ(-0deg) translate3d(0px, -30px, 350px) scale(1.6);\n}\n\n.card a {\n    \n    padding: 1rem 1rem;\n    width: 98%;\n    position: absolute;\n    bottom: 2px;\n    left: 2px;\n    background-color: hsla(240, 0%, 0%, 25%);\n    border-radius: 8px;\n    color: hsl(240, 35%, 40%);\n    text-align: center;\n    text-decoration: none;\n    transform: scale(0);\n    transition:\n        transform 0.2s ease-out,\n        background-color 0.2s ease-out;\n}\n\n.card a:hover {\n    background-color: hsla(240, 0%, 0%, 35%);\n}\n\n.card:hover a {\n    transform: scale(1);\n}\n\n.card__shadow {\n    width: 200px;\n    height: 250px;\n    position: absolute;\n    left: 15%;\n    top: 0;\n    background-color: hsl(0, 0%, 5%);\n    border-radius: 10px;\n    filter: blur(10px);\n    transition:\n        height 0.3s ease-out,\n        transform 0.3s ease-out;\n    transform:\n        rotateX(55deg) rotateY(0deg) rotateZ(-40deg) translate3d(0px, 0px, 0px);\n}\n\n.imgfondo {\n    width: 100%;\n    height: 100%;\n}\n\n.card:hover .card__shadow {\n    height: 22px;\n    margin-top: -10px;\n    width: 90%;\n    transform:\n        rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate3d(-20px, 300px, -50px);\n}";
n(css$1,{});

var FlipTabletCards = function FlipTabletCards(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, props.cardsData.map(function (data, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i + 100,
      className: "card"
    }, /*#__PURE__*/React.createElement("div", {
      className: "card__content"
    }, /*#__PURE__*/React.createElement("img", {
      alt: "images",
      className: "imgfondo",
      src: data
    })), /*#__PURE__*/React.createElement("div", {
      className: "card__shadow"
    }));
  }));
};

FlipTabletCards.propTypes = {
  cardsData: PropTypes.array.isRequired
};
FlipTabletCards.defaultProps = {
  cardsData: ["https://previews.123rf.com/images/jairosouza02/jairosouza022008/jairosouza02200800001/153163766-.jpg", "https://img.freepik.com/vetores-gratis/formulario-de-inscricao-online_23-2147979930.jpg?w=2000", "https://img.freepik.com/vetores-gratis/cadastre-se-na-interface-do-usuario-e-ux-para-web-log-no-modelo-de-design-de-vetor_16734-297.jpg"]
};

var css = "\n\n/* center entire page elemen */\n\n.wrapper {\n    position: absolute;\n    top: 50%;\n    left: 72%;\n    transform: translate(-63%, -63%);\n}\n\n.mainn {\n    display: grid;\n    grid-template-columns: repeat(3, 280px);\n    grid-template-rows: repeat(3, 280px);\n    transition: 1s;\n    -webkit-transform: rotateX(54deg) rotateZ(-46deg);\n    transform: rotateX(54deg) rotateZ(-46deg);\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n}\n\n.phone-wrapper {\n    border-left: 1px solid #9b9a9a;\n}\n\n.example1 {\n    grid-column: 1;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    z-index: 1;\n}\n\n.example2 {\n    grid-column: 2;\n    grid-row-start: 3;\n    grid-row-end: 4;\n    z-index: 1;\n}\n\n.example3 {\n    grid-column: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.example4 {\n    grid-column: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.mob {\n    margin: 25px;\n    transition: 0.3s;\n    margin: 10px;\n    font-family: \"roboto\";\n    position: relative;\n    height: 550px;\n    width: 250px;\n    background: #F2F2F2;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 25px;\n    -webkit-box-shadow: -9px 9px 40px 0px rgba(0, 0, 0, 0.35);\n    -moz-box-shadow: -9px 9px 40px 0px rgba(0, 0, 0, 0.35);\n    box-shadow: -9px 9px 40px 0px rgba(0, 0, 0, 0.35);\n\n\n}\n\n.mob:hover {\n    cursor: pointer;\n    transform: translateZ(55px);\n    box-shadow: -88px 80px 50px 0px rgba(0, 0, 0, 0.2);\n}\n\n.up {\n    border-left: 6px solid grey;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 60px;\n    border-top-left-radius: 25px;\n    border-top-right-radius: 25px;\n}\n\n.example1 .up {\n    background: #ebb1c0;\n    border-color: #b6808e;\n}\n\n.example2 .up {\n    background: #7bd2bf;\n    border-color: #3a7b67;\n}\n\n.example3 .up {\n    background: #efda7d;\n    border-color: #dab440;\n}\n\n.example4 .up {\n    background: #6fc4c7;\n    border-color: #57969f;\n}\n\n.decorLine {\n    width: 30px;\n    height: 4px;\n    border-radius: 25%;\n}\n\n.example1 .decorLine,\n.example1 .charger,\n.example1 .smallCircle {\n    background: #e789a1;\n}\n\n.example2 .decorLine,\n.example2 .charger,\n.example2 .smallCircle {\n    background: #3b8f77;\n}\n\n.example3 .decorLine,\n.example3 .charger,\n.example3 .smallCircle {\n    background: #eabe45;\n}\n\n.example4 .decorLine,\n.example4 .charger,\n.example4 .smallCircle {\n    background: #32aeb0;\n}\n\n.down {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 65px;\n    border-bottom-left-radius: 25px;\n    border-bottom-right-radius: 25px;\n    border-left: 6px solid;\n    border-bottom: 6px solid;\n}\n\n.example1 .down {\n    background: #f0d9df;\n    border-color: #d5b7b9;\n}\n\n.example2 .down {\n    background: #9be7db;\n    border-color: #78c8bf;\n}\n\n.example3 .down {\n    background: #f1e28d;\n    border-color: #dec66e;\n}\n\n.example4 .down {\n    background: #abe5e6;\n    border-color: #87d1d4;\n}\n\n.circle {\n    width: 30px;\n    height: 30px;\n    background: red;\n    border-radius: 50%;\n}\n\n.example1 .circle {\n    background: #ecbdcd;\n}\n\n.example2 .circle {\n    background: #52dac6;\n}\n\n.example3 .circle {\n    background: #eddb51;\n}\n\n.example4 .circle {\n    background: #5cd6d7;\n}\n\n.middle {\n    height: 100%;\n    border-right: 1px solid rgba(81, 81, 81, 0.1);\n    border-left: 5px solid #bfbfbf;\n}\n\n.smallCircle {\n    width: 2px;\n    height: 2px;\n    border-radius: 50%;\n    /*margin-right: 1px;*/\n    display: inline-block;\n}\n\n.furniture {\n    position: absolute;\n    bottom: -3px;\n    /*display: flex;*/\n    /*flex-direction: row;*/\n    /*justify-content: space-between;*/\n}\n\n.charger {\n    width: 20px;\n    height: 2px;\n    border-radius: 25%;\n    display: inline-block;\n}\n\n.firstCircleGroup,\n.secondCircleGroup {\n    display: inline-block;\n}\n\n/* content part*/\n\n* {\n    margin: 0;\n}\n\n.phone-wrapper {\n    padding: 0 40px 0 40px;\n    font-weight: 400;\n    height: 450px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n.number-heading {\n    font-family: Roboto;\n    padding-top: 30px;\n    font-size: 90px;\n    font-weight: 100;\n    line-height: 70px;\n    opacity: 0.6;\n}\n\n.phone-text {\n    text-transform: uppercase;\n    font-size: 14px;\n}\n\n.gradient-text {\n    background: linear-gradient(to right, #fb9058, #f23f79);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n}\n\n.text-heading {\n    font-size: 35px;\n    font-weight: 300;\n}\n\n.bold-text {\n    font-weight: bold;\n}\n\n.horizontal-line {\n    width: 50px;\n    height: 2px;\n    background: linear-gradient(to right, #fb9058, #f23f79);\n}\n\n.made-by-text {\n    display: flex;\n    padding-top: 15px;\n    font-size: 15px;\n    padding-bottom: 30px;\n    align-items: center;\n    text-align: left;\n}\n\n.made-by-text::before {\n    content: \"\";\n    background: url(\"https://files.gitter.im/front-end-lab-X/FL-01/8lMH/logo.png\") no-repeat;\n    background-size: 30px 30px;\n    width: 30px;\n    height: 30px;\n    padding-bottom: 5px;\n}";
n(css,{});

var CellCardStatic2 = function CellCardStatic2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mainn"
  }, props.contents.map(function (data, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i + 200,
      className: "mob example" + (i + 1)
    }, /*#__PURE__*/React.createElement("div", {
      className: "up"
    }, /*#__PURE__*/React.createElement("div", {
      className: "decorLine"
    })), /*#__PURE__*/React.createElement("div", {
      className: "middle"
    }, /*#__PURE__*/React.createElement("div", {
      className: "phone-wrapper"
    }, data)), /*#__PURE__*/React.createElement("div", {
      className: "down"
    }, /*#__PURE__*/React.createElement("div", {
      className: "circle"
    }), /*#__PURE__*/React.createElement("div", {
      className: "furniture"
    }, /*#__PURE__*/React.createElement("div", {
      className: "charger"
    }))));
  })));
};

CellCardStatic2.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.element).isRequired
};
CellCardStatic2.defaultProps = {
  contents: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "number-heading"
  }, "01"), /*#__PURE__*/React.createElement("p", {
    className: "phone-text"
  }, "Psd mockup"), /*#__PURE__*/React.createElement("h2", {
    className: "text-heading"
  }, "the ", /*#__PURE__*/React.createElement("span", {
    className: "bold-text"
  }, "New Styles"), /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, " ...")), /*#__PURE__*/React.createElement("div", {
    className: "horizontal-line"
  }), /*#__PURE__*/React.createElement("p", {
    className: "phone-text"
  }, "Refresh your", /*#__PURE__*/React.createElement("br", null), "mobile app showcase"), /*#__PURE__*/React.createElement("p", {
    className: "made-by-text"
  }, "by ColoDev"), " "), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "number-heading"
  }, "02"), /*#__PURE__*/React.createElement("p", {
    className: "phone-text"
  }, "Psd mockup"), /*#__PURE__*/React.createElement("h2", {
    className: "text-heading"
  }, "the ", /*#__PURE__*/React.createElement("span", {
    className: "bold-text"
  }, "New Styles"), /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, " ...")), /*#__PURE__*/React.createElement("div", {
    className: "horizontal-line"
  }), /*#__PURE__*/React.createElement("p", {
    className: "phone-text"
  }, "Refresh your", /*#__PURE__*/React.createElement("br", null), "mobile app showcase"), /*#__PURE__*/React.createElement("p", {
    className: "made-by-text"
  }, "by ColoDev"), " "), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "number-heading"
  }, "03"), /*#__PURE__*/React.createElement("p", {
    className: "phone-text"
  }, "Psd mockup"), /*#__PURE__*/React.createElement("h2", {
    className: "text-heading"
  }, "the ", /*#__PURE__*/React.createElement("span", {
    className: "bold-text"
  }, "New Styles"), /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, " ...")), /*#__PURE__*/React.createElement("div", {
    className: "horizontal-line"
  }), /*#__PURE__*/React.createElement("p", {
    className: "phone-text"
  }, "Refresh your", /*#__PURE__*/React.createElement("br", null), "mobile app showcase"), /*#__PURE__*/React.createElement("p", {
    className: "made-by-text"
  }, "by ColoDev"), " "), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "number-heading"
  }, "04"), /*#__PURE__*/React.createElement("p", {
    className: "phone-text"
  }, "Psd mockup"), /*#__PURE__*/React.createElement("h2", {
    className: "text-heading"
  }, "the ", /*#__PURE__*/React.createElement("span", {
    className: "bold-text"
  }, "New Styles"), /*#__PURE__*/React.createElement("span", {
    className: "gradient-text"
  }, " ...")), /*#__PURE__*/React.createElement("div", {
    className: "horizontal-line"
  }), /*#__PURE__*/React.createElement("p", {
    className: "phone-text"
  }, "Refresh your", /*#__PURE__*/React.createElement("br", null), "mobile app showcase"), /*#__PURE__*/React.createElement("p", {
    className: "made-by-text"
  }, "by ColoDev"), " ")]
};

var returnLibrary = function returnLibrary() {
  return {
    BtnScroll: BtnScroll,
    Text3d: Text3d,
    GradiantPurpleText: GradiantPurpleText,
    ExpandedCard: ExpandedCard,
    FlipTabletCards: FlipTabletCards,
    CellCardStatic2: CellCardStatic2
  };
};

var index = returnLibrary();

export { index as default };
