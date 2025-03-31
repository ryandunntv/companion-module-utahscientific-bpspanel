const path = require('path');

module.exports = {
  target: 'node', // Bundle for Node.js (Companion runs in Node)
  mode: 'production', // Optimizes the output for production use
  entry: './index.js', // Entry point – adjust if your main file is different
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2', // Ensures compatibility with Node module exports
  },
  resolve: {
    extensions: ['.js'], // Resolve JavaScript files automatically
  },
  externals: {}, // Bundle all dependencies into the output file
};
