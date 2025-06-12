import {
	request
} from "@/utils/request.js"

export function apiSendCode(data = {}) {
	return request({
		url: '/auth/captcha',
		method: "POST",
		data
	})
}