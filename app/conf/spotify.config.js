"use strict";
var Spotigy = (function () {
    function Spotigy() {
    }
    Object.defineProperty(Spotigy, "API_URL", {
        get: function () { return 'https://api.spotify.com'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spotigy, "CLIENT_ID", {
        get: function () { return 'd04a6e41abaf420a84403931704f93e0'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Spotigy, "RESOURCE_TYPES", {
        get: function () {
            return ['album', 'artist', ''];
            '; };
        },
        enumerable: true,
        configurable: true
    });
    return Spotigy;
}());
exports.Spotigy = Spotigy;
