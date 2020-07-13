'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectFromUrl = getObjectFromUrl;
exports.getObjectFromTypeAndId = getObjectFromTypeAndId;
exports.getObjectsByType = getObjectsByType;
exports.getObjectsFromUrls = getObjectsFromUrls;
exports.convertToNumber = convertToNumber;

var _dataloader = require('dataloader');

var _dataloader2 = _interopRequireDefault(_dataloader);

var _api = require('../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */

const localUrlLoader = new _dataloader2.default(urls => Promise.all(urls.map(_api.getFromLocalUrl)));

/**
 * Objects returned from SWAPI don't have an ID field, so add one.
 */
function objectWithId(obj) {
  obj.id = parseInt(obj.url.split('/')[5], 10);
  return obj;
}

/**
 * Given an object URL, fetch it, append the ID to it, and return it.
 */
async function getObjectFromUrl(url) {
  const data = await localUrlLoader.load(url);
  return objectWithId(data);
}

/**
 * Given a type and ID, get the object with the ID.
 */
async function getObjectFromTypeAndId(type, id) {
  return await getObjectFromUrl(`https://swapi.co/api/${type}/${id}/`);
}

/**
 * Given a type, fetch all of the pages, and join the objects together
 */
async function getObjectsByType(type) {
  let objects = [];
  let nextUrl = `https://swapi.co/api/${type}/`;
  while (nextUrl) {
    // eslint-disable-next-line no-await-in-loop
    const pageData = await localUrlLoader.load(nextUrl);
    objects = objects.concat(pageData.results.map(objectWithId));
    nextUrl = pageData.next;
  }
  objects = sortObjectsById(objects);
  return { objects, totalCount: objects.length };
}

async function getObjectsFromUrls(urls) {
  const array = await Promise.all(urls.map(getObjectFromUrl));
  return sortObjectsById(array);
}

function sortObjectsById(array) {
  return array.sort((a, b) => a.id - b.id);
}

/**
 * Given a string, convert it to a number
 */
function convertToNumber(value) {
  if (['unknown', 'n/a'].indexOf(value) !== -1) {
    return null;
  }
  // remove digit grouping
  const numberString = value.replace(/,/, '');
  return Number(numberString);
}