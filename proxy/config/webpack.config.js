module.exports = {
	mode : 'development',

	// 代理服务器
	devServer : {
		host : 'localhost',
		port : 10001,
		inline : true,
		progress : true,
		before(app){
			app.get('',(request,response) => {
				// req:请求对象 request
				// res：响应对象 response

				response.json({
					msg : '代理请求成功'
				});
			})
		}
	}
}