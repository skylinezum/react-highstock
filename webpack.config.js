var webpack = require('webpack');

module.exports = {
  entry: './src/highstock',
  output: {
    libraryTarget: 'umd',
    library: 'ReactHighstock',
    path: './dist/',
    filename: 'react-highstock.js',
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
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react/addons': {
        root: 'React',
        commonjs2: 'react/addons',
        commonjs: 'react/addons',
        amd: 'react/addons'
      }
    },
    {
      'highstock-browserify': {
        root: 'Highstock',
        commonjs2: 'highstock',
        commonjs: 'highstock',
        amd: 'highstock'
      }
    }
  ],
  node: {Buffer: false},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
