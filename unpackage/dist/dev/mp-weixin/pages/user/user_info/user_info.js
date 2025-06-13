"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_easyinput2 + _easycom_uni_data_select2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_select = () => "../../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_forms_item + _easycom_uni_easyinput + _easycom_uni_data_select + _easycom_uni_forms)();
}
const CustomNavBar = () => "../../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "user_info",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "个人信息"
        }),
        b: common_vendor.p({
          label: "客户头像"
        }),
        c: common_vendor.p({
          placeholder: ""
        }),
        d: common_vendor.p({
          label: "会员名称"
        }),
        e: common_vendor.o(_ctx.change),
        f: common_vendor.o(($event) => _ctx.value = $event),
        g: common_vendor.p({
          localdata: _ctx.range,
          modelValue: _ctx.value
        }),
        h: common_vendor.p({
          label: "选择地区"
        }),
        i: common_vendor.o(_ctx.change),
        j: common_vendor.o(($event) => _ctx.value = $event),
        k: common_vendor.p({
          localdata: _ctx.range,
          modelValue: _ctx.value
        }),
        l: common_vendor.p({
          label: "所属行业"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e61c4d15"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/user_info/user_info.js.map
