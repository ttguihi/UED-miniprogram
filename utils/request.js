const BASE_URL = "https://m1.apifoxmock.com/m1/6066905-5757134-default/api/user/v1"
export function request(config = {}) {
	let {
		url,
		method = "GET",
		header = {},
		data = {} //接收一下data 
	} = config
	url = BASE_URL + url
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			data,
			method,
			header,
			success: res => {
				if (res.data.errCode != 0) {
					//向内走一层 获取数据时就不需要写res.data.data了
					resolve(res.data)
				} else if (res.data.errCode === 400) {
					uni.showModal({
						title: '错误提示',
						content: res.data.errMsg,
						showCancel: false
					})
					reject(res.data)
				} else {
					uni.showToast({
						title: res.data.errMsg,
						icon: "none"
					})
					reject(res.data)
				}
			},
			fail: err => {
				reject(err)
			}
		})
	})
}