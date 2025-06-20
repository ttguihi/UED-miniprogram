"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "PopUp",
  setup(__props, { expose: __expose }) {
    const popup = common_vendor.ref();
    const open = () => {
      popup.value.open("center");
    };
    __expose({
      open
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(popup, "3f12f152-0", {
          "k": "popup"
        }),
        b: common_vendor.p({
          type: "center",
          ["border-radius"]: "10px 10px 0 0"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3f12f152"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/PopUp.js.map
