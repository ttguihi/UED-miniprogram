"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
if (!Math) {
  AIKindCard();
}
const AIKindCard = () => "./AIKindCard.js";
const _sfc_main = {
  __name: "ExampleCard",
  props: {
    companyName: String,
    orderIcon: String,
    orderName: String,
    id: Number,
    ifDetail: Boolean
  },
  setup(__props) {
    const props = __props;
    common_vendor.index.__f__("log", "at components/ExampleCard.vue:61", props);
    const aiList = common_vendor.ref(["DeepSeek", "通义千问", "通义千问", "通义千问", "KIMI", "KIMI", "KIMI", "KIMI"]);
    if (aiList.value.length >= 7) {
      aiList.value[6] = "......";
      aiList.value = aiList.value.slice(0, 7);
      common_vendor.index.__f__("log", "at components/ExampleCard.vue:69", aiList.value);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !props.orderIcon
      }, !props.orderIcon ? {
        b: common_assets._imports_0$3
      } : {}, {
        c: `url(${props.orderIcon})`,
        d: common_vendor.t(props.orderName),
        e: common_vendor.t(props.companyName),
        f: common_vendor.f(aiList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: "410fa80a-0-" + i0
          };
        }),
        g: common_vendor.p({
          size: "small"
        }),
        h: common_vendor.t(props.orderName),
        i: "/pages/example_detail/example_detail?id=" + props.id
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-410fa80a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/ExampleCard.js.map
