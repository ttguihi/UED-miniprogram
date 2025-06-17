import {
	defineStore
} from 'pinia';
import {
	ref
} from 'vue';

export const useInformationStore = defineStore('news', () => {
	const informationData = ref([]); // 存储资讯数据
	// 获取资讯数据的方法
	// const fetchInfomationData = async () => {
	// 	const response = await apiGetHomeData();
	// 	informationData.value = response.informationList;
	// };
	// 手动设置数据的方法
	const fetchData = (data) => {
		informationData.value = data;
	};
	// 返回 state 和方法
	return {
		informationData,
		fetchData
	};
}, {
	persist: true // 正确传递持久化选项
});