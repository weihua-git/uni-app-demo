const baseUrl = 'http://23.133.5.232:8080/app'
const request = (url = '', date = {}, type = 'GET', header = {}) => {
	return new Promise((resolve, reject) => {
		uni.request({ 
			method: type,
			url: baseUrl + url,
			data: date,
			header: header, 
			// dataType: 'json',
		}).then((response) => { 
			console.log(response,"sadasda11sddsasad");
			// setTimeout(function() { 
			// 	uni.hideLoading();
			// }, 200);
			let [error, res] = response;
			resolve(res.data); 
		}).catch(error => {
			
			let [err, res] = error;
			console.log(err);
			reject(err)
		})
	});
}

// uni.addInterceptor('request', {
// 	invoke(args) { 
//     // request 触发前拼接 url 
// 	// console.log("args: ",args); 
// 	const token = uni.getStorageSync('token')
// 	if(!token){
// 		uni.navigateTo({
// 			url: '/pages/login/login'
// 		})  
// 	}
//   },
//   success(args) {
//     // 请求成功后，修改code值为1 
//     // args.data.code = 1
//   }, 
//   fail(err) {
//     console.log('interceptor-fail',err)
//   }, 
//   complete(res) {
//     console.log('interceptor-complete',res)
//   }
// })

export default request
