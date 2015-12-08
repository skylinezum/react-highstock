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
        react: 'React',
        'react/addons': 'React',
        'highstock-browserify': 'Highstock'
    },
    node: {Buffer: false}
};
