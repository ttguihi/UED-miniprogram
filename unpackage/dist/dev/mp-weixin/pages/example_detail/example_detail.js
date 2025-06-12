"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (CustomNavBar + DetailExampleCard + AIKindCard)();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const DetailExampleCard = () => "../../components/DetailExampleCard.js";
const AIKindCard = () => "../../components/AIKindCard.js";
const _sfc_main = {
  __name: "example_detail",
  setup(__props) {
    common_vendor.ref(false);
    const AIList = common_vendor.ref([
      "DeepSeek",
      "豆包",
      "腾讯元宝",
      "KIMI",
      "通义千问",
      "chatGPT",
      "KIMI",
      "KIMI",
      "DeepSeek"
    ]);
    if (AIList.value.length >= 9) {
      AIList.value[8] = "......";
      AIList.value = AIList.value.slice(0, 9);
      common_vendor.index.__f__("log", "at pages/example_detail/example_detail.vue:52", AIList.value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: ""
        }),
        b: common_vendor.f(AIList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: "6cd3ce7b-2-" + i0
          };
        }),
        c: _ctx.index,
        d: common_vendor.f(5, (item, k0, i0) => {
          return {};
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6cd3ce7b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/example_detail/example_detail.js.map
