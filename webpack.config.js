const webpack = require('webpack');

module.exports = {
    resolve: {
        fallback: {
            util: require.resolve('util/'),
            path: require.resolve('path-browserify'),
            https: false,
            http: false
        },
        alias: {
            process: 'process/browser',
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    entry: './dist/js/index.mjs',
    output: {
        path: `${__dirname}/dist/webpack/`,
        filename: 'index.mjs',
        library: 'isImg',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    mode: 'production',
};
