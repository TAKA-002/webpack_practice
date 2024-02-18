const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSSを別ファイルに出力するプラグイン
const HtmlWebpackPlugin = require("html-webpack-plugin"); // HTMLを出力するプラグイン
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	// webpackが最初に見に行くファイル（エントリーポイント）
	entry: "./src/javascripts/main.js",
	output: {
		// webpackでバンドルしたファイルを出力するディレクトリを指定（絶対パスではないといけない）
		path: path.resolve(__dirname, "./dist"),
		filename: "./javascripts/main.js",
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: [
					{ loader: MiniCssExtractPlugin.loader }, // CSSを別ファイルに出力するローダーへstyle-loaderから変更
					{ loader: "css-loader" },
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "./stylesheets/main.css" }),
		new HtmlWebpackPlugin({
			inject: "body",
			template: "./src/templates/index.html",
		}),
		new CleanWebpackPlugin(),
	], // プラグインを追加
};
