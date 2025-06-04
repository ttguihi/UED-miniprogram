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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          focus: true,
          placeholder: "搜索"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-854ecef0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/examples/examples.js.map
