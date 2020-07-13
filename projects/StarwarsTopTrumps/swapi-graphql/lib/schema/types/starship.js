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
 * The GraphQL type equivalent of the Starship resource
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

const StarshipType = new _graphql.GraphQLObjectType({
  name: 'Starship',
  description: 'A single transport craft that has hyperdrive capability.',
  fields: () => ({
    name: {
      type: _graphql.GraphQLString,
      description: 'The name of this starship. The common name, such as "Death Star".'
    },
    model: {
      type: _graphql.GraphQLString,
      description: `The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
Orbital Battle Station".`
    },
    starshipClass: {
      type: _graphql.GraphQLString,
      resolve: ship => ship.starship_class,
      description: `The class of this starship, such as "Starfighter" or "Deep Space Mobile
Battlestation"`
    },
    manufacturers: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: ship => {
        return ship.manufacturer.split(',').map(s => s.trim());
      },
      description: 'The manufacturers of this starship.'
    },
    costInCredits: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.cost_in_credits),
      description: 'The cost of this starship new, in galactic credits.'
    },
    length: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.length),
      description: 'The length of this starship in meters.'
    },
    crew: {
      type: _graphql.GraphQLString,
      description: 'The number of personnel needed to run or pilot this starship.'
    },
    passengers: {
      type: _graphql.GraphQLString,
      description: 'The number of non-essential people this starship can transport.'
    },
    maxAtmospheringSpeed: {
      type: _graphql.GraphQLInt,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.max_atmosphering_speed),
      description: `The maximum speed of this starship in atmosphere. null if this starship is
incapable of atmosphering flight.`
    },
    hyperdriveRating: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.hyperdrive_rating),
      description: 'The class of this starships hyperdrive.'
    },
    MGLT: {
      type: _graphql.GraphQLInt,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.MGLT),
      description: `The Maximum number of Megalights this starship can travel in a standard hour.
A "Megalight" is a standard unit of distance and has never been defined before
within the Star Wars universe. This figure is only really useful for measuring
the difference in speed of starships. We can assume it is similar to AU, the
distance between our Sun (Sol) and Earth.`
    },
    cargoCapacity: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.cargo_capacity),
      description: 'The maximum number of kilograms that this starship can transport.'
    },
    consumables: {
      type: _graphql.GraphQLString,
      description: `The maximum length of time that this starship can provide consumables for its
entire crew without having to resupply.`
    },
    pilotConnection: (0, _connections.connectionFromUrls)('StarshipPilots', 'pilots', _person2.default),
    filmConnection: (0, _connections.connectionFromUrls)('StarshipFilms', 'films', _film2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('starships')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});

exports.default = StarshipType;