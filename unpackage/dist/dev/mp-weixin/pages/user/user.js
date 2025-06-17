"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_api = require("../../api/api.js");
const store_verify = require("../../store/verify.js");
if (!Array) {
  const _easycom_CustomNavBar2 = common_vendor.resolveComponent("CustomNavBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_CustomNavBar2 + _easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_CustomNavBar + _easycom_uni_icons + _easycom_uni_popup + CustomTabBar)();
}
const CustomTabBar = () => "../../components/CustomTabBar.js";
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const verifyStore = store_verify.useVerifyStore();
    const userInfo = common_vendor.ref({});
    const enterpriseInfo = common_vendor.ref({});
    const popup = common_vendor.ref();
    const gotoRecognise = () => {
      common_vendor.index.navigateTo({
        url: "/pages/user/recognise/recognise"
      });
    };
    const open = () => {
      common_vendor.index.__f__("log", "at pages/user/user.vue:252", 1);
      popup.value.open("center");
    };
    const exitLogin = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    };
    const getUserInfo = () => {
      api_api.apiGetUserInfo().then((res) => {
        userInfo.value = res.data.userInfo;
      });
    };
    const getEnterpriseInfo = () => {
      api_api.apiGetEnterpriseInfo().then((res) => {
        enterpriseInfo.value = res;
      });
    };
    getUserInfo();
    getEnterpriseInfo();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "个人中心",
          ifShowArrow: false
        }),
        b: common_vendor.p({
          type: "gear",
          size: "24",
          color: "#fff"
        }),
        c: !common_vendor.unref(verifyStore).ifVerify
      }, !common_vendor.unref(verifyStore).ifVerify ? {
        d: common_vendor.o(gotoRecognise)
      } : {}, {
        e: common_vendor.unref(verifyStore).ifVerify
      }, common_vendor.unref(verifyStore).ifVerify ? {} : {}, {
        f: common_assets._imports_0$2,
        g: common_assets._imports_1$1,
        h: common_assets._imports_2$1,
        i: common_vendor.o(open),
        j: common_assets._imports_3$1,
        k: common_vendor.o(exitLogin),
        l: common_vendor.sr(popup, "0f7520f0-2", {
          "k": "popup"
        }),
        m: common_vendor.p({
          type: "center",
          ["border-radius"]: "10px 10px 0 0"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
