// Dependencies
var ElmSelect = require("elm-select")
  , CrossStyle = require("cross-style")
  ;

/**
 * Crossy
 * Modify cross-browser CSS properties.
 *
 * @name Crossy
 * @function
 * @param {String|Element|NodeList} elm A stringified query selector, an element or a node list.
 * @param {String} prop The CSS property.
 * @param {String} value The CSS property value.
 * @return {NodeList|Array} The selected elements.
 */
function Crossy(elm, prop, value) {

    if (typeof elm === "string") {
        return ElmSelect(elm, Crossy, [prop, value]);
    }

    var i = 0
      , styles = CrossStyle(prop)
      ;

    for (; i < styles.length; ++i) {
        elm.style[styles[i]] = value;
    }

    return elm;
}

module.exports = Crossy;
