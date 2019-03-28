var api = require('./api.js')

window.onload = function(){
	var result = api();
	console.log('result ==>',result)
}