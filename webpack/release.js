var path = require("path");
let fs = require("fs");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
let HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
// let { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
let DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
let ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

let { matchCssRule, matchFontsRule, matchTsReleaseRule, matchMdRule } = require("./shared");
let splitChunks = require("./split-chunks");

let trackingCode = "";

module.exports = {
  mode: "production",
  entry: {
    main: ["./example/main.tsx"],
  },
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.join(__dirname, "../dist"),
  },
  devtool: "hidden-source-map",
  optimization: {
    minimize: true,
    chunkIds: "named",
    splitChunks: splitChunks,
  },
  module: {
    rules: [matchCssRule, matchFontsRule, matchTsReleaseRule, matchMdRule],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.join(__dirname, "../example"), "node_modules"],
    alias: {
      "meson-form$": path.resolve(__dirname, "../src/form.tsx"),
      immutable$: path.join(__dirname, "../node_modules/immutable/dist/immutable.min.js"),
    },
  },
  stats: {
    all: false,
    colors: true,
    errors: true,
    errorDetails: true,
    performance: true,
    reasons: true,
    timings: true,
    warnings: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template.ejs",
      trackingCode,
    }),
    new DuplicatePackageCheckerPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};
