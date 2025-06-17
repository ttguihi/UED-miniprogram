import {
	defineStore
} from 'pinia';
import {
	ref
} from 'vue';

//登录状态 和 公司验证状态
export const useVerifyStore = defineStore('verify', () => {
	const ifLogin = ref(false);
	const ifVerify = ref(false)

	const login = () => {
		ifLogin.value = true
	}
	const verify = () => {
		ifVerify.value = true
	}

	// 返回 state 和方法
	return {
		ifLogin,
		ifVerify,
		login,
		verify
	};
}, {
	persist: true // 正确传递持久化选项
});