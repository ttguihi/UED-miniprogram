"use strict";
const common_vendor = require("../../common/vendor.js");
const store_swiper = require("../../store/swiper.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_easyinput2 + _easycom_uni_icons2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_easyinput + _easycom_uni_icons)();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "searchAIRO",
  setup(__props) {
    const swiperStore = store_swiper.useSwiperStore();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "AIRO查询"
        }),
        b: common_vendor.f(common_vendor.unref(swiperStore).swiperData, (item, index, i0) => {
          return {
            a: item.image,
            b: item.linkurl,
            c: index
          };
        }),
        c: common_vendor.p({
          placeholder: "请输入关键词",
          placeholderStyle: "fontSize:24rpx; margin-left:14rpx;"
        }),
        d: common_vendor.p({
          type: "search",
          color: "#fff",
          size: "30"
        }),
        e: common_vendor.f(8, (item, k0, i0) => {
          return {};
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1a2d0d03"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/searchAIRO/searchAIRO.js.map
