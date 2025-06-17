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
    const formRef = common_vendor.ref();
    const formData = common_vendor.ref({
      avatar: "https://via.placeholder.com/150",
      // 默认头像
      username: "张三",
      region: 1,
      // 默认选择北京
      industry: 3
      // 默认选择IT互联网
    });
    const regions = common_vendor.ref([
      {
        value: 1,
        text: "北京"
      },
      {
        value: 2,
        text: "上海"
      },
      {
        value: 3,
        text: "广州"
      },
      {
        value: 4,
        text: "深圳"
      },
      {
        value: 5,
        text: "杭州"
      }
    ]);
    const industries = common_vendor.ref([
      {
        value: 1,
        text: "金融"
      },
      {
        value: 2,
        text: "教育"
      },
      {
        value: 3,
        text: "IT互联网"
      },
      {
        value: 4,
        text: "医疗"
      },
      {
        value: 5,
        text: "制造业"
      }
    ]);
    const rules = {
      avatar: {
        rules: [{
          required: true,
          errorMessage: "请上传头像"
        }]
      },
      username: {
        rules: [
          {
            required: true,
            errorMessage: "请输入会员名称"
          },
          {
            validate: (value) => {
              if (!value)
                return true;
              if (value.length < 2 || value.length > 10) {
                return "会员名称2-10个字符";
              }
              return true;
            }
          }
        ]
      },
      region: {
        rules: [{
          required: true,
          errorMessage: "请选择地区"
        }]
      },
      industry: {
        rules: [{
          required: true,
          errorMessage: "请选择所属行业"
        }]
      }
    };
    const chooseAvatar = () => {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          formData.value.avatar = res.tempFilePaths[0];
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/user/user_info/user_info.vue:157", "选择头像失败:", err);
          common_vendor.index.showToast({
            title: "选择图片失败",
            icon: "none"
          });
        }
      });
    };
    const handleRegionChange = (e) => {
      common_vendor.index.__f__("log", "at pages/user/user_info/user_info.vue:168", "选择地区:", regions.value.find((item) => item.value === e));
    };
    const handleIndustryChange = (e) => {
      common_vendor.index.__f__("log", "at pages/user/user_info/user_info.vue:173", "选择行业:", industries.value.find((item) => item.value === e));
    };
    const submitForm = async () => {
      try {
        await formRef.value.validate();
        common_vendor.index.__f__("log", "at pages/user/user_info/user_info.vue:180", "表单数据:", formData.value);
        common_vendor.index.showToast({
          title: "保存成功",
          icon: "success"
        });
      } catch (err) {
        common_vendor.index.__f__("log", "at pages/user/user_info/user_info.vue:187", "表单验证失败:", err);
        common_vendor.index.showToast({
          title: err[0].errorMessage,
          icon: "none"
        });
      }
    };
    const resetForm = () => {
      formRef.value = {};
      common_vendor.index.showToast({
        title: "已重置",
        icon: "none"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "个人信息"
        }),
        b: formData.value.avatar
      }, formData.value.avatar ? {
        c: formData.value.avatar
      } : {}, {
        d: common_vendor.o(chooseAvatar),
        e: common_vendor.p({
          label: "客户头像",
          name: "avatar"
        }),
        f: common_vendor.o(($event) => formData.value.username = $event),
        g: common_vendor.p({
          placeholder: "请输入会员名称",
          modelValue: formData.value.username
        }),
        h: common_vendor.p({
          label: "会员名称",
          name: "username"
        }),
        i: common_vendor.o(handleRegionChange),
        j: common_vendor.o(($event) => formData.value.region = $event),
        k: common_vendor.p({
          localdata: regions.value,
          placeholder: "请选择地区",
          modelValue: formData.value.region
        }),
        l: common_vendor.p({
          label: "选择地区",
          name: "region"
        }),
        m: common_vendor.o(handleIndustryChange),
        n: common_vendor.o(($event) => formData.value.industry = $event),
        o: common_vendor.p({
          localdata: industries.value,
          placeholder: "请选择行业",
          modelValue: formData.value.industry
        }),
        p: common_vendor.p({
          label: "所属行业",
          name: "industry"
        }),
        q: common_vendor.sr(formRef, "e61c4d15-1", {
          "k": "formRef"
        }),
        r: common_vendor.p({
          model: formData.value,
          rules
        }),
        s: common_vendor.o(resetForm),
        t: common_vendor.o(submitForm)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e61c4d15"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/user_info/user_info.js.map
