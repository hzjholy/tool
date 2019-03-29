let path = require('path')


// 导入分离css插件
let miniCssExtractPlugin = require('mini-css-extract-plugin')

// 处理html压缩文件
let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	// 环境模式
	// 开发环境模式
	// mode : 'development',

	// 生产环境
	// 压缩版本
	mode : 'production',

	entry : {
		// app : './app/app.js',
		// home : './app/home.js'
		index : './app/index.js'
	},
	output : {
		path : path.resolve(__dirname, '../public'),
		filename : '[name].js'
	},
	// css文件配置
	module : {
		// 配置loader
		rules : [
			// css-loader
			// 安装两个
			{
				// 匹配css文件后缀
				// \.转义. , 正则匹配
				test : /\.css$/,
				// 使用css-loader
				use : [
					// css和js混合时，需要用到style-loader
					// {loader : 'style-loader'},
					// css和js分离时，需要用到miniCssExtractPlugin.loader
					{loader: miniCssExtractPlugin.loader},
					{loader : 'css-loader'}
				]
			},

			// less-loader
			{
				// 匹配文件后缀名less
				test : /\.less$/,

				// 使用less-loader
				use : [
					// css和js混合时，需要用到style-loader
					// {loader : 'style-loader'},
					{loader : miniCssExtractPlugin.loader},
					{loader : 'css-loader'},
					{loader : 'less-loader'}
				]
			},

			// sass-loader
			{
				// 匹配文件后缀名sass/scss
				// 使用\转义.
				test : /\.(sass)|(scss)$/,
				use : [
					// {loader : 'style-loader'},
					{loader : miniCssExtractPlugin.loader},
					{loader : 'css-loader'},
					{loader : 'sass-loader'}
				]
			},

			// 图片loader
			{
				test : /\.(png|gif|jpeg|jpg)$/,
				use : [
					{
						loader : 'url-loader',						// 默认是base64
						options : {
							// 将图片转换为base64大小范围
							// 单位是B
							// 10000B以内就转为base64
							limit : 10000
						}

					}
				]
			},

			// 处理文件图片路径
			{
				// ?修饰‘l’，可有可无
				test : /\.html?$/,
				use : [
					{loader : 'html-withimg-loader'}
				]
			}
		]
	},

	// 配置css文件分离js插件
	// 配置插件
	plugins : [

		// 分离css插件
		new miniCssExtractPlugin({
			filename : '[name].min.css'
		}),

		// 处理hmtl文件插件
		new htmlWebpackPlugin({
			// 模板路径
			// template : './app.html',
			template : './index.html',

			// 文件输出名filename
			// 如果没有filename字段
			// 默认输出名称为index.html
			// filename : 'app.min.html',
			filename : 'index.html',

			// inject将打包后的脚本注入到head或者body
			// 或者移除脚本
			// inject : 'head',
			inject : true,

			// html压缩配置
			minify : {

				// 移除注释
				removeComments : true,

				// 移除标签属性的引号
				removeAttributeQuotes : true,

				// 合并开白字符
				collapseWhitespace : true,

			}

		})
	],

	// 配置webpack本地服务器
	devServer : {
		// 最简单ip+端口
		// ip地址
		host : 'localhost',

		// 服务器监听端口
		// 5000以上
		port : 10000,

		// 打包显示信息方式，没什么鸟用
		inline : true,

		// 显示百分比
		progress :　true,

		// 自动打开浏览器
		open : true,

		// 配置请求路由
		// before : function(){}
		before(app){
			// 服务器实例

			// 配置请求地址
			// req 请求对象，前台向后台请求对象，
			// 后台拦截req，并查询数据库等等或者其他操作
			// res 服务器响应对象
			app.get('/home',(req,res) => {
				// 返回json
				// json返回对象或者数组
				res.json({
					msg : '成功'
				});
			})

			app.get('/detail',(req,res) => {
				res.json({
					msg : 'success',
					status : 200
				})
			})

			// 处理404错误
			// 请求地址不存在
			// use是nodejs
			// app.use('')
		},

		// 代理服务器
		proxy : {
			// 路径文件名,随便写
			// 重定向到其他服务器地址请求数据
			'/app' : {

				//重定向
				target : "http://localhost:10001",

				// 路径重写
				pathRewrite : {
					'^/app' : ''
				}


			}
		}


	}


}
