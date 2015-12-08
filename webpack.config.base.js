var webpack = require('webpack');

module.exports = {
    output: {
        libraryTarget: 'umd',
        library: 'ReactHighstock',
        path: './dist/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        react: 'react/addons',
        'react/addons': 'react/addons',
        'highstock-browserify': 'Highstock'
    },
    node: {Buffer: false}
};
