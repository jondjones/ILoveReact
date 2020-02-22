'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromLocalUrl = getFromLocalUrl;

var _data = require('../../cache/data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a URL of an object in the SWAPI, return the data
 * from our local cache.
 */
async function getFromLocalUrl(url) {
  const text = _data2.default[url];
  if (!text) {
    throw new Error(`No entry in local cache for ${url}`);
  }
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.log(`Hit the local cache for ${url}.`);
  }
  return text;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the license found in the
   * LICENSE-examples file in the root directory of this source tree.
   *
   *  strict
   */