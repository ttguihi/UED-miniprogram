"use strict";
const common_vendor = require("../../../common/vendor.js");
const store_verify = require("../../../store/verify.js");
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
    const verifyStore = store_verify.useVerifyStore();
    const chooseLogo = () => {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          formData.value.logo = res.tempFilePaths[0];
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/user/recognise/recognise.vue:81", "选择LOGO失败:", err);
          common_vendor.index.showToast({
            title: "选择图片失败",
            icon: "none"
          });
        }
      });
    };
    const chooseLicense = () => {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          formData.value.license = res.tempFilePaths[0];
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/user/recognise/recognise.vue:100", "选择营业执照失败:", err);
          common_vendor.index.showToast({
            title: "选择图片失败",
            icon: "none"
          });
        }
      });
    };
    const deleteImage = (type) => {
      common_vendor.index.showModal({
        title: "提示",
        content: `确定要删除${type === "logo" ? "LOGO" : "营业执照"}吗?`,
        success: (res) => {
          if (res.confirm) {
            formData.value[type] = "";
          }
        }
      });
    };
    const formRef = common_vendor.ref();
    const formData = common_vendor.ref({
      logo: "",
      companyName: "",
      businessScope: null,
      license: "",
      accountNumber: "",
      accountAddress: ""
    });
    const businessScopes = common_vendor.ref([
      {
        value: 1,
        text: "电子商务"
      },
      {
        value: 2,
        text: "金融服务"
      },
      {
        value: 3,
        text: "软件开发"
      },
      {
        value: 4,
        text: "教育培训"
      },
      {
        value: 5,
        text: "医疗健康"
      }
    ]);
    const rules = {
      logo: {
        rules: [{
          required: true,
          errorMessage: "请上传企业LOGO"
        }]
      },
      companyName: {
        rules: [
          {
            required: true,
            errorMessage: "请输入企业名称"
          },
          {
            validate: (value) => {
              if (!value)
                return true;
              if (value.length > 20) {
                return "企业名称不超过20个字";
              }
              if (/^[a-zA-Z\s]+$/.test(value)) {
                return "企业名称不能全是英文";
              }
              return true;
            }
          }
        ]
      },
      businessScope: {
        rules: [{
          required: true,
          errorMessage: "请选择业务范围"
        }]
      },
      license: {
        rules: [{
          required: true,
          errorMessage: "请上传营业执照"
        }]
      },
      accountNumber: {
        rules: [
          {
            required: true,
            errorMessage: "请输入对公账号"
          },
          {
            pattern: /^\d{16,20}$/,
            errorMessage: "账号应为16-20位数字"
          }
        ]
      },
      accountAddress: {
        rules: [{
          required: true,
          errorMessage: "请输入开户行地址"
        }]
      }
    };
    const submitForm = async () => {
      try {
        const validate = await formRef.value.validate();
        common_vendor.index.__f__("log", "at pages/user/recognise/recognise.vue:219", "验证通过", validate);
        common_vendor.index.showToast({
          title: "提交成功",
          icon: "success"
        });
        verifyStore.ifVerify = true;
        common_vendor.index.navigateBack();
        common_vendor.index.__f__("log", "at pages/user/recognise/recognise.vue:228", "表单数据:", formData.value);
      } catch (err) {
        common_vendor.index.__f__("log", "at pages/user/recognise/recognise.vue:231", "表单验证失败:", err);
        common_vendor.index.showToast({
          title: err[0].errorMessage,
          icon: "none"
        });
      }
    };
    const resetForm = () => {
      formData.value = "";
      common_vendor.index.showToast({
        title: "已重置",
        icon: "none"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "企业认证"
        }),
        b: formData.value.logo
      }, formData.value.logo ? {
        c: formData.value.logo
      } : {}, {
        d: formData.value.logo
      }, formData.value.logo ? {
        e: common_vendor.o(($event) => deleteImage("logo"))
      } : {}, {
        f: common_vendor.o(chooseLogo),
        g: common_vendor.p({
          label: "企业LOGO",
          ["label-width"]: "50",
          name: "logo"
        }),
        h: common_vendor.o(($event) => formData.value.companyName = $event),
        i: common_vendor.p({
          placeholder: "请输入企业名称",
          modelValue: formData.value.companyName
        }),
        j: common_vendor.p({
          label: "企业名称",
          name: "companyName"
        }),
        k: common_vendor.o(_ctx.change),
        l: common_vendor.o(($event) => formData.value.businessScope = $event),
        m: common_vendor.p({
          localdata: businessScopes.value,
          modelValue: formData.value.businessScope
        }),
        n: common_vendor.p({
          label: "业务范围",
          name: "businessScope"
        }),
        o: formData.value.license
      }, formData.value.license ? {
        p: formData.value.license
      } : {}, {
        q: formData.value.license
      }, formData.value.license ? {
        r: common_vendor.o(($event) => deleteImage("license"))
      } : {}, {
        s: common_vendor.o(chooseLicense),
        t: common_vendor.p({
          label: "营业执照",
          name: "license"
        }),
        v: common_vendor.o(($event) => formData.value.accountNumber = $event),
        w: common_vendor.p({
          placeholder: "请输入对公账号",
          modelValue: formData.value.accountNumber
        }),
        x: common_vendor.p({
          label: "对公账户",
          name: "accountNumber"
        }),
        y: common_vendor.o(($event) => formData.value.accountAddress = $event),
        z: common_vendor.p({
          placeholder: "请输入开户行地址",
          modelValue: formData.value.accountAddress
        }),
        A: common_vendor.p({
          label: "对公账户地址",
          name: "accountAddress"
        }),
        B: common_vendor.sr(formRef, "37acf3f4-1", {
          "k": "formRef"
        }),
        C: common_vendor.p({
          model: formData.value,
          rules
        }),
        D: common_vendor.o(resetForm),
        E: common_vendor.o(submitForm)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-37acf3f4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/recognise/recognise.js.map
