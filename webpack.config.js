const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //if you unuse typescript entry
  //entry: './src/index.ts',
  output: {
    filename: "src/[name].[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./" // comment to npm start
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-object-rest-spread"],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg|avif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      // Nouvelle règle pour les fichiers PDF
      {
        test: /\.pdf$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[hash].[ext]", // option pour le nom de fichier de sortie
            },
          },
        ],
      },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      "Access-Control-Allow-Credentials": true
    },
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 5004,
    open: true,
    hot: true,
    client: {
      logging: 'info',
      overlay: true,
      progress: true,
      webSocketTransport: 'ws'
    },
    webSocketServer: 'ws'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      inject: "body",
      hash: true,
    }),
    new ESLintPlugin({
      extensions: ["js", "ts"],
      exclude: "node_modules",
      files: "./src/",
    }),
  ],
};
