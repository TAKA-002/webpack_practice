const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSSを別ファイルに出力するプラグイン

module.exports = {
	// webpackが最初に見に行くファイル（エントリーポイント）
	entry: "./src/index.js",
	output: {
		// webpackでバンドルしたファイルを出力するディレクトリを指定（絶対パスではないといけない）
		path: path.resolve(__dirname, "./dist"),
		filename: "main.js",
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
	plugins: [new MiniCssExtractPlugin()], // プラグインを追加
};
