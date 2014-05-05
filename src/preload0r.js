/*! preload0r - v1.0.0
 * https://github.com/luschn/preload0r
 * Copyright (c) 2014 Andreas Teufel
 * Licensed under the MIT license.
 */

(function (global) {
    'use strict';

    var images = [];

    var Preload0r = function (paths) {
        for (var i = 0, count = paths.length; i < count; i++) {
            images[i] = new Image();
            images[i].src = paths[i];
        }
    };

    global.Preload0r = Preload0r;
}(this));