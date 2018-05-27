var webpack = require('webpack');
var path = require('path');
var proxy = require('http-proxy-middleware');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');

/*var extractCSS =  new ExtractTextPlugin(production ? "style.[hash].css" : "style.css", {
    disable: false,
    allChunks: true  // 所有独立样式打包成一个css文件
});*/
module.exports = {
	mode:'development',
	entry:'./src/main.js',//项目入口文件
	output:{
		path: path.resolve(__dirname, 'dist'),//打包后的目录
		filename:'build.js'//打包后的文件
	},
	module:{
		rules:[
		 	{  
                test: /\.css$/,  
                use: ['style-loader','css-loader']  
            },
            {
			    test: /\.(scss|sass)$/,
			    use: [{
				    loader: 'style-loader'
				}, {
				    loader: 'css-loader'
				}, {
				    loader: 'sass-loader'
				}]
			},    
			{
				test:/\.vue$/,
				use:'vue-loader'
			},
			{
    　　　　　　test: /\.(png|svg|jpg|gif|woff|woff2|svg|eot|ttf)$/,
                loader: 'url-loader?limit=8192&&name=img/[name].[ext]'
            } ,
			{test:/\.js$/, use:'babel-loader', exclude:/node_modules/}//设置node_modules里的js文件不用解析
		]
	},
	devServer:{
	    proxy: {
	      // proxy all requests starting with /api to jsonplaceholder
	      '/api': {
	        target: 'http://localhost:8089/api/',
	        changeOrigin: true,
	        pathRewrite: {
	          '^/api': ''
	        }
	      }
	    }
	 },
	plugins: [
	    //new webpack.optimize.UglifyJsPlugin(),
	    new HtmlWebpackPlugin({
	    	template: './index.html',
	    	inject:true
	    }),
	    new VueLoaderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    //extractCSS
	  ]
}