'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

var _relayNode = require('../relayNode');

var _commonFields = require('../commonFields');

var _connections = require('../connections');

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

var _planet = require('./planet');

var _planet2 = _interopRequireDefault(_planet);

var _species = require('./species');

var _species2 = _interopRequireDefault(_species);

var _starship = require('./starship');

var _starship2 = _interopRequireDefault(_starship);

var _vehicle = require('./vehicle');

var _vehicle2 = _interopRequireDefault(_vehicle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The GraphQL type equivalent of the Film resource
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

const FilmType = new _graphql.GraphQLObjectType({
  name: 'Film',
  description: 'A single film.',
  fields: () => ({
    title: {
      type: _graphql.GraphQLString,
      description: 'The title of this film.'
    },
    episodeID: {
      type: _graphql.GraphQLInt,
      resolve: film => film.episode_id,
      description: 'The episode number of this film.'
    },
    openingCrawl: {
      type: _graphql.GraphQLString,
      resolve: film => film.opening_crawl,
      description: 'The opening paragraphs at the beginning of this film.'
    },
    director: {
      type: _graphql.GraphQLString,
      description: 'The name of the director of this film.'
    },
    producers: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: film => {
        return film.producer.split(',').map(s => s.trim());
      },
      description: 'The name(s) of the producer(s) of this film.'
    },
    releaseDate: {
      type: _graphql.GraphQLString,
      resolve: film => film.release_date,
      description: 'The ISO 8601 date format of film release at original creator country.'
    },
    speciesConnection: (0, _connections.connectionFromUrls)('FilmSpecies', 'species', _species2.default),
    starshipConnection: (0, _connections.connectionFromUrls)('FilmStarships', 'starships', _starship2.default),
    vehicleConnection: (0, _connections.connectionFromUrls)('FilmVehicles', 'vehicles', _vehicle2.default),
    characterConnection: (0, _connections.connectionFromUrls)('FilmCharacters', 'characters', _person2.default),
    planetConnection: (0, _connections.connectionFromUrls)('FilmPlanets', 'planets', _planet2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('films')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});

exports.default = FilmType;