/* eslint global-require: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
module.exports = {
    plugins: [require('postcss-import')(), require('postcss-cssnext')(), require('postcss-url')()]
};
