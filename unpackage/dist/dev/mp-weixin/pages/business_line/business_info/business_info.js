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
    const foldStates = common_vendor.ref({
      1: true,
      2: false,
      3: false
    });
    const toggleFold = (index) => {
      foldStates.value[index] = !foldStates.value[index];
    };
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
        b: foldStates.value[1] ? 1 : "",
        c: common_vendor.o(($event) => toggleFold(1)),
        d: foldStates.value[1] ? 1 : "",
        e: foldStates.value[2] ? 1 : "",
        f: common_vendor.o(($event) => toggleFold(2)),
        g: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: common_vendor.o(gotoView)
          };
        }),
        h: foldStates.value[2] ? 1 : "",
        i: foldStates.value[3] ? 1 : "",
        j: common_vendor.o(($event) => toggleFold(3)),
        k: common_vendor.f(10, (item, k0, i0) => {
          return {};
        }),
        l: foldStates.value[3] ? 1 : ""
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1d9b9c41"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/business_line/business_info/business_info.js.map
