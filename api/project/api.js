import {
	request
} from "@/utils/request.js"
//获取用户信息接口
export function apiGetProjectsNum() {
	return request({
		url: '/project/getProjectNumber',
	})
}

export function apiGetProjectFirstName() {
	return request({
		url: '/project/getProjectFirstName'
	})
}