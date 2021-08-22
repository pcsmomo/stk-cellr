const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (webpackEnv) {
  const isDevMode = webpackEnv.WEBPACK_SERVE ? true : false;

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle[contenthash].js',
      path: path.resolve(__dirname, './build')
    },
    mode: isDevMode ? 'development' : 'production',
    devServer: {
      compress: false,
      hot: true,
      port: 9000
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 3 * 1024 // 3 kilobytes, The default size is 8kb
            }
          }
        },
        {
          test: /\.txt/,
          type: 'asset/resource'
        },
        {
          test: /\.css$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles[contenthash].css'
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          path.join(process.cwd(), 'build/**/*')
        ]
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
    ]
  };
};
