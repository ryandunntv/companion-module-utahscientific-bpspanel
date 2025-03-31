const path = require('path');

module.exports = {
  target: 'node', // Companion modules run in a Node environment
  mode: 'production', // Use production mode for optimized output
  entry: './index.js', // Entry point – adjust this if your main file is elsewhere
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2', // Export as CommonJS2 for Node compatibility
  },
  resolve: {
    extensions: ['.js'], // Resolve JavaScript files
  },
  // In most cases, you want to bundle all dependencies.
  // If you need to leave some packages unbundled, you can add them here:
  externals: {},
};
