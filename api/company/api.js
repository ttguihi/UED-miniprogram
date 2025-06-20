import {
	request
} from "@/utils/request.js"
//获取用户信息接口
export function apiGetCompany() {
	return request({
		url: '/company/getCompany',
	})
}