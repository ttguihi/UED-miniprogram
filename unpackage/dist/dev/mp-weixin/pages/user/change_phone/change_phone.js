"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_CustomNavBar2 = common_vendor.resolveComponent("CustomNavBar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_CustomNavBar2 + _easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_CustomNavBar = () => "../../../components/CustomNavBar/CustomNavBar.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_CustomNavBar + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = {
  __name: "change_phone",
  setup(__props) {
    const formData = common_vendor.reactive({
      phone: "",
      code: ""
    });
    const rules = {
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
      code: {
        rules: [
          {
            required: true,
            errorMessage: "请输入验证码"
          },
          {
            pattern: /^\d{6}$/,
            errorMessage: "验证码格式不正确"
          }
        ]
      }
    };
    const formRef = common_vendor.ref(null);
    const isCounting = common_vendor.ref(false);
    const countdown = common_vendor.ref(60);
    const countdownText = common_vendor.ref("获取验证码");
    const getCode = async () => {
      try {
        await formRef.value.validateField("phone");
        common_vendor.index.showToast({
          title: "验证码已发送",
          icon: "none"
        });
        isCounting.value = true;
        const timer = setInterval(() => {
          countdown.value--;
          countdownText.value = `${countdown.value}秒后重试`;
          if (countdown.value <= 0) {
            clearInterval(timer);
            isCounting.value = false;
            countdown.value = 60;
            countdownText.value = "获取验证码";
          }
        }, 1e3);
      } catch (e) {
        common_vendor.index.__f__("error", "at pages/user/change_phone/change_phone.vue:97", e);
      }
    };
    const handleCancel = () => {
      common_vendor.index.navigateBack();
    };
    const handleSubmit = async () => {
      try {
        await formRef.value.validate();
        common_vendor.index.showToast({
          title: "手机号修改成功",
          icon: "success"
        });
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 1500);
      } catch (e) {
        common_vendor.index.__f__("error", "at pages/user/change_phone/change_phone.vue:125", e);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "更换手机号码"
        }),
        b: common_vendor.o(($event) => formData.phone = $event),
        c: common_vendor.p({
          placeholder: "请输入新手机号",
          modelValue: formData.phone
        }),
        d: common_vendor.p({
          label: "新手机号",
          name: "phone"
        }),
        e: common_vendor.o(($event) => formData.code = $event),
        f: common_vendor.p({
          placeholder: "请输入验证码",
          modelValue: formData.code
        }),
        g: common_vendor.t(countdownText.value),
        h: common_vendor.o(getCode),
        i: isCounting.value,
        j: common_vendor.p({
          label: "验证码",
          name: "code"
        }),
        k: common_vendor.sr(formRef, "c585d7c6-1", {
          "k": "formRef"
        }),
        l: common_vendor.p({
          model: formData,
          rules
        }),
        m: common_vendor.o(handleCancel),
        n: common_vendor.o(handleSubmit)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c585d7c6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/change_phone/change_phone.js.map
