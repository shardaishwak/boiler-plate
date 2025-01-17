const path = require("path")
const autoprefixer = require("autoprefixer")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const host = process.env.HOST || "0.0.0.0"

module.exports = {
	devServer: {
		port: 3000,
		overlay: true,
		host,
		disableHostCheck: true
	},
	devtool: "cheap-module-eval-source-map",
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
				exclude: /node_modules/,
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
				exclude: /node_modules/,
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
	]
}
