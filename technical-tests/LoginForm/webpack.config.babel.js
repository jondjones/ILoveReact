import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import messages from './src/app/messages';

const gitHash = process.env.GIT_HASH;
const entry = ['./src/app/index.js', './src/app/index.css'];
const outputPath = path.join(__dirname, './build/assets');
const buildConfigPath = './build/server/config';
const buildConfig = { gitHash, assets: {} };
const dev = process.env.NODE_ENV === 'development';
const languages = Object.keys(messages);

function noop() {}

function getHashedAssets(callback) {
    return function writeStats() {
        this.plugin('done', stats => {
            const json = stats.toJson();
            const publicPath = this.options.output.publicPath || '';

            const styles = [];
            const scripts = [];
            json.assets.forEach(asset => {
                if (asset.name.match(/\.css$/)) {
                    styles.push(publicPath + asset.name);
                } else if (asset.name.match(/\.js$/)) {
                    scripts.push(publicPath + asset.name);
                }
            });

            const styleIncludes = styles.reduce((html, file) => `${html}<link rel="stylesheet" href="${file}" />\n`, '');
            const scriptIncludes = scripts.reduce((html, file) => `${html}<script src="${file}" defer></script>\n`, '');

            callback({ styles: styleIncludes, scripts: scriptIncludes });
        });
    };
}

function createConfig(singleLanguage) {
    const bundleName = `ma${singleLanguage ? `.${singleLanguage}` : ''}`;

    return {
        entry,
        devtool: 'source-map',
        output: {
            path: outputPath,
            filename: `${bundleName}${dev ? '.bundle.js' : '-[chunkhash:8].bundle.js'}`,
            devtoolModuleFilenameTemplate: 'myaccount:///[resource-path]'
        },
        module: {
            rules: [
                {
                    test: /\.js$/i,
                    exclude: /node_modules\/(?!(@ynap)\/).*/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', ['env', { targets: { browsers: ['ie >= 10'] } }], 'stage-0']
                    }
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'postcss-loader']
                    })
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    loader: `url-loader?limit=2000&name=${dev ? '[path][name].[ext]' : '[path][name]-[hash:8].[ext]'}`
                },
                {
                    test: /\.svg$/i,
                    loader: `svg-url-loader?limit=3000&name=${dev ? '[path][name].[ext]' : '[path][name]-[hash:8].[ext]'}`
                },
                {
                    test: /\.(woff|woff2|ttf|eot)$/i,
                    loader: `file-loader?name=${dev ? '[path][name].[ext]' : '[path][name]-[hash:8].[ext]'}`
                }
            ].concat(
                languages.map(language => {
                    const ignoreLanguage = singleLanguage && language !== singleLanguage;
                    return { test: new RegExp(`/${language}.json$`), loader: ignoreLanguage ? 'null-loader' : `messageformat-loader?locale=${language}` };
                })
            )
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new ExtractTextPlugin(`${bundleName}${dev ? '.bundle.css' : '-[chunkhash:8].bundle.css'}`),
            dev
                ? noop
                : new webpack.optimize.UglifyJsPlugin({
                      compress: {
                          warnings: false
                      },
                      output: {
                          comments: false
                      }
                  }),
            dev
                ? noop
                : new webpack.DefinePlugin({
                      'process.env': {
                          NODE_ENV: '"production"'
                      }
                  }),
            dev
                ? noop
                : getHashedAssets(assets => {
                      const file = path.resolve(__dirname, `${buildConfigPath}/build.json`);
                      buildConfig.assets[singleLanguage] = assets;
                      fs.writeFileSync(file, JSON.stringify(buildConfig));
                  })
        ]
    };
}

export default (dev ? createConfig() : languages.map(language => createConfig(language)));
