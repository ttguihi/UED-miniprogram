"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/system.js");
const api_login_api = require("../../api/login/api.js");
const store_verify = require("../../store/verify.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const verifyStore = store_verify.useVerifyStore();
    const flag = common_vendor.ref(true);
    const sendCode = async () => {
      let res = await api_login_api.apiSendCode();
      common_vendor.index.__f__("log", "at pages/login/login.vue:121", res);
    };
    const wxLogin = () => {
      verifyStore.ifLogin = true;
      common_vendor.index.login({
        provider: "weixin",
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/login/login.vue:128", res);
        }
      });
    };
    const handleClick = () => {
      common_vendor.index.__f__("log", "at pages/login/login.vue:133", flag.value);
      flag.value = !flag.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          ifShowIcon: true,
          ifShowArrow: false
        }),
        b: flag.value
      }, flag.value ? {} : {
        c: common_vendor.p({
          placeholder: ""
        }),
        d: common_vendor.p({
          label: "手机号码"
        }),
        e: common_vendor.p({
          placeholder: ""
        }),
        f: common_vendor.o(sendCode),
        g: common_vendor.p({
          label: "验证码"
        })
      }, {
        h: flag.value
      }, flag.value ? {
        i: common_vendor.o(wxLogin)
      } : {}, {
        j: flag.value
      }, flag.value ? {} : {}, {
        k: common_vendor.o(handleClick)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
