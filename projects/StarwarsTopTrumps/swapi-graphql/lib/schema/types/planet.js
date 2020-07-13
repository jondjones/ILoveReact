'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _relayNode = require('../relayNode');

var _commonFields = require('../commonFields');

var _connections = require('../connections');

var _apiHelper = require('../apiHelper');

var _film = require('./film');

var _film2 = _interopRequireDefault(_film);

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The GraphQL type equivalent of the Planet resource
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

const PlanetType = new _graphql.GraphQLObjectType({
  name: 'Planet',
  description: `A large mass, planet or planetoid in the Star Wars Universe, at the time of
0 ABY.`,
  fields: () => ({
    name: {
      type: _graphql.GraphQLString,
      description: 'The name of this planet.'
    },
    diameter: {
      type: _graphql.GraphQLInt,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.diameter),
      description: 'The diameter of this planet in kilometers.'
    },
    rotationPeriod: {
      type: _graphql.GraphQLInt,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.rotation_period),
      description: `The number of standard hours it takes for this planet to complete a single
rotation on its axis.`
    },
    orbitalPeriod: {
      type: _graphql.GraphQLInt,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.orbital_period),
      description: `The number of standard days it takes for this planet to complete a single orbit
of its local star.`
    },
    gravity: {
      type: _graphql.GraphQLString,
      description: `A number denoting the gravity of this planet, where "1" is normal or 1 standard
G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.`
    },
    population: {
      type: _graphql.GraphQLFloat,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.population),
      description: 'The average population of sentient beings inhabiting this planet.'
    },
    climates: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: planet => {
        return planet.climate.split(',').map(s => s.trim());
      },
      description: 'The climates of this planet.'
    },
    terrains: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: planet => {
        return planet.terrain.split(',').map(s => s.trim());
      },
      description: 'The terrains of this planet.'
    },
    surfaceWater: {
      type: _graphql.GraphQLFloat,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.surface_water),
      description: `The percentage of the planet surface that is naturally occuring water or bodies
of water.`
    },
    residentConnection: (0, _connections.connectionFromUrls)('PlanetResidents', 'residents', _person2.default),
    filmConnection: (0, _connections.connectionFromUrls)('PlanetFilms', 'films', _film2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('planets')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});
exports.default = PlanetType;