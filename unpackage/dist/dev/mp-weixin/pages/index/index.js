"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  CustomTabBar();
}
const CustomTabBar = () => "../../components/CustomTabBar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let itemList = common_vendor.ref([]);
    itemList.value = [{
      iconPath: "/common/images/index/service.jpg",
      text: "平台客服"
    }, {
      iconPath: "/common/images/index/order_green.jpg",
      text: "我的业务线"
    }, {
      iconPath: "/common/images/index/order_purple.jpg",
      text: "公司动态"
    }];
    common_vendor.index.__f__("log", "at pages/index/index.vue:214", itemList.value);
    const navigatoExamples = () => {
      common_vendor.index.navigateTo({
        url: "/pages/examples/examples"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: item + "item"
          };
        }),
        e: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        f: common_assets._imports_2,
        g: common_assets._imports_3,
        h: common_assets._imports_4,
        i: common_vendor.f(common_vendor.unref(itemList), (item, index, i0) => {
          return {
            a: common_vendor.n(`iconBox${index + 1}`),
            b: common_vendor.t(item.text),
            c: index + "index"
          };
        }),
        j: common_vendor.o(navigatoExamples)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
