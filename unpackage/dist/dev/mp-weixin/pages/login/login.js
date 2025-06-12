"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/system.js");
const api_login_api = require("../../api/login/api.js");
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
    const flag = common_vendor.ref(true);
    const sendCode = async () => {
      let res = await api_login_api.apiSendCode();
      common_vendor.index.__f__("log", "at pages/login/login.vue:117", res);
    };
    const wxLogin = () => {
      common_vendor.index.login({
        provider: "weixin",
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/login/login.vue:123", res);
        }
      });
    };
    const handleClick = () => {
      common_vendor.index.__f__("log", "at pages/login/login.vue:128", flag.value);
      flag.value = !flag.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: flag.value
      }, flag.value ? {} : {
        b: common_vendor.p({
          placeholder: ""
        }),
        c: common_vendor.p({
          label: "手机号码"
        }),
        d: common_vendor.p({
          placeholder: ""
        }),
        e: common_vendor.o(sendCode),
        f: common_vendor.p({
          label: "验证码"
        })
      }, {
        g: flag.value
      }, flag.value ? {
        h: common_vendor.o(wxLogin)
      } : {}, {
        i: flag.value
      }, flag.value ? {} : {}, {
        j: common_vendor.o(handleClick)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map
