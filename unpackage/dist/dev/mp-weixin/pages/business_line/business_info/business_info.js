"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_CustomNavBar2 = common_vendor.resolveComponent("CustomNavBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_CustomNavBar2 + _easycom_uni_icons2)();
}
const _easycom_CustomNavBar = () => "../../../components/CustomNavBar/CustomNavBar.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_CustomNavBar + _easycom_uni_icons)();
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
        b: common_vendor.p({
          type: "right",
          color: "#9e4cfc"
        }),
        c: foldStates.value[1] ? 1 : "",
        d: common_vendor.o(($event) => toggleFold(1)),
        e: foldStates.value[1] ? 1 : "",
        f: foldStates.value[2] ? 1 : "",
        g: common_vendor.o(($event) => toggleFold(2)),
        h: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: common_vendor.o(gotoView)
          };
        }),
        i: foldStates.value[2] ? 1 : "",
        j: foldStates.value[3] ? 1 : "",
        k: common_vendor.o(($event) => toggleFold(3)),
        l: common_vendor.f(10, (item, k0, i0) => {
          return {};
        }),
        m: foldStates.value[3] ? 1 : ""
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1d9b9c41"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/business_line/business_info/business_info.js.map
