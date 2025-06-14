import {
	request
} from "@/utils/request.js"
//获取用户信息接口
export function apiGetNewsDetail(data = {}) {
	return request({
		url: '/firm/getInformationDetail',
		data
	})
}