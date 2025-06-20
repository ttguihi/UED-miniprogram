"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "ProjectCard",
  setup(__props) {
    const gotoProjectDetail = () => {
      common_vendor.index.navigateTo({
        url: "/pages/projects_management/project_info/project_info"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "right",
          color: ""
        }),
        b: common_vendor.o(gotoProjectDetail)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-05ca8cb4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/ProjectCard.js.map
