"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_CustomNavBar2 = common_vendor.resolveComponent("CustomNavBar");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_CustomNavBar2 + _easycom_uni_forms_item2 + _easycom_uni_easyinput2 + _easycom_uni_data_select2 + _easycom_uni_forms2)();
}
const _easycom_CustomNavBar = () => "../../../components/CustomNavBar/CustomNavBar.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_select = () => "../../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_CustomNavBar + _easycom_uni_forms_item + _easycom_uni_easyinput + _easycom_uni_data_select + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "recognise",
  setup(__props) {
    const value = common_vendor.ref(0);
    const range = common_vendor.ref([
      {
        value: 0,
        text: "篮球"
      },
      {
        value: 1,
        text: "足球"
      },
      {
        value: 2,
        text: "游泳"
      }
    ]);
    const change = (e) => {
      common_vendor.index.__f__("log", "at pages/user/recognise/recognise.vue:62", "e:", e);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "企业认证"
        }),
        b: common_vendor.p({
          label: "企业LOGO"
        }),
        c: common_vendor.p({
          placeholder: ""
        }),
        d: common_vendor.p({
          label: "企业名称"
        }),
        e: common_vendor.o(change),
        f: common_vendor.o(($event) => value.value = $event),
        g: common_vendor.p({
          localdata: range.value,
          modelValue: value.value
        }),
        h: common_vendor.p({
          label: "业务范围"
        }),
        i: common_vendor.p({
          label: "营业执照"
        }),
        j: common_vendor.p({
          placeholder: ""
        }),
        k: common_vendor.p({
          label: "对公账户"
        }),
        l: common_vendor.p({
          placeholder: ""
        }),
        m: common_vendor.p({
          label: "对公账户地址"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-37acf3f4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/recognise/recognise.js.map
