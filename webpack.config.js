let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let formatter = require('eslint/lib/formatters/stylish');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(`${__dirname}, '/dist/'`),
    filename: 'bundle.js'
  },
  watch: true,
  mode: 'development',
  devtool: "source-map",
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
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }// compiles Sass to CSS}
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
            presets: [["env", {
              targets: {
                browsers: ['> 1%', 'last 2 versions']
              }
            }]]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '...',
      template: path.resolve('./src/', 'index.html'),
      filename: 'index.html',
      hash: true
    })
  ]
};