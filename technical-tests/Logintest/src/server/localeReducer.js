import getMessages from './getMessages';

export default function localeReducer(json, id, language, country) {
    const { countries } = json;
    const { region, currency, currencySymbol, name } = countries[country];
    const messages = getMessages(language);

    return {
        id,
        language,
        country,
        region,
        name,
        currency,
        currencySymbol,
        countries: orderedCountries(Object.keys(countries), messages),
        states: getStatesFromCountries(countries)
    };
}

function getStatesFromCountries(countries) {
    const states = {};
    const countryKeys = Object.keys(countries);

    for (let i = 0; i < countryKeys.length; i++) {
        const country = countries[countryKeys[i]];
        if (country.states) states[countryKeys[i]] = country.states;
    }

    return states;
}

function orderedCountries(countries, messages) {
    return countries.sort((countryISOA, countryISOB) => {
        if (messages.countries[countryISOA]() < messages.countries[countryISOB]()) return -1;
        if (messages.countries[countryISOA]() > messages.countries[countryISOB]()) return 1;
        return 0;
    });
}
