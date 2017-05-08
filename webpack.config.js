const webpack = require('webpack') //to access built-in plugins
const path = require('path')
const ExtractTextPlugin  = require('extract-text-webpack-plugin')
const version = process.env.VERSION || require('./package.json').version

const banner =
  ' Vue-demo v' + version + '\n' +
  ' (c) 2017-' + new Date().getFullYear() + ' you06\n' +
  ' Released under the MIT License.\n'

const config = {
  entry: path.resolve(__dirname, 'src/scripts/app.js'),
  context: path.resolve(__dirname, "dist"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/',
    chunkFilename: '[id].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, "src"),
        ],
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin()
    new webpack.BannerPlugin(banner)
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
};

module.exports = config;