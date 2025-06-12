"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_icons + NewsCard)();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const NewsCard = () => "../../components/NewsCard.js";
const _sfc_main = {
  __name: "news_detail",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: ""
        }),
        b: common_vendor.p({
          type: "redo-filled",
          color: "#FF7700"
        }),
        c: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: "34343ac9-2-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-34343ac9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/news_detail/news_detail.js.map
