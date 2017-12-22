module.exports = function () {
  return {
    entry: './example/index.js',
    output: {
      filename: './example/example.js',
    },
    module: {
      rules: [
        { test: /\.less$/, use: [ 'style-loader', 'css-loader', 'less-loader' ] },
      ]
    }
  };
}
