"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "AIKindCard",
  props: {
    size: {
      type: String,
      default: "large"
    }
  },
  setup(__props) {
    const props = __props;
    const sizeStyle = common_vendor.computed(() => `font-${props.size}`);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(sizeStyle.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7f9dbb03"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/AIKindCard.js.map
