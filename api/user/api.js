import {
	request
} from "@/utils/request.js"
//获取用户信息接口
export function apiGetUserInfo() {
	return request({
		url: '/user/getUser',
	})
}