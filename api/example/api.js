import {
	request
} from "@/utils/request.js"
//获取用户信息接口
export function apiGetExampleDetail(data = {}) {
	return request({
		url: '/firm/getCaseDetail',
		data
	})
}

export function apiGetExamples(data = {}) {
	return request({
		url: '/firm/getAllCase',
		data
	})
}