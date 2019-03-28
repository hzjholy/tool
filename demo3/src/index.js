// 这个index.js文件需要用到其他js文件引入
// 导入api.js文件
// './'这里不能省略
// 通过require导入路径

var api = require('./api.js')
// 上面代码的意思相当于
/*
	function(){
		return a + b
	}
*/
// 所以这里的api不是变量，是一个函数
// 下面就是api的函数调用

window.onload = function(){
	var result = api()
	console.log('result ———' ,result)
}