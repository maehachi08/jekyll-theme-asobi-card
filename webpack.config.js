const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    'index': [
      path.resolve(__dirname, 'src/js/index.js')
    ]
  },

  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'assets/'),
    publicPath: '/',
  },

  plugins: [

    //////
    // copy-webpack-plugin
    // https://github.com/webpack-contrib/copy-webpack-plugin
    //////
    // new CopyWebpackPlugin({
    //   patterns: [
    //       {
    //           from: '/path/to/src',
    //           to: '/path/to/dest'
    //       }
    //   ]
    // }),
    new CopyWebpackPlugin({
      patterns: [
          {
              from: './src/css',
              to: 'css'
          },
          {
              from: './src/semantic-ui/2.4.1',
              to: 'semantic-ui'
          },
          {
              from: './node_modules/jquery/dist/jquery.min.js',
              to: 'js/jquery.min.js'
          },
          {
              from: './node_modules/lunr/lunr.js',
              to: 'js/lunr/lunr.js'
          },
          {
              from: './node_modules/lunr-languages/lunr.stemmer.support.js',
              to: 'js/lunr/lunr.stemmer.support.js'
          },
          {
              from: './node_modules/lunr-languages/tinyseg.js',
              to: 'js/lunr/tinyseg.js'
          },
          {
              from: './node_modules/lunr-languages/lunr.ja.js',
              to: 'js/lunr/lunr.ja.js'
          },
          {
              from: './node_modules/lunr-languages/lunr.multi.js',
              to: 'js/lunr/lunr.multi.js'
          },
          {
              from: './src/js/lunr/search.js',
              to: 'js/lunr/search.js'
          }
      ]
    }),

    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ["node_modules",path.resolve(__dirname, "src")]
  },

};
