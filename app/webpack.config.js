const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      'expUiComponents-distinct': path.resolve(
        root,
        'expUiComponents-distinct'
      ),
      'expUiComponents-fork': path.resolve(root, 'expUiComponents-fork'),
      'expUiComponents-wrap': path.resolve(root, 'expUiComponents-wrap'),
      // aliasing these so they aren't included multiple times
      react: path.resolve(__dirname, 'node_modules', 'react'),
      'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
      'react-transition-group': path.resolve(
        __dirname,
        'node_modules',
        'react-transition-group'
      ),
      'prop-types': path.resolve(__dirname, 'node_modules', 'prop-types'),
      '@material-ui': path.resolve(__dirname, 'node_modules', '@material-ui'),
      classnames: path.resolve(__dirname, 'node_modules', 'classnames'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|expUiComponents)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
