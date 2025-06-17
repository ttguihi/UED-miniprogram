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
    // companyName: String,
    // orderIcon: String,
    // orderName: String,
    // id: Number,
    //传入对象
    exampleCard: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const {
      exampleCard: data
    } = props;
    const aiList = common_vendor.ref(["DeepSeek", "通义千问", "通义千问", "通义千问", "通义千问", "通义千问", "KIMI", "KIMI", "KIMI"]);
    if (aiList.value.length >= 6) {
      aiList.value[5] = "......";
      aiList.value = aiList.value.slice(0, 6);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(data).image
      }, !common_vendor.unref(data).image ? {
        b: common_assets._imports_0$3
      } : {}, {
        c: `url(${common_vendor.unref(data).image})`,
        d: common_vendor.t(common_vendor.unref(data).orderName),
        e: common_vendor.t(common_vendor.unref(data).companyName),
        f: common_vendor.f(aiList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: "410fa80a-0-" + i0
          };
        }),
        g: common_vendor.p({
          size: "small"
        }),
        h: common_vendor.t(common_vendor.unref(data).orderName),
        i: "/pages/example_detail/example_detail?id=" + common_vendor.unref(data).id
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-410fa80a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/ExampleCard.js.map
