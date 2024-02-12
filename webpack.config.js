const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

function makePage(a) {
  return new HtmlWebpackPlugin({
    filename: `${a}.html`,
    template: path.resolve(__dirname, 'src', 'pages', `${a}.njk`),
    inject: true,
    // favicon: './src/assets/images/logo.svg', // make in _head/njk
  });
}

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: path.join('assets', '[name].[contenthash][ext]'),
  },
  plugins: [
    makePage('index'),
    // makePage('aboutMe'),
    // makePage('components'),
    // makePage('petProjects'),
    // makePage('portfolio'),
    // makePage('practiceJS'),

    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
        onEnd: {
          copy: [
            {
              source: path.join('src/assets', 'static'),
              destination: 'dist/assets/static',
            },
            {
              source: path.join('src/assets', 'download'),
              destination: 'dist/assets/download',
            },
          ],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$|njk|nunjucks/,
        use: [
          'html-loader',
          {
            loader: 'nunjucks-html-loader',
            options: {
              searchPaths: ['src/templates', 'src/templates/partials'],
              assetsPaths: ['src/assets'],
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name].[contenthash][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024,
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { name: 'preset-default' }],
            ],
          },
        },
      }),
    ],
  },
  devServer: {
    watchFiles: path.resolve(__dirname, 'src'),
    port: 9000,
    hot: true,
    client: {
      progress: true,
    },
  },
  devtool: isDev ? 'source-map' : undefined,
};
