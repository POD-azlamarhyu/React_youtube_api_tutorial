"use strict";
exports.__esModule = true;
require("bulma/css/bulma.css");
var react_1 = require("react");
var Header_1 = require("./components/Header");
var Movie_1 = require("./components/Movie");
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement(Movie_1["default"], null)));
}
exports["default"] = App;
