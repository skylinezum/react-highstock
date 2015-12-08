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
        react: 'react',
        'react/addons': 'react',
        'highstock-browserify': 'Highstock'
    },
    node: {Buffer: false}
};
