'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectionFromUrls = connectionFromUrls;

var _graphqlRelay = require('graphql-relay');

var _apiHelper = require('./apiHelper');

var _graphql = require('graphql');

/**
 * Constructs a GraphQL connection field config; it is assumed
 * that the object has a property named `prop`, and that property
 * contains a list of URLs.
 */
function connectionFromUrls(name, prop, type) {
  const { connectionType } = (0, _graphqlRelay.connectionDefinitions)({
    name,
    nodeType: type,
    resolveNode: edge => edge.node,
    connectionFields: () => ({
      totalCount: {
        type: _graphql.GraphQLInt,
        resolve: conn => conn.totalCount,
        description: `A count of the total number of objects in this connection, ignoring pagination.
This allows a client to fetch the first five objects by passing "5" as the
argument to "first", then fetch the total count so it could display "5 of 83",
for example.`
      },
      [prop]: {
        type: new _graphql.GraphQLList(type),
        resolve: conn => conn.edges.map(edge => edge.node),
        description: `A list of all of the objects returned in the connection. This is a convenience
field provided for quickly exploring the API; rather than querying for
"{ edges { node } }" when no edge data is needed, this field can be be used
instead. Note that when clients like Relay need to fetch the "cursor" field on
the edge to enable efficient pagination, this shortcut cannot be used, and the
full "{ edges { node } }" version should be used instead.`
      }
    })
  });
  return {
    type: connectionType,
    args: _graphqlRelay.connectionArgs,
    resolve: async (obj, args) => {
      const array = await (0, _apiHelper.getObjectsFromUrls)(obj[prop] || []);
      return {
        ...(0, _graphqlRelay.connectionFromArray)(array, args),
        totalCount: array.length
      };
    }
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