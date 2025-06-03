const SYSTEM_INFO = uni.getSystemInfoSync(); //获取系统信息

export const deviceWidth = () => SYSTEM_INFO.windowWidth;


export const deviceHeight = () => SYSTEM_INFO.windowHeight;