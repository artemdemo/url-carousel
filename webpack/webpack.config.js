const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        popup: './source/popup.jsx',
        options: './source/options.jsx',
        background: './source/background.jsx',
        carousel: './source/carousel.jsx',
    },
    output: {
        path: `${__dirname}/../build`,
        filename: './[name].js',
        publicPath: '/',
    },
    devServer: {
        port: 8080,
        contentBase: 'build/',
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader',
                ],
            },
            {test: /\.(png|gif|jpg)(\?.*$|$)/, loader: 'url-loader?limit=100000&name=images/[hash].[ext]'},
            {test: /\.(json)(\?.*$|$)/, loader: 'json-loader'},
            {test: /\.(html)(\?.*$|$)/, loader: 'html-loader'},
            // Font Definitions
            {test: /\.(svg)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'},
            {test: /\.(woff)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'},
            {test: /\.(woff2)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'},
            {test: /\.([ot]tf)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
            {test: /\.(eot)(\?.*$|$)/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'},
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['./url-carousel/build'], {
            verbose: true,
            dry: false,
            root: path.resolve(__dirname, '../../'),
            exclude: ['.gitignore'],
        }),
        new CopyWebpackPlugin([
            { from: './source/manifest.json' },
            { from: './source/images/', to: './images' },
        ]),
        new HtmlWebpackPlugin({
            chunks: ['popup'],
            template: './source/popup.html',
            filename: './popup.html',
        }),
        new HtmlWebpackPlugin({
            chunks: ['options'],
            template: './source/options.html',
            filename: './options.html',
        }),
        new HtmlWebpackPlugin({
            chunks: ['carousel'],
            template: './source/carousel.html',
            filename: './carousel.html',
        }),
    ],
};
