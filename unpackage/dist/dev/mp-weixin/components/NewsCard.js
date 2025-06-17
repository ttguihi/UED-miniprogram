"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "NewsCard",
  props: {
    newsCard: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const {
      newsCard: data
    } = props;
    return (_ctx, _cache) => {
      return {
        a: `url(${common_vendor.unref(data).image})`,
        b: common_vendor.t(common_vendor.unref(data).title),
        c: common_vendor.t(common_vendor.unref(data).create_time),
        d: `/pages/news_detail/news_detail?id=${common_vendor.unref(data).id}`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-24cd1ef1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/NewsCard.js.map
