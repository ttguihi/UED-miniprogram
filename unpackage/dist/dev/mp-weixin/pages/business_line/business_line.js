"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_CustomNavBar2 = common_vendor.resolveComponent("CustomNavBar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  (_easycom_CustomNavBar2 + _easycom_uni_easyinput2)();
}
const _easycom_CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_CustomNavBar + _easycom_uni_easyinput + BusinessCard)();
}
const BusinessCard = () => "../../components/BusinessCard.js";
const _sfc_main = {
  __name: "business_line",
  setup(__props) {
    const current = common_vendor.ref(0);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "我的业务线"
        }),
        b: common_vendor.p({
          placeholder: "请输入关键词",
          placeholderStyle: "font-size:26rpx;"
        }),
        c: current.value === 0 ? 1 : "",
        d: common_vendor.o(($event) => current.value = 0),
        e: current.value === 1 ? 1 : "",
        f: common_vendor.o(($event) => current.value = 1),
        g: current.value === 2 ? 1 : "",
        h: common_vendor.o(($event) => current.value = 2),
        i: current.value === 3 ? 1 : "",
        j: common_vendor.o(($event) => current.value = 3),
        k: common_vendor.p({
          status: "green"
        }),
        l: common_vendor.p({
          status: "green"
        }),
        m: common_vendor.p({
          status: "white"
        }),
        n: common_vendor.p({
          status: "orange"
        }),
        o: current.value == 0,
        p: common_vendor.p({
          status: "orange"
        }),
        q: current.value == 1,
        r: common_vendor.p({
          status: "green"
        }),
        s: common_vendor.p({
          status: "green"
        }),
        t: current.value == 2,
        v: common_vendor.p({
          status: "white"
        }),
        w: common_vendor.p({
          status: "white"
        }),
        x: current.value == 3
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5a647fe1"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/business_line/business_line.js.map
