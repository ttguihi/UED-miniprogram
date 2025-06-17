"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/contact/contact.js";
  "./pages/user/user.js";
  "./pages/examples/examples.js";
  "./pages/user/settings/settings.js";
  "./pages/user/recognise/recognise.js";
  "./pages/login/login.js";
  "./pages/user/user_info/user_info.js";
  "./pages/user/change_phone/change_phone.js";
  "./pages/user/about_us/about_us.js";
  "./pages/searchAIRO/searchAIRO.js";
  "./pages/example_detail/example_detail.js";
  "./pages/news_detail/news_detail.js";
  "./pages/projects_management/projects_management.js";
  "./pages/business_line/business_line.js";
  "./pages/business_line/business_info/business_info.js";
  "./pages/business_line/view_info/view_info.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
    common_vendor.index.hideTabBar();
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:8", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:11", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  const pinia = common_vendor.createPinia();
  pinia.use(common_vendor.src_default);
  app.use(pinia);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
