"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "BusinessCard",
  props: {
    status: String
  },
  setup(__props) {
    const props = __props;
    const card_status = common_vendor.computed(() => `bg-${props.status}`);
    const obj = common_vendor.reactive({
      "white": "已失效",
      "green": "已生效",
      "orange": "进行中"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(obj[props.status]),
        b: common_vendor.n(`status_${props.status}`),
        c: common_vendor.n(card_status.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-82dbb4f5"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/BusinessCard.js.map
