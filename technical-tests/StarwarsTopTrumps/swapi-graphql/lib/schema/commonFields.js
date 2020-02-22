'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createdField = createdField;
exports.editedField = editedField;

var _graphql = require('graphql');

// These two fields appear on all types, so let's only write them once.
function createdField() {
  return {
    type: _graphql.GraphQLString,
    description: 'The ISO 8601 date format of the time that this resource was created.'
  };
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the license found in the
   * LICENSE-examples file in the root directory of this source tree.
   *
   *  strict
   */

function editedField() {
  return {
    type: _graphql.GraphQLString,
    description: 'The ISO 8601 date format of the time that this resource was edited.'
  };
}