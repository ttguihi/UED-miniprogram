"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_data_select2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_data_select = () => "../../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_forms = () => "../../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_data_select + _easycom_uni_forms)();
}
const CustomNavBar = () => "../../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "add_project",
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
    const handleRegionChange = (e) => {
      common_vendor.index.__f__("log", "at pages/projects_management/add_project/add_project.vue:162", "选择地区:", regions.value.find((item) => item.value === e));
    };
    const handleIndustryChange = (e) => {
      common_vendor.index.__f__("log", "at pages/projects_management/add_project/add_project.vue:167", "选择行业:", industries.value.find((item) => item.value === e));
    };
    const submitForm = async () => {
      try {
        await formRef.value.validate();
        common_vendor.index.__f__("log", "at pages/projects_management/add_project/add_project.vue:174", "表单数据:", formData.value);
        common_vendor.index.showToast({
          title: "保存成功",
          icon: "success"
        });
      } catch (err) {
        common_vendor.index.__f__("log", "at pages/projects_management/add_project/add_project.vue:181", "表单验证失败:", err);
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
      return {
        a: common_vendor.p({
          title: "新建项目"
        }),
        b: common_vendor.o(($event) => formData.value.username = $event),
        c: common_vendor.p({
          placeholder: "请输入会员名称",
          modelValue: formData.value.username
        }),
        d: common_vendor.p({
          label: "优化目标",
          name: "avatar"
        }),
        e: common_vendor.o(($event) => formData.value.username = $event),
        f: common_vendor.p({
          placeholder: "请输入会员名称",
          modelValue: formData.value.username
        }),
        g: common_vendor.p({
          label: "业务线",
          name: "username"
        }),
        h: common_vendor.o(handleRegionChange),
        i: common_vendor.o(($event) => formData.value.region = $event),
        j: common_vendor.p({
          localdata: regions.value,
          placeholder: "",
          modelValue: formData.value.region
        }),
        k: common_vendor.p({
          label: "行业/领域",
          name: "region"
        }),
        l: common_vendor.o(handleIndustryChange),
        m: common_vendor.o(($event) => formData.value.industry = $event),
        n: common_vendor.p({
          localdata: industries.value,
          placeholder: "请选择行业",
          modelValue: formData.value.industry
        }),
        o: common_vendor.p({
          label: "关键词类型",
          name: "industry"
        }),
        p: common_vendor.sr(formRef, "77b89908-1", {
          "k": "formRef"
        }),
        q: common_vendor.p({
          model: formData.value,
          rules
        }),
        r: common_vendor.o(resetForm),
        s: common_vendor.o(submitForm)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-77b89908"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/projects_management/add_project/add_project.js.map
