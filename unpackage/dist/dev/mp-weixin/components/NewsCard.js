"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "NewsCard",
  props: {
    createTime: String,
    imageUrl: String,
    title: String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: `url(${props.imageUrl})`,
        b: common_vendor.t(props.title),
        c: common_vendor.t(props.createTime)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-24cd1ef1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/NewsCard.js.map
