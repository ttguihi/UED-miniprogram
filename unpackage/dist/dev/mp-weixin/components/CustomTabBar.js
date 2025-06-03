"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentIndex: 0,
      tabItems: [
        {
          title: "",
          pagePath: "/pages/index/index"
        },
        {
          title: "",
          pagePath: "/pages/contact/contact"
        },
        {
          title: "",
          pagePath: "/pages/user/user"
        }
      ]
    };
  },
  methods: {
    navigateTo(item) {
      common_vendor.index.switchTab({
        url: item.pagePath
      });
    },
    updateActiveTab() {
      const pages = getCurrentPages();
      common_vendor.index.__f__("log", "at components/CustomTabBar.vue:40", pages);
      const currentPage = pages[pages.length - 1];
      let path = currentPage.route || currentPage.__route__;
      if (!path.startsWith("/"))
        path = "/" + path;
      const idx = this.tabItems.findIndex((item) => item.pagePath === path);
      this.currentIndex = idx === -1 ? 0 : idx;
    }
  },
  // 页面每次显示时都更新active
  onShow() {
    this.updateActiveTab();
  },
  mounted() {
    this.updateActiveTab();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tabItems, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: index,
        c: $data.currentIndex === index ? 1 : "",
        d: common_vendor.o(($event) => $options.navigateTo(item), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/CustomTabBar.js.map
