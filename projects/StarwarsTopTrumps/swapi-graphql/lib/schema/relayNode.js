'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeField = exports.nodeInterface = undefined;
exports.swapiTypeToGraphQLType = swapiTypeToGraphQLType;

var _apiHelper = require('./apiHelper');

var _graphqlRelay = require('graphql-relay');

/**
 * Given a "type" in SWAPI, returns the corresponding GraphQL type.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */

function swapiTypeToGraphQLType(swapiType) {
  const FilmType = require('./types/film').default;
  const PersonType = require('./types/person').default;
  const PlanetType = require('./types/planet').default;
  const SpeciesType = require('./types/species').default;
  const StarshipType = require('./types/starship').default;
  const VehicleType = require('./types/vehicle').default;

  switch (swapiType) {
    case 'films':
      return FilmType;
    case 'people':
      return PersonType;
    case 'planets':
      return PlanetType;
    case 'starships':
      return StarshipType;
    case 'vehicles':
      return VehicleType;
    case 'species':
      return SpeciesType;
    default:
      throw new Error('Unrecognized type `' + swapiType + '`.');
  }
}

const { nodeInterface, nodeField } = (0, _graphqlRelay.nodeDefinitions)(globalId => {
  const { type, id } = (0, _graphqlRelay.fromGlobalId)(globalId);
  return (0, _apiHelper.getObjectFromTypeAndId)(type, id);
}, obj => {
  const parts = obj.url.split('/');
  return swapiTypeToGraphQLType(parts[parts.length - 3]);
});

exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;