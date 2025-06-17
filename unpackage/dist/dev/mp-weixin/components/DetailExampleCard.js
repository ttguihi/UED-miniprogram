"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "DetailExampleCard",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const data = common_vendor.ref();
    common_vendor.ref();
    data.value = props.data;
    common_vendor.index.__f__("log", "at components/DetailExampleCard.vue:48", props.data);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !data.value.image
      }, !data.value.image ? {
        b: common_assets._imports_0$3
      } : {}, {
        c: `url(${data.value.image})`,
        d: common_vendor.t(data.value.orderName),
        e: common_vendor.t(data.value.companyName),
        f: common_vendor.t(data.value.projectName)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fc1ba649"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/DetailExampleCard.js.map
