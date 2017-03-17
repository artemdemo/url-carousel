const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackBase = require('./webpack.config');

module.exports = Object.assign(webpackBase, {
    output: Object.assign(webpackBase.output, {
        filename: './[name].js',
    }),
    plugins: webpackBase.plugins.concat([
        new ExtractTextPlugin('./[name]-styles.css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': `"production"`
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ])
});
