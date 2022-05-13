const path = require('path'); //Viene en node, solo hace falta importarlo para usarlo

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 

module.exports = {
  mode: "development",
  //Donde se encuentra mi archivo que será minificado 
  entry: { 
    index: './src/index.js'
  },
  output: {
    //La ruta de salida de mi archivo
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].main.js',
  },
  devServer: {
    open: true,
    static: "./dist",
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                ['@babel/preset-env', {targets: "defaults"}]
            ]
        }
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './public/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: './src/styles/styles.css',
        to: '',
      }]
    })
  ]
}