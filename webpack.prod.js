// entry -> output
const path = require('path');

module.exports = {
  mode: 'production',  
  entry: path.join(__dirname, 'src/app.tsx'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // externals: ['axios'],
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
      loader: 'ts-loader',
      // Regular expression to include all .js files
      test: /\.tsx$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
  }
};