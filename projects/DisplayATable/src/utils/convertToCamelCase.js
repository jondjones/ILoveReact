const snakeToCamel = (object) => {
    return Object.keys(object).forEach(e => convert(e));
}

const convert = (str) => str?.replace(
    /([-_][a-z])/g,
    (group) => group?.toUpperCase()?.replace('-', '')?.replace('_', '')
);

export default snakeToCamel;