'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React$1 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$1 = ".buttonComponent {\n    border-radius: 3px;\n    padding: 0.3rem 0.5rem;\ncursor: pointer;\nborder: none;\n    transition: all .3s ease-out;\n    box-shadow: #272727b0 1px 1px 1px, #272727b0 -1px -1px 1px;\n}\n.buttonComponent:hover {\n    box-shadow: #272727b0 1px 1px 3px, #272727b0 -1px -1px 3px;\n}\n.buttonComponent:active {\n    opacity: .8;\n}";
n(css$1,{});

var AwesomeButton = function AwesomeButton(props) {
  var _useState = React$1.useState(null),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  React$1.useEffect(function () {
    if (props.variant) {
      if (props.variant === 'primary') {
        setColor('#0077ff');
      } else if (props.variant === 'secondary') {
        setColor('#ff0062');
      } else if (props.variant === 'success') {
        setColor('#0f8000');
      } else {
        setColor('#949393');
      }
    }
  });
  var children = props.children;
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: "buttonComponent",
    style: {
      backgroundColor: color
    }
  }, children.toUpperCase());
};

var css = "\n.btnScroll {\n    position: fixed;\n  z-index: 999;\n  cursor: pointer;\n  background-color: #f2f2f2;\n  bottom: 20px;\n  right: 20px;\n  height: 40px;\n  width: 40px;\n  border-radius: 25px;\n  filter: drop-shadow(1px 1px 2px #303030);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transition: transform 0.3s;\n  visibility: hidden;\n}\n\n.btnScroll:hover {\n    transform: translateY(-8px)\n}";
n(css,{});

var BtnScroll = function BtnScroll() {
  React$1.useEffect(function () {
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

var returnLibrary = function returnLibrary() {
  return {
    AwesomeButton: AwesomeButton,
    BtnScroll: BtnScroll // you can add here other components that you want to export

  };
};

var index = returnLibrary();

module.exports = index;
