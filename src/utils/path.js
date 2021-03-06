/**
 * path.js - modify path string function.
 *
 * @license Copyright 2011 The xhrdavclient library authors.
 * All rights reserved.
 */

goog.provide('xhrdav.utils.path');
goog.require('goog.array');
goog.require('goog.string');
goog.require('goog.string.path');

/**
 * Remove last slash from path string.
 *
 * @param {string} path path string.
 * @return {string} converted new path.
 */
xhrdav.utils.path.removeLastSlash = function(path) {
  var converted = goog.string.endsWith(path, '/') ?
    path.slice(0, -1) || '/' : path;
  return converted;
};

/**
 * Add last slash to path string.
 *
 * @param {string} path path string.
 * @return {string} converted new path.
 */
xhrdav.utils.path.addLastSlash = function(path) {
  var converted = goog.string.endsWith(path, '/') ? path : path + '/';
  return converted;
};

/**
 * Split path.
 *
 * @param {string} path path string.
 * @return {Array.<string>} split path list.
 */
xhrdav.utils.path.split = function(path) {
  var pathlist = goog.array.filter(path.split('/'), function(v, i) {
    return (!goog.string.isEmptySafe(v));
  });
  if (pathlist.length == 0) pathlist.push('/');
  return pathlist;
};

/* Entry point for closure compiler */
goog.exportSymbol('xhrdav.utils.path', xhrdav.utils.path);
goog.exportSymbol('xhrdav.utils.path.removeLastSlash',
  xhrdav.utils.path.removeLastSlash);
goog.exportSymbol('xhrdav.utils.path.addLastSlash',
  xhrdav.utils.path.addLastSlash);
goog.exportSymbol('xhrdav.utils.path.split',
  xhrdav.utils.path.split);
