// stores/swiper.js
import {
	defineStore
} from 'pinia';
import {
	ref
} from 'vue';
import {
	apiGetHomeData
} from '../api/api';
export const useSwiperStore = defineStore('swiper', () => {
	const swiperData = ref([]); // 存储轮播图数据

	const newsData = ref([])
	// 获取轮播图数据的方法
	const fetchSwiperData = async () => {
		const response = await apiGetHomeData()
		swiperData.value = response.banner;
		// newsData.value = response.informationList;
	};

	//return导出数据
	return {
		swiperData,
		// newsData,
		fetchSwiperData
	}, {
		persist: true

	}
});