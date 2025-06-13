import {
	request
} from "../../utils/request";

export function apiGetProjectsNum() {
	return request({
		url: '/project/getNumber',
	})
}