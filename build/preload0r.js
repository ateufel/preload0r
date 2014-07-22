/**
 * preload0r - Easy Image Preloader
 * @version v1.1.0
 * @link https://github.com/luschn/preload0r
 * @license MIT
 */
!function(n){"use strict";var l,o,r=[],t=0,u=0,a=function(){u++,o&&o(u),u>=t&&l&&l()},c=function(n,u,c){l=u||null,o=c||null,t=n.length;for(var e=0;t>e;e++)r[e]=new Image,r[e].onload=a,r[e].src=n[e]};n.Preload0r=c}(this);