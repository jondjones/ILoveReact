'use strict';

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _index = require('./schema/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)(); /**
                                       * Copyright (c) 2015-present, Facebook, Inc.
                                       * All rights reserved.
                                       *
                                       * This source code is licensed under the license found in the
                                       * LICENSE-examples file in the root directory of this source tree.
                                       *
                                       */

app.use((0, _cors2.default)({ origin: '*' }));

// Requests to /graphql redirect to /
app.all('/graphql', (req, res) => res.redirect('/'));

// Load our own GraphiQL (since express-graphql has an older graphiql version)
app.use('/graphiql', _express2.default.static('./public'));

// Provide the static schema for reference in a few formats
app.get('/schema', (req, res) => {
  res.set('Content-Type', 'text');
  _fs2.default.readFile('./schema.graphql', 'utf-8', (err, file) => {
    res.write(Buffer.from(file));
    res.end();
  });
});
// octet-stream
app.use('/schema.graphql', _express2.default.static('./schema.graphql'));

// Finally, serve up the GraphQL Schema itself
app.use('/', (0, _expressGraphql2.default)(() => ({ schema: _index2.default })));

module.exports = app;