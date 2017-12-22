const path = require('path');
const webpack  = require('webpack');

module.exports = function () {
  return {
    entry: './src/webp.js',
    output: {
      filename: 'webp.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'webp',
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        { test: /\.less$/, use: 'less-loader' },
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
    ]
  };
}
