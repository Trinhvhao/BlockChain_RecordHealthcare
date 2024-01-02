// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // your existing configuration...

  plugins: [
    // ...
    new webpack.HotModuleReplacementPlugin(),
  ],
};
