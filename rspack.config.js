const path = require('path');
const { rspack } = require('@rspack/core');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new rspack.CopyRspackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "./Icons/Line"), to: "icons/Line" },
        { from: path.resolve(__dirname, "./Icons/Duotone"), to: "icons/Duotone" },
        { from: path.resolve(__dirname, "./Icons/Fill"), to: "icons/Fill" },
      ],
    }),
    new rspack.HtmlRspackPlugin({
      title: 'Sargam Icons',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template.html'),
      favicon: path.resolve(__dirname, 'src/favicon.ico'),
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    }),
  ],
};