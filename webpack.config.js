const path = require('path');

const INCLUDE = path.resolve(__dirname, 'src');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'build'),
    library: 'windows-controls',
    libraryTarget: 'commonjs',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/i,
        use: ['ts-loader'],
        include: INCLUDE,
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        include: INCLUDE,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: 'react',
  },
};
