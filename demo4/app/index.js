// console.log('index.js')

// 导入jQuery
// _就是$
let _ = require('jquery')
// let _ from 'jquery'
// import _ from jquery

_(function(){
	_('#home').on('click',function(){
		_.ajax({
			type : 'GET',
			// 匹配app.get('/home',(req,res)
			url : '/home',
			// 前后端分离
			// 注意路径问题
			// url : 'http://localhost:10000/home',
			success : function(result){
				console.log('result ==>',result)
			}
		})
	})

	_('#app').on('click',function(){
		_.ajax({
			type : 'GET',
			// 匹配app.get('/home',(req,res)
			url : '/app',
			success : function(result){
				console.log('proxyresult ==>',result)
			}
		})
	})
})