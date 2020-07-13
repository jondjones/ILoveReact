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
 * The GraphQL type equivalent of the People resource
 */
const PersonType = new _graphql.GraphQLObjectType({
  name: 'Person',
  description: 'An individual person or character within the Star Wars universe.',
  fields: () => ({
    name: {
      type: _graphql.GraphQLString,
      description: 'The name of this person.'
    },
    birthYear: {
      type: _graphql.GraphQLString,
      resolve: person => person.birth_year,
      description: `The birth year of the person, using the in-universe standard of BBY or ABY -
Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
a battle that occurs at the end of Star Wars episode IV: A New Hope.`
    },
    eyeColor: {
      type: _graphql.GraphQLString,
      resolve: person => person.eye_color,
      description: `The eye color of this person. Will be "unknown" if not known or "n/a" if the
person does not have an eye.`
    },
    gender: {
      type: _graphql.GraphQLString,
      description: `The gender of this person. Either "Male", "Female" or "unknown",
"n/a" if the person does not have a gender.`
    },
    hairColor: {
      type: _graphql.GraphQLString,
      resolve: person => person.hair_color,
      description: `The hair color of this person. Will be "unknown" if not known or "n/a" if the
person does not have hair.`
    },
    height: {
      type: _graphql.GraphQLInt,
      resolve: person => (0, _apiHelper.convertToNumber)(person.height),
      description: 'The height of the person in centimeters.'
    },
    mass: {
      type: _graphql.GraphQLFloat,
      resolve: person => (0, _apiHelper.convertToNumber)(person.mass),
      description: 'The mass of the person in kilograms.'
    },
    skinColor: {
      type: _graphql.GraphQLString,
      resolve: person => person.skin_color,
      description: 'The skin color of this person.'
    },
    homeworld: {
      type: _planet2.default,
      resolve: person => person.homeworld ? (0, _apiHelper.getObjectFromUrl)(person.homeworld) : null,
      description: 'A planet that this person was born on or inhabits.'
    },
    filmConnection: (0, _connections.connectionFromUrls)('PersonFilms', 'films', _film2.default),
    species: {
      type: _species2.default,
      resolve: person => {
        if (!person.species || person.species.length === 0) {
          return null;
        }
        return (0, _apiHelper.getObjectFromUrl)(person.species[0]);
      },
      description: 'The species that this person belongs to, or null if unknown.'
    },
    starshipConnection: (0, _connections.connectionFromUrls)('PersonStarships', 'starships', _starship2.default),
    vehicleConnection: (0, _connections.connectionFromUrls)('PersonVehicles', 'vehicles', _vehicle2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('people')
  }),
  interfaces: () => [_relayNode.nodeInterface]
}); /**
     * Copyright (c) 2015-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the license found in the
     * LICENSE-examples file in the root directory of this source tree.
     *
     *  strict
     */

exports.default = PersonType;