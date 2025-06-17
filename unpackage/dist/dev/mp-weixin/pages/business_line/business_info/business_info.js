"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_CustomNavBar2 = common_vendor.resolveComponent("CustomNavBar");
  _easycom_CustomNavBar2();
}
const _easycom_CustomNavBar = () => "../../../components/CustomNavBar/CustomNavBar.js";
if (!Math) {
  _easycom_CustomNavBar();
}
const _sfc_main = {
  __name: "business_info",
  setup(__props) {
    const gotoView = () => {
      common_vendor.index.navigateTo({
        url: "/pages/business_line/view_info/view_info"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: ""
        }),
        b: common_vendor.o(gotoView)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1d9b9c41"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/business_line/business_info/business_info.js.map
