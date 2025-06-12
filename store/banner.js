export const useBannerStore = defineStore('banner', () => {
	const banner = ref([])


	const getBanner = (data) {
		banner.value = data
	}
	return {
		count
	}, {
		persist: true
	}
})