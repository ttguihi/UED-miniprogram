import {
	request
} from "@/utils/request.js"
//获取用户信息接口
export function apiGetUserInfo() {
	return request({
		url: '/user/getUser',
	})
}


//获取企业信息接口 
export function apiGetEnterpriseInfo() {
	return request({
		url: '/company/getCompany'
	})
}

//获取首页信息接口

export function apiGetHomeData() {
	return request({
		url: '/index/getHomeData'
	})
}

//发送验证码

//立即咨询
export function apiSetConsult(data = {}) {
	return request({
		method: "POST",
		url: '/consult/setConsult'
	})
}