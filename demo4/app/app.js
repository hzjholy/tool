// 导入css文件
// ES6规范
import app from '../css/app.css'

import img from '../images/1.jpg'

require('../sass/detail.scss')
console.log('img ===>',img)


console.log('app')

window.onload = function(){
	let image =  new Image()

	// data:image/jpeg;base64
	// .+修饰png|gif|jpeg|jpg
	// var reg = /data:image\/.+;base64,/
	// // 判断图片属性
	// if(reg.test(img)){
	// 	// 如果是base64位
	// 	image.src = img
	// }else{
	// 	// 否则就是一个路径地址
	// 	image.src = './public/' + img
	// }

	image.className = 'auto-img'

	image.src = img

	
	document.getElementById('imgBox').appendChild(image)
}