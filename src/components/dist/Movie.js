"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Strings_1 = require("./Strings");
var Movie = function () {
    var _a = react_1.useState(""), videoId = _a[0], setVideoID = _a[1];
    var _b = react_1.useState(""), keyword = _b[0], setKeyword = _b[1];
    var handleChenge = function (event) {
        setKeyword(event.target.value);
        console.log(keyword);
    };
    var getYoutubeMovie = function (event) {
        event.preventDefault();
        var param = {
            key: Strings_1.API_KEY,
            q: keyword,
            type: "video",
            maxResults: "10",
            order: "viewCount"
        };
        var qs = new URLSearchParams(param);
        fetch(Strings_1.YOUTUBE_URL + qs)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("get success!");
            setVideoID(data.items[0].id.videoId);
            console.log(videoId);
        }, function (error) {
            console.error(error);
        });
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { className: "card m-4" },
            react_1["default"].createElement("label", null,
                react_1["default"].createElement("input", { className: "input is-midium is-rounded is-link", type: "text", onChange: handleChenge, placeholder: "\u52D5\u753B\u3092\u691C\u7D22" })),
            react_1["default"].createElement("input", { className: "button is-link", type: "submit", value: "\u691C\u7D22", onClick: getYoutubeMovie })),
        react_1["default"].createElement("div", { className: "columns m-3" },
            react_1["default"].createElement("div", { className: "column is-four-fifths is-offset-1" },
                react_1["default"].createElement("div", { className: "card" },
                    react_1["default"].createElement("figure", { className: "card-image image is-16by9" },
                        react_1["default"].createElement("iframe", { id: "player", src: "https://www.youtube.com/embed/" + videoId, className: "has-ratio", frameBorder: "0", allowFullScreen: true })))))));
};
exports["default"] = Movie;
