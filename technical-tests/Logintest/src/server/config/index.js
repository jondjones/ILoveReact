import etc from 'etc';
import path from 'path';
import yaml from 'etc-yaml';

const config = etc('.').use(yaml).argv()
    .env('myaccount_', '_')
    .file(process.env.NODE_ENV === 'development' ? path.join(__dirname, 'development.yaml') : null)
    .file(path.join(__dirname, 'default.yaml'))
    .file(path.join(__dirname, 'build.json'))
    .set('env', process.env.NODE_ENV);

const assets = config.get('assets');

// prepend assets with baseurl
if (typeof assets === 'object' && assets.baseUrl) {
    Object.keys(assets).forEach((language) => {
        ['scripts', 'styles'].forEach((type) => {
            if (assets[language][type]) {
                assets[language][type] = assets[language][type].replace(/([^"'\s)]+\.(js|css))/ig, (match, assetPath) => assets.baseUrl + assetPath);
            }
        });
    });
    config.reset('assets', assets);
}

export default config.toJSON();
