'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = localeReducer;

var _getMessages = require('./getMessages');

var _getMessages2 = _interopRequireDefault(_getMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function localeReducer(json, id, language, country) {
    var countries = json.countries;
    var _countries$country = countries[country],
        region = _countries$country.region,
        currency = _countries$country.currency,
        currencySymbol = _countries$country.currencySymbol,
        name = _countries$country.name;

    var messages = (0, _getMessages2.default)(language);

    return {
        id: id,
        language: language,
        country: country,
        region: region,
        name: name,
        currency: currency,
        currencySymbol: currencySymbol,
        countries: orderedCountries(Object.keys(countries), messages),
        states: getStatesFromCountries(countries)
    };
}

function getStatesFromCountries(countries) {
    var states = {};
    var countryKeys = Object.keys(countries);

    for (var i = 0; i < countryKeys.length; i++) {
        var country = countries[countryKeys[i]];
        if (country.states) states[countryKeys[i]] = country.states;
    }

    return states;
}

function orderedCountries(countries, messages) {
    return countries.sort(function (countryISOA, countryISOB) {
        if (messages.countries[countryISOA]() < messages.countries[countryISOB]()) return -1;
        if (messages.countries[countryISOA]() > messages.countries[countryISOB]()) return 1;
        return 0;
    });
}