"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  CustomNavBar();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "projects_management",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "项目管理"
        }),
        b: common_vendor.f(_ctx.banner, (item, index, i0) => {
          return {
            a: item.image,
            b: item.linkurl,
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d5d972d8"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/projects_management/projects_management.js.map
