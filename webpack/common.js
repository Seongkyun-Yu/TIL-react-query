const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log("Dirname", resolve(__dirname, "../../"));

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: "js/bundle.[hash].min.js",
    path: resolve(__dirname, "../dist"),
  },
  context: resolve(__dirname, "../src"),
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })],
};
