"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_search_bar + ExampleCard + NewsCard)();
}
const ExampleCard = () => "../../components/ExampleCard.js";
const NewsCard = () => "../../components/NewsCard.js";
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "examples",
  setup(__props) {
    common_vendor.ref(["精选案例", "最新资讯"]);
    const current = common_vendor.ref(1);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "公司动态"
        }),
        b: common_vendor.p({
          focus: true,
          placeholder: "输入要搜索的关键词",
          radius: 50,
          cancelText: "",
          clearButton: "none",
          cancelButton: "none"
        }),
        c: current.value === 1 ? 1 : "",
        d: common_vendor.o(($event) => current.value = 1),
        e: current.value === 2 ? 1 : "",
        f: common_vendor.o(($event) => current.value = 2),
        g: current.value == 1
      }, current.value == 1 ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-854ecef0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/examples/examples.js.map
