(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('@babel/runtime/helpers/extends')) :
  typeof define === 'function' && define.amd ? define(['react', '@babel/runtime/helpers/extends'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-awesome-buttons"] = factory(global.React, global._extends));
})(this, (function (React, _extends) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css$3 = "\n.btnScroll {\n    position: fixed;\n  z-index: 999;\n  cursor: pointer;\n  background-color: #f2f2f2;\n  bottom: 20px;\n  right: 20px;\n  height: 40px;\n  width: 40px;\n  border-radius: 25px;\n  filter: drop-shadow(1px 1px 2px #303030);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: transform 0.3s;\n  visibility: hidden;\n}\n\n.btnScroll:hover {\n    transform: translateY(-8px)\n}";
  n(css$3,{});

  var BtnScroll = function BtnScroll() {
    React.useEffect(function () {
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

    return /*#__PURE__*/React__default["default"].createElement("div", {
      id: "btn-scroll",
      onClick: function onClick() {
        return goToTop();
      }
    }, "\u0245");
  };

  var css$2 = ".gradiantPurple {\n    background-image: linear-gradient(75deg,\n            hsl(260deg 72% 50%) 0%,\n            hsl(265deg 77% 50%) 20%,\n            hsl(270deg 83% 50%) 29%,\n            hsl(275deg 89% 50%) 36%,\n            hsl(279deg 95% 50%) 43%,\n            hsl(284deg 100% 50%) 50%,\n            hsl(283deg 95% 55%) 57%,\n            hsl(282deg 89% 61%) 64%,\n            hsl(280deg 84% 66%) 71%,\n            hsl(279deg 78% 71%) 80%,\n            hsl(278deg 73% 77%) 100%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent;\n    font-size: clamp(2.49rem, 0.5rem + 9.96vw, 7.59rem);\n    line-height: 1.1;\n    font-family: \"Inter\",sans-serif;\n    font-weight: 900;\n    \n}\n\n\n\n";
  n(css$2,{});

  var GradiantPurpleText = function GradiantPurpleText(props) {
    return /*#__PURE__*/React__default["default"].createElement("h1", _extends__default["default"]({
      className: "gradiantPurple"
    }, props), props.children);
  };

  var css$1 = ".txt3d {\n    font: 900 80px/1 'Source Sans Pro', Arial, sans-serif;\n    color: #fff;\n    text-align: center;\n    letter-spacing: -3px;\n    \n  \n    text-shadow: 0 1px 0 hsl(174, 5%, 80%),\n    0 2px 0 hsl(174, 5%, 75%),\n    0 3px 0 hsl(174, 5%, 70%),\n    0 4px 0 hsl(174, 5%, 66%),\n    0 5px 0 hsl(174, 5%, 64%),\n    0 6px 0 hsl(174, 5%, 62%),\n    0 7px 0 hsl(174, 5%, 61%),\n    0 8px 0 hsl(174, 5%, 60%),\n    \n    0 0 5px rgba(0, 0, 0, .05),\n    0 1px 3px rgba(0, 0, 0, .2),\n    0 3px 5px rgba(0, 0, 0, .2),\n    0 5px 10px rgba(0, 0, 0, .2),\n    0 10px 10px rgba(0, 0, 0, .2),\n    0 20px 20px rgba(0, 0, 0, .3);\n}\n\n";
  n(css$1,{});

  var Text3d = function Text3d(props) {
    return /*#__PURE__*/React__default["default"].createElement("h1", _extends__default["default"]({
      className: "txt3d"
    }, props), props.children);
  };

  var css = ".container {\n    \n    position: relative;\n    display: flex;\n    justify-content: space-around;\n}\n\n.container .card {\n    position: relative;\n    cursor: pointer;\n}\n\n.container .card .face {\n    width: 300px;\n    height: 200px;\n    transition: 0.5s;\n}\n\n.container .card .face.face1 {\n    position: relative;\n    background: #333;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    transform: translateY(100px);\n}\n\n.container .card:hover .face.face1 {\n    background: #ff0057;\n    transform: translateY(0);\n}\n\n.container .card .face.face1 .content {\n    opacity: 0.2;\n    transition: 0.5s;\n}\n\n.container .card:hover .face.face1 .content {\n    opacity: 1;\n}\n\n.container .card .face.face1 .content img {\n    max-width: 100px;\n}\n\n.container .card .face.face1 .content h3 {\n    margin: 10px 0 0;\n    padding: 0;\n    color: #fff;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.container .card .face.face2 {\n    position: relative;\n    background: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    box-sizing: border-box;\n    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);\n    transform: translateY(-100px);\n}\n\n.container .card:hover .face.face2 {\n    transform: translateY(0);\n}\n\n.container .card .face.face2 .content p {\n    margin: 0;\n    padding: 0;\n}\n\n.container .card .face.face2 .content a {\n    margin: 15px 0 0;\n    display: inline-block;\n    text-decoration: none;\n    font-weight: 900;\n    color: #333;\n    padding: 5px;\n    border: 1px solid #333;\n}\n\n.container .card .face.face2 .content a:hover {\n    background: #333;\n    color: #fff;\n}";
  n(css,{});

  var ExpandedCard = function ExpandedCard(props) {
    return /*#__PURE__*/React__default["default"].createElement("div", _extends__default["default"]({
      class: "container"
    }, props), props.cardData.map(function (card) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        class: "card"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        class: "face face1"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        class: "content"
      }, /*#__PURE__*/React__default["default"].createElement("img", {
        src: card.img
      }), /*#__PURE__*/React__default["default"].createElement("h3", null, card.title))), /*#__PURE__*/React__default["default"].createElement("div", {
        class: "face face2"
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        class: "content"
      }, /*#__PURE__*/React__default["default"].createElement("p", null, card.subtitle), /*#__PURE__*/React__default["default"].createElement("a", {
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

  var returnLibrary = function returnLibrary() {
    return {
      BtnScroll: BtnScroll,
      Text3d: Text3d,
      GradiantPurpleText: GradiantPurpleText,
      ExpandedCard: ExpandedCard
    };
  };

  var index = returnLibrary();

  return index;

}));
