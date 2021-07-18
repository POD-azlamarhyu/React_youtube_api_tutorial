"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Strings_1 = require("./Strings");
var Movie = function () {
    var _a = react_1.useState(""), videoId = _a[0], setVideoID = _a[1];
    react_1.useEffect(function () {
        var param = {
            key: Strings_1.API_KEY,
            q: "スーツ 最長往復切符",
            type: "video",
            maxResults: "1",
            order: "viewCount"
        };
        var qs = new URLSearchParams(param);
        fetch(Strings_1.YOUTUBE_URL + qs)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log("get success!");
            console.log(data);
            setVideoID(data.items[0].id.videoId);
        }, function (error) {
            console.error(error);
        });
    }, []);
    return (react_1["default"].createElement("div", { className: "columns" },
        react_1["default"].createElement("div", { className: "column is-four-fifths is-offset-1" },
            react_1["default"].createElement("div", { className: "card" },
                react_1["default"].createElement("figure", { className: "card-image image is-16by9" },
                    react_1["default"].createElement("iframe", { id: "player", src: "https://www.youtube.com/embed/" + videoId, className: "has-ratio", frameBorder: "0", allowFullScreen: true }))))));
};
exports["default"] = Movie;
