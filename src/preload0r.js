/*!
 * preload0r - Easy Image Preloader
 * @version v1.1.7
 * @link https://github.com/ateufel/preload0r
 * @license MIT
 */

(function (global) {
    'use strict';

    var images = [],
        count = 0,
        loaded = 0,
        callback,
        callbackTick;

    var onloadCallback = function () {
        loaded++;
        if (callbackTick) {
            callbackTick(loaded);
        }
        if (loaded >= count && callback) {
            callback();
        }
    };

    var Preload0r = function (paths, cb, cbTick) {
        callback = cb || null;
        callbackTick = cbTick || null;
        count = paths.length;
        for (var i = 0; i < count; i++) {
            images[i] = new Image();
            images[i].onload = onloadCallback;
            images[i].src = paths[i];
        }
    };

    global.Preload0r = Preload0r;
}(this));