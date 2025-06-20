"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_CustomNavBar2 = common_vendor.resolveComponent("CustomNavBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_CustomNavBar2 + _easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_CustomNavBar = () => "../../../components/CustomNavBar/CustomNavBar.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_CustomNavBar + _easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "project_info",
  setup(__props) {
    const gotoShare = () => {
      common_vendor.index.navigateTo({
        url: "/pages/share/share"
      });
    };
    const status = common_vendor.ref(0);
    const foldStates = common_vendor.ref({
      1: true,
      2: false,
      3: false
    });
    const toggleFold = (index) => {
      foldStates.value[index] = !foldStates.value[index];
    };
    const popup = common_vendor.ref();
    const open = () => {
      popup.value.open("center");
    };
    const close = () => {
      popup.value.close();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "项目信息"
        }),
        b: status.value == 0
      }, status.value == 0 ? common_vendor.e({
        c: foldStates.value[1] ? 1 : "",
        d: common_vendor.o(($event) => toggleFold(1)),
        e: foldStates.value[1] ? 1 : "",
        f: foldStates.value[2] ? 1 : "",
        g: common_vendor.o(($event) => toggleFold(2)),
        h: foldStates.value[2] ? 1 : "",
        i: status.value == 0
      }, status.value == 0 ? {
        j: common_vendor.p({
          type: "redo-filled",
          color: "#8d3afc"
        }),
        k: common_vendor.o(gotoShare)
      } : {}, {
        l: status.value == 0
      }, status.value == 0 ? {
        m: common_vendor.o(open)
      } : {}) : {}, {
        n: status.value == 1
      }, status.value == 1 ? common_vendor.e({
        o: status.value == 1
      }, status.value == 1 ? {} : {}) : {}, {
        p: common_vendor.o(close),
        q: common_vendor.sr(popup, "37a4a714-2", {
          "k": "popup"
        }),
        r: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-37a4a714"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/projects_management/project_info/project_info.js.map
