import path from 'path';


export default {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, './client/index.js'),
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        use: [ 'babel-loader' ]
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'development'
};