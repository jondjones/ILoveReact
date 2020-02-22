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
 * The GraphQL type equivalent of the Vehicle resource
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

const VehicleType = new _graphql.GraphQLObjectType({
  name: 'Vehicle',
  description: 'A single transport craft that does not have hyperdrive capability',
  fields: () => ({
    name: {
      type: _graphql.GraphQLString,
      description: `The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
bike".`
    },
    model: {
      type: _graphql.GraphQLString,
      description: `The model or official name of this vehicle. Such as "All-Terrain Attack
Transport".`
    },
    vehicleClass: {
      type: _graphql.GraphQLString,
      resolve: vehicle => vehicle.vehicle_class,
      description: 'The class of this vehicle, such as "Wheeled" or "Repulsorcraft".'
    },
    manufacturers: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: vehicle => {
        return vehicle.manufacturer.split(',').map(s => s.trim());
      },
      description: 'The manufacturers of this vehicle.'
    },
    costInCredits: {
      type: _graphql.GraphQLFloat,
      resolve: vehicle => (0, _apiHelper.convertToNumber)(vehicle.cost_in_credits),
      description: 'The cost of this vehicle new, in Galactic Credits.'
    },
    length: {
      type: _graphql.GraphQLFloat,
      resolve: vehicle => (0, _apiHelper.convertToNumber)(vehicle.length),
      description: 'The length of this vehicle in meters.'
    },
    crew: {
      type: _graphql.GraphQLString,
      description: 'The number of personnel needed to run or pilot this vehicle.'
    },
    passengers: {
      type: _graphql.GraphQLString,
      description: 'The number of non-essential people this vehicle can transport.'
    },
    maxAtmospheringSpeed: {
      type: _graphql.GraphQLInt,
      resolve: vehicle => (0, _apiHelper.convertToNumber)(vehicle.max_atmosphering_speed),
      description: 'The maximum speed of this vehicle in atmosphere.'
    },
    cargoCapacity: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.cargo_capacity),
      description: 'The maximum number of kilograms that this vehicle can transport.'
    },
    consumables: {
      type: _graphql.GraphQLString,
      description: `The maximum length of time that this vehicle can provide consumables for its
entire crew without having to resupply.`
    },
    pilotConnection: (0, _connections.connectionFromUrls)('VehiclePilots', 'pilots', _person2.default),
    filmConnection: (0, _connections.connectionFromUrls)('VehicleFilms', 'films', _film2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('vehicles')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});

exports.default = VehicleType;