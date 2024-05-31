const path = require('path');

module.exports = {
  entry: './src/axios.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'miniprogram-request.js',
    path: path.resolve(__dirname, './miniprogram')
  }
};