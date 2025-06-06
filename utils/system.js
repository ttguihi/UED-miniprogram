const SYSTEM_INFO = uni.getSystemInfoSync(); //获取系统信息函数

export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15; //获取手机状态栏高度

//获取标题栏高度
export const getTitleBarHeight = () => {
	//获取胶囊按钮状态
	if (uni.getMenuButtonBoundingClientRect) {
		let {
			top,
			height
		} = uni.getMenuButtonBoundingClientRect();
		return height + (top - getStatusBarHeight()) * 2
	} else {
		return 40;
	}
}
//状态栏+标题栏高度
export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();