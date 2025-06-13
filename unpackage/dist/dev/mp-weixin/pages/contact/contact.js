"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2 + _easycom_uni_popup2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms + _easycom_uni_popup)();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "contact",
  setup(__props) {
    const popup = common_vendor.ref();
    const open = () => {
      popup.value.open("center");
    };
    const close = () => {
      popup.value.close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "",
          navigateType: "switchTab"
        }),
        b: common_assets._imports_0$1,
        c: common_vendor.p({
          type: "text"
        }),
        d: common_vendor.p({
          label: "姓名",
          name: "name"
        }),
        e: common_vendor.p({
          type: "text"
        }),
        f: common_vendor.p({
          label: "电话",
          name: "name"
        }),
        g: common_vendor.p({
          type: "text"
        }),
        h: common_vendor.p({
          label: "企业名称",
          name: "name"
        }),
        i: common_vendor.p({
          type: "textarea"
        }),
        j: common_vendor.p({
          label: "备注",
          name: "name"
        }),
        k: common_vendor.o(open),
        l: common_vendor.o(close),
        m: common_vendor.sr(popup, "6bf5d4b5-10", {
          "k": "popup"
        }),
        n: common_vendor.p({
          type: "center",
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bf5d4b5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/contact/contact.js.map
