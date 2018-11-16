var webpack = require('webpack');
var path = require("path");

var config = {

    entry: undefined,

    output: {
        pathinfo: true
    },

    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'window.jQuery': "jquery",
            'jQuery': 'jquery',
            'window.$': 'jquery',
        }),
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve('src'),
                exclude: path.resolve('node_modules'),
            },
            {
                test: /\.js$/,
                loader: 'istanbul-instrumenter-loader',
                include: path.resolve('src'),
                exclude: path.resolve('node_modules'),
                enforce: 'post'
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.(jpg|png|svg|eot|ttf|woff|woff2|cur)$/,
                loader: 'url-loader'
            }
        ]
    },
    externals: {
		'jsdom': 'window',
        'cheerio': 'window',
        'react/addons': 'react',
        'react/lib/ExecutionEnvironment': 'react',
        'react/lib/ReactContext': 'react',
        _capabilities: "_capabilities",
        _PageAuthorization: "_PageAuthorization"
    }
};

module.exports = config;
