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
    const formData = common_vendor.ref({
      name: "",
      phone: "",
      companyName: "",
      texts: ""
    });
    const rules = {
      name: {
        rules: [
          {
            required: true,
            errorMessage: "请输入姓名"
          },
          {
            pattern: /^(?:[\u4e00-\u9fa5]{3,5}|[a-zA-Z\s]{1,10})$/,
            errorMessage: "姓名无效"
          }
        ]
      },
      phone: {
        rules: [
          {
            required: true,
            errorMessage: "请输入手机号"
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            errorMessage: "手机号格式不正确"
          }
        ]
      },
      companyName: {
        rules: [
          {
            required: true,
            errorMessage: "   请输入企业名称"
          },
          {
            pattern: /^(?!(?:[a-zA-Z\s]+)$)[\u4e00-\u9fa5a-zA-Z0-9\s（）()]{1,20}$/,
            errorMessage: "企业名称无效"
          }
        ]
      },
      texts: {
        rules: [{
          required: false
        }]
      }
    };
    const form = common_vendor.ref();
    const popup = common_vendor.ref();
    const open = () => {
      form.value.validate().then((res) => {
        common_vendor.index.__f__("log", "at pages/contact/contact.vue:227", "Form data:", formData.value);
        popup.value.open("center");
      }).catch((err) => {
        common_vendor.index.__f__("log", "at pages/contact/contact.vue:230", "Form validation failed:", err);
      });
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
        c: common_vendor.o(($event) => formData.value.name = $event),
        d: common_vendor.p({
          type: "text",
          modelValue: formData.value.name
        }),
        e: common_vendor.p({
          label: "姓名",
          name: "name"
        }),
        f: common_vendor.o(($event) => formData.value.phone = $event),
        g: common_vendor.p({
          type: "text",
          modelValue: formData.value.phone
        }),
        h: common_vendor.p({
          label: "电话",
          name: "phone"
        }),
        i: common_vendor.o(($event) => formData.value.companyName = $event),
        j: common_vendor.p({
          type: "text",
          modelValue: formData.value.companyName
        }),
        k: common_vendor.p({
          label: "企业名称",
          name: "companyName"
        }),
        l: common_vendor.o(($event) => formData.value.texts = $event),
        m: common_vendor.p({
          type: "textarea",
          modelValue: formData.value.texts
        }),
        n: common_vendor.p({
          label: "备注",
          name: "texts"
        }),
        o: common_vendor.sr(form, "6bf5d4b5-1", {
          "k": "form"
        }),
        p: common_vendor.p({
          rules,
          model: formData.value
        }),
        q: common_vendor.o(open),
        r: common_vendor.o(close),
        s: common_vendor.sr(popup, "6bf5d4b5-10", {
          "k": "popup"
        }),
        t: common_vendor.p({
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
