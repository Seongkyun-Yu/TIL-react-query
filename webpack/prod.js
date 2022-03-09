const commonConfig = require("./common");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: false,
              experimentalWatchApi: false,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.EnvironmentPlugin({
      // configs
    }),
  ],
});
