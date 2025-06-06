"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  CustomNavBar();
}
const CustomNavBar = () => "../../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "settings",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "设置"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8ada08f1"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/settings/settings.js.map
