import {
	request
} from "@/utils/request.js"
//获取用户信息接口
export function apiGetAllBusiness() {
	return request({
		url: '/business/getAllBusiness',
	})
}