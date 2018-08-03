let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    publicPath : '/dist/',
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }// compiles Sass to CSS}
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {
              targets: {
                browsers: ['> 1%', 'last 2 versions']
              }
            }]]
          }
        }
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  },
  performance: { hints: false },
  plugins: [
    new HtmlWebpackPlugin({
      title: '...',
      template: path.resolve('./src/', 'index.html'),
      filename: 'index.html',
      hash: true
    })
  ]
};