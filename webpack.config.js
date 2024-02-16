const path = require("path");

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
				use: [{ loader: "style-loader" }, { loader: "css-loader" }],
			},
		],
	},
};
