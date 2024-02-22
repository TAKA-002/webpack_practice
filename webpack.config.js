const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSSを別ファイルに出力するプラグイン
const HtmlWebpackPlugin = require("html-webpack-plugin"); // HTMLを出力するプラグイン
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "source-map",
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
				test: /\.js/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								["@babel/preset-env", { targets: "> 0.25%, not dead" }],
								"@babel/preset-react",
							],
						},
					},
				],
			},
			{
				test: /\.(css|sass|scss)/,
				use: [
					{ loader: MiniCssExtractPlugin.loader }, // CSSを別ファイルに出力するローダーへstyle-loaderから変更
					{ loader: "css-loader", options: { sourceMap: true } },
					{ loader: "sass-loader" },
				],
			},
			{
				test: /\.(png|jpg|jpeg)/,
				type: "asset/resource",
				generator: {
					filename: "images/[name][ext]",
				},
				use: [
					// {
					// 	loader: "file-loader",
					// 	options: { esModule: false, name: "images/[name].[ext]" },
					// },
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
						},
					},
				],
			},
			{
				test: /\.pug/,
				use: [
					{ loader: "html-loader" },
					{ loader: "pug-html-loader", options: { pretty: true } },
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "./stylesheets/main.css" }),
		new HtmlWebpackPlugin({
			inject: "body",
			template: "./src/templates/index.pug",
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			inject: "body",
			template: "./src/templates/access.pug",
			filename: "access.html",
		}),
		new HtmlWebpackPlugin({
			inject: "body",
			template: "./src/templates/members/taro.pug",
			filename: "members/taro.html",
		}),
		new CleanWebpackPlugin(),
	], // プラグインを追加
	devServer: {
		static: path.resolve(__dirname, "src"),
	},
};
