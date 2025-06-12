"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "DetailExampleCard",
  props: {
    companyName: String,
    orderIcon: String,
    orderName: String,
    id: Number,
    ifDetail: Boolean
  },
  setup(__props) {
    const props = __props;
    common_vendor.index.__f__("log", "at components/DetailExampleCard.vue:42", props);
    common_vendor.ref(["DeepSeek", "通义千问", "KIMI", "KIMI"]);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !props.orderIcon
      }, !props.orderIcon ? {
        b: common_assets._imports_0$3
      } : {}, {
        c: `url(${props.orderIcon})`
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fc1ba649"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/DetailExampleCard.js.map
