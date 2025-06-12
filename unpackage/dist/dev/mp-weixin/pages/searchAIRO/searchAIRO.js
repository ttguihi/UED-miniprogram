"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_search_bar)();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "searchAIRO",
  setup(__props) {
    const banner = common_vendor.index.getStorageSync("bannerList");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "AIRO查询"
        }),
        b: common_vendor.f(common_vendor.unref(banner), (item, index, i0) => {
          return {
            a: item.image,
            b: item.linkurl,
            c: index
          };
        }),
        c: common_vendor.p({
          placeholder: "请输入关键词"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1a2d0d03"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/searchAIRO/searchAIRO.js.map
