const path = require("path")
const autoprefixer = require("autoprefixer")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const UgliftJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
	devtool: "cheap-module-source-map",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		chunkFilename: "[id].js",
		publicPath: ""
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]__[local]__[hash:base64:5]"
						}
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: () => {
								autoprefixer({
									browsers: ["> 1%", "last 2 versions"]
								})
							}
						}
					}
				]
			},
			{
				test: /\.module.scss$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: "[name]__[local]__[hash:base64:5]"
						}
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: () => {
								autoprefixer({
									browsers: ["> 1%", "last 2 versions"]
								})
							}
						}
					},
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.scss$/,
				exclude: /\.module.s(a|c)ss$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: false,
							importLoaders: 1,
							localIdentName: "[name]__[local]__[hash:base64:5]"
						}
					},
					{
						loader: "postcss-loader",
						options: {
							ident: "postcss",
							plugins: () => {
								autoprefixer({
									browsers: ["> 1%", "last 2 versions"]
								})
							}
						}
					},
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: "url-loader?limit=8000&name=images/[name].[ext]"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/public/index.html",
			filename: "index.html",
			inject: "body"
		})
	],
	optimization: {
		minimizer: [
			new UgliftJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			})
		]
	}
}
