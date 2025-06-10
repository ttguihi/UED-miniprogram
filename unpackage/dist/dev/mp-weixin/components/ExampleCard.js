"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "ExampleCard",
  props: {
    companyName: String,
    orderIcon: String,
    orderName: String
  },
  setup(__props) {
    const props = __props;
    const aiList = common_vendor.ref(["DeepSeek", "通义千问", "KIMI", "KIMI"]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !props.orderIcon
      }, !props.orderIcon ? {
        b: common_assets._imports_0$2
      } : {}, {
        c: `url(${props.orderIcon})`,
        d: common_vendor.t(props.orderName),
        e: common_vendor.t(props.companyName),
        f: common_vendor.f(aiList.value, (ai, index, i0) => {
          return {
            a: common_vendor.t(ai),
            b: index
          };
        }),
        g: common_vendor.t(props.orderName)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-410fa80a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/ExampleCard.js.map
