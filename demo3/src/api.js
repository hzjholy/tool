// 其他文件无法访问a，b变量
// 只能访问下面暴露的函数
// a、b变量在其他文件不可见，这里可以见
var a = 1
var b = 2

// 导出函数
module.exports = function(){
	return a + b
}