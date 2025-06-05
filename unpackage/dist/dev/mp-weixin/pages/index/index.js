"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  (ExampleCard + CustomTabBar)();
}
const CustomTabBar = () => "../../components/CustomTabBar.js";
const ExampleCard = () => "../../components/ExampleCard.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let itemList = common_vendor.ref([]);
    const flag = common_vendor.ref(false);
    const goTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        //滚动到距离顶部为0
        duration: 200
        //滚动时长
      });
    };
    common_vendor.onPageScroll((e) => {
      if (e.scrollTop > 300) {
        flag.value = true;
      } else {
        flag.value = false;
      }
    });
    const navigatoExamples = () => {
      common_vendor.index.navigateTo({
        url: "/pages/examples/examples"
      });
    };
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
        j: common_vendor.o(navigatoExamples),
        k: flag.value ? 1 : "",
        l: common_vendor.o(goTop),
        m: flag.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
