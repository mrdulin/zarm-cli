const path = require('path');
const ZarmDocPlugin = require('./src/plugin.js');

module.exports = {
  entries: {
    index: {
      entry: ['./example/index.js'],
      template: './example/index.html',
    },
  },
  setRules: (rules) => {
    rules.push({
      test: /\.md$/,
      use: [
        'raw-loader',
        path.resolve(__dirname, './src/index.js'),
      ],
    });
  },
  // setPlugins: (plugins) => {
  //   plugins.push(new ZarmDocPlugin());
  // },
};
