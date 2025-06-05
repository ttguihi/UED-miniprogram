"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_search_bar + ExampleCard)();
}
const ExampleCard = () => "../../components/ExampleCard.js";
const _sfc_main = {
  __name: "examples",
  setup(__props) {
    common_vendor.ref(["精选案例", "最新资讯"]);
    const current = common_vendor.ref(1);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          focus: true,
          placeholder: "输入要搜索的关键词",
          radius: 50,
          cancelText: "",
          clearButton: "none",
          cancelButton: "none"
        }),
        b: current.value === 1 ? 1 : "",
        c: common_vendor.o(($event) => current.value = 1),
        d: current.value === 2 ? 1 : "",
        e: common_vendor.o(($event) => current.value = 2),
        f: current.value == 1
      }, current.value == 1 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-854ecef0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/examples/examples.js.map
