const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});
rules.push({
  test: /\.js$/,
  use: [
      {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/react', '@babel/env']
          }
      }
  ],
  exclude: /node_module/,
})

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
